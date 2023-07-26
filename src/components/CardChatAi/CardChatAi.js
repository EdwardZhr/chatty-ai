import "./CardChatAi.css"
import React from "react";
import avatarColor from "../../images/avatarColor.svg";
import imgRandom from "../../images/img-random.svg";

function CardChatAi() {
   return (
      <>
         <div className="chatAi-card">
            <div className="chatAi-card__container">
               <div className="chatAi-card__box">
                  <div className="chatAi-card__box-img" >
                     <img src={avatarColor} alt="логопит" />
                  </div>

                  <div>
                     <p className="chatAi-card__box-text" >Chatty AI</p>
                     <p className="chatAi-card__box-text">Я хочу помочь тебе с выступлением — запиши аудио, и отправь его мне</p>
                  </div>
               </div>

               <div className="chatAi-card__box">
                  <data className="chatAi-card__box-data">14.08.23</data>
                  <img className="chatAi-card__box-photo" src={imgRandom} alt="изображеие от ChatAi" />
                  <div>
                     <p className="chatAi-card__box-info">Презентация <br /> Спринта 12</p>
                     <p className="chatAi-card__box-subinfo">UI design kit</p>
                  </div>
               </div>
            </div>

         </div>
      </>
   )
}

export default CardChatAi;