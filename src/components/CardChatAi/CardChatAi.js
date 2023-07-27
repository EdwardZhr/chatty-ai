import "./CardChatAi.css"
import React from "react";
import avatarColor from "../../images/avatarColor.svg";
import imgRandom from "../../images/img-random.svg";

function CardChatAi() {
   return (
      <>
         <div className="chatAi-card">
            <div className="chatAi-card__container-main" >
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

               <div className="chatAi-card__container-cath">
                  <div className="chatAi-card__cath">
                     <p className="chatAi-card__cath-name">@janediz</p>
                     <p className="chatAi-card__cath-text">
                        Назначение Демо – показ результатов, достигнутых командой, и их оценка стейкхолдерами. Именно получение оценки от стейкхолдеров является основной функцией демо: соответствует ли это их ожиданиям, решает ли поставленные задачи и приносит ли ценность. И официальное название в Scrum Guide – Sprint Review это подчеркивает. Но термин «Демо» является устоявшимся в сообществе, гораздо более коротким и я предпочитаю использовать именно его, тем более, что исторически именно это название я узнал первым, прочитав в 2007 книгу Хенрика Книберга «Скрам и XP: заметки с передовой», которую уже упоминал в предыдущей статье.
                        Возникает вопрос: а почему, собственно нужна такая обратная связь?Ведь задачи в процессе исполнения перемещались по доске, каждая смена статуса имела свой чек-лист завершения, о чем я писал в статье «Доска - визуализация текущего состояния работы», включая, естественно, критерий сделанной задачи, Definition of Done (DoD)? Разве этого недостаточно? Ответ: нет, этого недостаточно.
                        Назначение Демо – показ результатов, достигнутых командой, и их оценка стейкхолдерами. Именно получение оценки от стейкхолдеров является основной функцией демо: соответствует ли это их ожиданиям, решает ли поставленные задачи и приносит ли ценность. И официальное название в Scrum Guide – Sprint Review это подчеркивает. Но термин «Демо» является устоявшимся в сообществе, гораздо более коротким и я предпочитаю использовать именно его, тем более, что исторически именно это название я узнал первым, прочитав в 2007 книгу Хенрика Книберга «Скрам и XP: заметки с передовой», которую уже упоминал в предыдущей статье.
                        Назначение Демо – показ результатов, достигнутых командой, и их оценка стейкхолдерами. Именно получение оценки от стейкхолдеров является основной функцией демо: соответствует ли это их ожиданиям, решает ли поставленные задачи и приносит ли ценность. И официальное название в Scrum Guide – Sprint Review это подчеркивает. Но термин «Демо» является устоявшимся в сообществе, гораздо более коротким и я предпочитаю использовать именно его, тем более, что исторически именно это название я узнал первым, прочитав в 2007 книгу Хенрика Книберга «Скрам и XP: заметки с передовой», которую уже упоминал в предыдущей статье.
                        Возникает вопрос: а почему, собственно нужна такая обратная связь?Ведь задачи в процессе исполнения перемещались по доске, каждая смена статуса имела свой чек-лист завершения, о чем я писал в статье «Доска - визуализация текущего состояния работы», включая, естественно, критерий сделанной задачи, Definition of Done (DoD)? Разве этого недостаточно? Ответ: нет, этого недостаточно.
                        Назначение Демо – показ результатов, достигнутых командой, и их оценка стейкхолдерами. Именно получение оценки от стейкхолдеров является основной функцией демо: соответствует ли это их ожиданиям, решает ли поставленные задачи и приносит ли ценность. И официальное название в Scrum Guide – Sprint Review это подчеркивает. Но термин «Демо» является устоявшимся в сообществе, гораздо более коротким и я предпочитаю использовать именно его, тем более, что исторически именно это название я узнал первым, прочитав в 2007 книгу Хенрика Книберга «Скрам и XP: заметки с передовой», которую уже упоминал в предыдущей статье.

                     </p>
                  </div>

                  <p className="chatAi-card__cath-subtext">
                     Если возникли вопросы — спроси меня ещё 🔥
                  </p>
               </div>
            </div>

         </div>
      </>
   )
}

export default CardChatAi;