import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState('Initial');
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const chunksRef = useRef([]);
  const [audioURL, setAudioURL] = useState(null)

  useEffect(() => {
    const getUserMedia = async () => {
      const stream = await  navigator.mediaDevices.getUserMedia({audio: true});
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      }

      recorder.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, {'type': 'audio/ogg; codecs=opus'})
        chunksRef.current = [];
        setAudioURL(window.URL.createObjectURL(audioBlob))

        const reader = new FileReader();
        reader.onloadend = function() {
            const base64Data = reader.result.split(',')[1];
            const apiKey = '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';
            const openAIEndpoint = 'https://api.openai.com/v1/audio/transcriptions';
            console.log(base64Data)
            const data = JSON.stringify({ file: base64Data, model: "whisper-1" });

            fetch(openAIEndpoint, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: data
            })
            .then(response => response.json())
            .then(result => {
                console.log('Ответ от OpenAI:');
                console.log(result);
            })
            .catch(error => console.error('Ошибка при отправке аудио на OpenAI API:', error));
          }
        reader.readAsDataURL(audioBlob);
      }

      setMediaRecorder(recorder);      
    }
    getUserMedia()
      .catch(error => console.log('Error accessing microphone:', error));
  }, [])

  function handleStartRecording() {
    console.log(process.env)
    console.log(process.env.AI_API_KEY)
    setState('Record')
    mediaRecorder.start()
  }

  function handleStopRecording() {
    setState('Initial')
    mediaRecorder.stop();
  };

  // function sendAudio(e) {
  //   mediaRecorder.onstop = function() {
  //       const reader = new FileReader();
  //       reader.onloadend = function() {
  //           const base64Data = reader.result.split(',')[1];
  //           const apiKey = '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';
  //           const openAIEndpoint = 'https://api.openai.com/v1/voice-calls';

  //           const data = JSON.stringify({ audio: base64Data });

  //           setState('Initial')
  //           fetch(openAIEndpoint, {
  //               method: 'POST',
  //               headers: {
  //                   'Authorization': `Bearer ${apiKey}`,
  //                   'Content-Type': 'application/json'
  //               },
  //               body: data
  //           })
  //           .then(response => response.json())
  //           .then(result => {
  //               console.log('Ответ от OpenAI:');
  //               console.log(result);
  //           })
  //           .catch(error => console.error('Ошибка при отправке аудио на OpenAI API:', error));
  //       };
  //       reader.readAsDataURL(audioBlob);
  //   };
  // }

  return (
    <div className="App">
      <div className="container">
          <div className="display">
            {audioURL && <audio controls src={audioURL}>
            </audio>}
            {audioURL && <a href={audioURL} download='audio'>Скачать</a>}
          </div>

          <div className="controllers">
            {(state === 'Initial' && 
              <button onClick={handleStartRecording}>Start</button>)
            || (state === 'Record' &&
            <button onClick={handleStopRecording}>Stop</button>)
            }
          </div>
      </div>
    </div>
  );
}

export default App;
