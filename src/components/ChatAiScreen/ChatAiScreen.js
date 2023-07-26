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

         <CardChatAi />

         <div className="chatAiScreen__box-audio">
            <p className="chatAiScreen__box-text">Категории</p>
            <div className="chatAiScreen__box-param">
               <ul className="chatAiScreen__list-param">
                  <li className="chatAiScreen__list-item">Очистить от слов-паразитов</li>
                  <li className="chatAiScreen__list-item">Структурировать текст</li>
                  <li className="chatAiScreen__list-item">Структурировать текст</li>
                  <li className="chatAiScreen__list-item">Структурировать текст</li>
               </ul>
               <button className="chatAiScreen__box-btn" ><img src={btnDelete} alt="кнопка удалить" /></button>
            </div>

            <div className="chatAiScreen__box-recording">
               <div className="chatAiScreen__box-time">
                  <div className="chatAiScreen__btn-time">
                     <img src={pause} alt=''/>
                  </div>
                  <p>0:13/2:48</p>
               </div>

               <img className="chatAiScreen__recording-img" src={audioRut} alt=''/>
               <div className="chatAiScreen__box-send">
                  <div className="chatAiScreen__btn-attachment">
                     <img src={attachment} alt=''/>
                  </div>
                  <div className="chatAiScreen__btn-send">
                     <img src={send} alt=''/>
                  </div>

               </div>
            </div>

            <p className="chatAiScreen__text">
               Все результаты генерируются искусственным интеллектом, если вы получите какие-либо неправильные ответы,
               <a className="chatAiScreen__text-link" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" target="_blanck"> сообщите об этом здесь</a>

            </p>
         </div>
      </div>


   )
};

export default ChatAiScreen;