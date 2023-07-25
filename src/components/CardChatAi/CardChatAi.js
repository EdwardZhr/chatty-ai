import "./CardChatAi.css"
import React from "react";
import avatar from "../../images/avatar.svg";
import imgRandom from "../../images/img-random.png";

function CardChatAi() {
   return (
      <>
         <div className="chatAi-card">
            <div>
               <img src={avatar} alt="логопит" />
               <div>
                  <p>Chatty AI</p>
                  <p>Я хочу помочь тебе с выступлением — запиши аудио, и отправь его мне</p>
               </div>
            </div>
            <div>
               <data>14.08.23</data>
               <img src={imgRandom} alt="изображеие от ChatAi" />
               <div>
                  <p>Презентация Спринта 12</p>
                  <p>UI design kit</p>
               </div>
            </div>
         </div>
      </>
   )
}

export default CardChatAi;