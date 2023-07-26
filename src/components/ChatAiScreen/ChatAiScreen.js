import "./ChatAiScreen.css"
import React from "react";
import CardChatAi from "../CardChatAi/CardChatAi";
import tag from "../../images/tag.svg"
import points from "../../images/points.svg"
import btnDelete from "../../images/btn-delete.svg"
import pause from "../../images/pause.svg"
import audioRut from "../../images/audio-rut.svg"
import attachment from "../../images/attachment.svg"
import send from "../../images/send.svg"

function ChatAiScreen() {
   return (

      <div className="chatAiScreen">
         <div className="chatAiScreen__box">

            <div>
               <img src={tag} alt="тег" />
               <p>Чат AI</p>
            </div>

            <div>
               <form>
                  <label>Последняя запись</label>
                  <select id="select">
                     <option>

                     </option>
                  </select>
               </form>
               <img src={points} alt="точки" />
            </div>

         </div >

         <CardChatAi />

         <div className="chatAiScreen__box-audio">
            <p>Категории</p>
            <div className="chatAiScreen__box-param">
               <div className="chatAiScreen__list-param">
                  <p>Очистить от слов-паразитов</p>
                  <p>Структурировать текст</p>
                  <p>Структурировать текст</p>
                  <p>Структурировать текст</p>
                  <p>Структурировать текст</p>
                  <p>Структурировать текст</p>
               </div>
               <button><img src={btnDelete} alt="кнопка удалить" /></button>
            </div>

            <div className="chatAiScreen__box-recording">
               <div className="chatAiScreen__box-time">
                  <img src={pause} />
                  <p>0:13/2:48</p>
               </div>

               <img className="chatAiScreen__recording-img" src={audioRut} />
               <div className="chatAiScreen__box-send">
                  <img src={attachment} />
                  <img src={send} />
               </div>
            </div>

            <p>
               Все результаты генерируются искусственным интеллектом, если вы получите какие-либо неправильные ответы,
               <a href="#" target="_blanck"> сообщите об этом здесь</a>

            </p>
         </div>
      </div>


   )
};

export default ChatAiScreen;