import './App.css';
import { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as openAiApi from '../../utils/OpenAIApi'
import Saitbar from '../Saitbar/Saitbar';
import MainScreen from '../MainScreen/MainScreen'
import ChatAiScreen from '../ChatAiScreen/ChatAiScreen';


function App() {
  const [state, setState] = useState('Initial');
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const chunksRef = useRef([]);
  const [audioURL, setAudioURL] = useState(null)
  const [transcription, setTranscription] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  useEffect(() => {
    const getUserMedia = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      }

      recorder.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { 'type': 'audio/wav' })
        chunksRef.current = [];
        setAudioURL(window.URL.createObjectURL(audioBlob))

        const audioFile = new File([audioBlob], 'audio.wav', { type: 'audio/wav' });
        const formData = new FormData();
        formData.append('file', audioFile);
        formData.append('model', 'whisper-1');
        formData.append('language', 'ru')

        try {
          const transcription = await openAiApi.sendAudio(formData);
          setTranscription(transcription)
          const aiResponse = await openAiApi.sendText(transcription);
          setAiResponse(aiResponse)
        } catch(error) {
          console.log(error.message)
        }
      }

      setMediaRecorder(recorder);
    }
    getUserMedia()
      .catch(error => console.log('Error accessing microphone:', error));
  }, [])

  function handleStartRecording() {
    setState('Record')
    mediaRecorder.start()
  }

  function handleStopRecording() {
    setState('Initial')
    mediaRecorder.stop();
  };

  return (
    // <div className="App">
    //   <div className="container">
    //     <div className="display">
    //       {audioURL && <audio controls src={audioURL}>
    //       </audio>}
    //       {audioURL && <a href={audioURL} download='audio'>Скачать</a>}
    //       <div>Вопрос: {transcription}</div>
    //       <div>Ответ: {aiResponse}</div>
    //     </div>

    //     <div className="controllers">
    //       {(state === 'Initial' &&
    //         <button onClick={handleStartRecording}>Start</button>)
    //         || (state === 'Record' &&
    //           <button onClick={handleStopRecording}>Stop</button>)
    //       }
    //     </div>
    //     <div>Тест2</div>
    //   </div>
      <Routes>

        <Route path='/chatty-ai' element={
          <div className='container'>
            <Saitbar />
            <MainScreen />
          </div>
        } />

        <Route path='/chatty-recording' element={
            <div className='container'>
              <Saitbar />
              <ChatAiScreen />
            </div>
        } />

      </Routes>

    </div >
  );
}

export default App;
