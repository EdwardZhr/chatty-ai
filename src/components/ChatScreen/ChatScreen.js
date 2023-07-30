import './ChatScreen.css'
import RecordingInput from '../RecordingInput/RecordingInput';
import TextMessage from '../TextMessage/TextMessage';
import AudioMessage from '../AudioMessage/AudioMessage';


function ChatScreen({audioInputState, onStartRecording, onSendRecording, recordingTime, messages, }) {

   return (
      <div className='chat-screen' >
         <div className='chat-screen__chat'>
            {messages.map((message, index) => {
               return message.isOwner === true ? 
                  <AudioMessage key={index} src={message.src}/> :
                  <TextMessage key={index} text={message.text}/>
            }
            )}
         </div >
         <RecordingInput 
            audioInputState={audioInputState} 
            onStartRecording={onStartRecording} 
            onSendRecording={onSendRecording}
            recordingTime={recordingTime}/>
      </div>


   )
};

export default ChatScreen;