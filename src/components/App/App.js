import './App.css';
import { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as openAiApi from '../../utils/OpenAIApi'
import Sidebar from '../Sidebar/Sidebar';
import MainScreen from '../MainScreen/MainScreen'
import ChatScreen from '../ChatScreen/ChatScreen';
import { INITIAL_MESSAGE } from '../../utils/systemMessages';
import {RECORDING_DURATION} from '../../utils/constants';


function App() {
  const [audioInputState, setAudioInputState] = useState('Initial');
  const [audioURL, setAudioURL] = useState(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const mediaRecorderRef = useRef(null);
  const audioBlobRef = useRef(null);
  const chunksRef = useRef([]);
  const intervalRef = useRef(null);


  const [transcription, setTranscription] = useState('');

  useEffect(()=>{
    console.log(messages)
  }, [messages])

  useEffect(() => {
    console.log(audioInputState)
    if (audioInputState==='Recording') {
      intervalRef.current = setInterval(() => {
        setRecordingTime((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [audioInputState]);

  useEffect(() => {
    console.log(recordingTime)
    console.log(RECORDING_DURATION/1000)
    if (recordingTime >= RECORDING_DURATION/1000) {
      handleStopRecording();
    }
  }, [recordingTime]);

  const getUserMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      return stream;
    } catch (error) {
      throw new Error('Ошибка доступа к микрофону: ' + error.message);
    }
  }

  const handleStartRecording = async () => {
    let stream
    try {
      stream = await getUserMedia();
    } catch (error) {
      console.error(error)
      return
    } 

    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (e) => {
      chunksRef.current.push(e.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(chunksRef.current, { 'type': 'audio/wav' })
      chunksRef.current = [];
      setAudioURL(window.URL.createObjectURL(audioBlob))
      audioBlobRef.current = audioBlob;
    };

    mediaRecorderRef.current.start();
    setAudioInputState('Recording');
  }

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setAudioInputState('Pause');
    }
  }

  const handleSendRecording = async () => {
    handleStopRecording()
    await new Promise(resolve=> setTimeout(resolve, 0))
    setMessages([...messages, {isOwner:true, src: window.URL.createObjectURL(audioBlobRef.current)}])
    const audioFile = new File([audioBlobRef.current], 'audio.wav', { type: 'audio/wav' });
    const formData = new FormData();
    formData.append('file', audioFile);
    formData.append('model', 'whisper-1');

    try {
      const transcription = await openAiApi.sendAudio(formData);
      setTranscription(transcription)
      const aiResponse = await openAiApi.sendText(transcription);
      console.log(messages)
      setMessages([...messages, {isOwner:true, src: window.URL.createObjectURL(audioBlobRef.current)}, {isOwner:false, text:`${aiResponse}`}])
    } catch (error) {
      console.log(error.message)
    }
    setRecordingTime(0);
    setAudioInputState('Initial')
  }

  const handlePlayAudio = (src) => {
  }

  return (
    <div className='App'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/recording" element={<ChatScreen 
          audioInputState={audioInputState} 
          onStartRecording={handleStartRecording} 
          onSendRecording={handleSendRecording}
          onPlayAudio={handlePlayAudio}
          recordingTime={recordingTime}
          messages={messages}
          />} />
      </Routes>
    </div >
  );
}

export default App;
