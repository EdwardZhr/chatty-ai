import './ChatScreen.css'
import RecordingInput from '../RecordingInput/RecordingInput';
import CardChatAi from '../TextMessage/TextMessage';
import CardAudio from '../CardAudio/CardAudio';
import url from '../../Mp3/rington.mp3'


function ChatScreen({audioInputState, onStartRecording, onSendRecording, recordingTime, messages}) {

   return (
      <div className='chat-screen' >
         <div className='chat-screen__chat'>
            {messages.map((message, index) => {
               return message.isOwner === true ? 
                  <CardAudio key={index} url={url} /> :
                  <CardChatAi key={index} text={message.text}/>
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