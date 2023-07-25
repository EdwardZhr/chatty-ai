import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState('Initial');
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const chunksRef = useRef([]);
  const [audioURL, setAudioURL] = useState(null)
  const [transcription, setTranscription] = useState('');
  const [question, setQuestion] = useState('');
  const openAIEndpoint = 'https://api.openai.com/v1/audio/transcriptions';
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  const testKey = process.env.REACT_APP_TEST_KEY;
  const apiKey = process.env.REACT_APP_APISECRET.split(',').reverse().join('');

  useEffect(() => {
    console.log(testKey)
    const getUserMedia = async () => {
      const stream = await  navigator.mediaDevices.getUserMedia({audio: true});
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      }

      recorder.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, {'type': 'audio/wav'})
        chunksRef.current = [];
        setAudioURL(window.URL.createObjectURL(audioBlob))
        
        const audioFile = new File([audioBlob], 'audio.wav', { type: 'audio/wav' });
        const formData = new FormData();
        formData.append('file', audioFile);
        formData.append('model', 'whisper-1');
        formData.append('language', 'ru')

        fetch(openAIEndpoint, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
          },
          body: formData 
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Ошибка при отправке аудио на OpenAI API');
          }
          return response.json();
        })
        .then(result => {
          setQuestion(result.text)
          fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
           },
            body: JSON.stringify({
              model: 'gpt-3.5-turbo', 
              messages: [
                 {
                    role: 'user',
                    content: result.text,
                 },
              ],
           }),
         })
          .then(response => {
            if (!response.ok) {
              throw new Error('Ошибка при отправке аудио на OpenAI API');
            }
            return response.json();
          })
          .then(result => {
            setTranscription(result.choices[0].message.content);
          })
        })
        .catch(error => {
          console.error('Ошибка при отправке аудио на OpenAI API:', error.message);
          setTranscription('Произошла ошибка');
        });
      }

      setMediaRecorder(recorder);      
    }
    getUserMedia()
      .catch(error => console.log('Error accessing microphone:', error));
  }, [apiKey, testKey])

  function handleStartRecording() {
    setState('Record')
    mediaRecorder.start()
  }

  function handleStopRecording() {
    setState('Initial')
    mediaRecorder.stop();
  };

  return (
    <div className="App">
      <div className="container">
          <div className="display">
            {audioURL && <audio controls src={audioURL}>
            </audio>}
            {audioURL && <a href={audioURL} download='audio'>Скачать</a>}
            <div>Запрос:{question}</div>
            <div>Ответ:{transcription}</div>
          </div>
          
          <div className="controllers">
            {(state === 'Initial' && 
              <button onClick={handleStartRecording}>Start</button>)
            || (state === 'Record' &&
            <button onClick={handleStopRecording}>Stop</button>)
            }
          </div>
          <div>Тест2</div>
      </div>
    </div>
  );
}

export default App;
