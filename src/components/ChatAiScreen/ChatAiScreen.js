import "./ChatAiScreen.css"
import React from "react";
import CardChatAi from "../CardChatAi/CardChatAi";
import CardAudio from "../CardAudio/CardAudio";
import RecordingInput from "../RecordingInput/RecordingInput";
import tag from "../../images/tag.svg"
import points from "../../images/points.svg"
import btnDelete from "../../images/btn-delete.svg"
import pause from "../../images/pause.svg"
import audioRut from "../../images/audio-rut.svg"
import send from "../../images/send.svg"

//test
import chats from "../TestArr/TestArr"
import url from "../../Mp3/rington.mp3"
//test
function ChatAiScreen({audioInputState, onStartRecording, onSendRecording, recordingTime}) {
   // console.log(chats)
   return (

      <div className="chatAiScreen" >
         <div className="chatAiScreen__box">

            <div className="chatAiScreen__tag">
               <div>
                  <img src={tag} alt="тег" />
               </div>
               <p className="chatAiScreen__tag-text">Чат AI</p>
            </div>

            <div className="chatAiScreen__history">
               <form className="chatAiScreen__history-form">
                  <select className="chatAiScreen__history-list">
                     <option>
                        Последняя запись
                     </option>
                     <option>
                        Следущая запись
                     </option>
                  </select>
               </form>
               <div className="chatAiScreen__history-more">
                  <img src={points} alt="точки" />
               </div>

            </div>

         </div >
         {/* <div className="chatAiScreen__box-chats">

            {chats.map((chat, index) => {


               return chat.isOwner === true ? <CardChatAi key={index} name={chat.name} text={chat.text} /> : <CardAudio key={index} url={url} />;


            }
            )} */}
            {/* <CardChatAi />
            <CardAudio /> */}
         {/* </div > */}
         <RecordingInput 
            audioInputState={audioInputState} 
            onStartRecording={onStartRecording} 
            onSendRecording={onSendRecording}
            recordingTime={recordingTime}/>
      </div>


   )
};

export default ChatAiScreen;