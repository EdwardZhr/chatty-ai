import "./MainScreen.css"
import React from "react";
import CardInfo from "../CardInfo/CardInfo";
import logo from "../../images/logo.png"
import microphone from "../../images/microphone.svg"

import toolMagic from "../../images/tool-magic.png"
import textAction from "../../images/text-action.png"
import timeClock from "../../images/time-clock.png"

function MainScreen() {
   return (
      <>
         <div className="main-screen">
            <div className="main-screen__box">
               <img className="main-screen__img" src={logo} alt="логотип"></img>
               <h1 className="main-screen__title">Привет, это Chatty AI</h1>
               <p className="main-screen__sub-title">Прокачай выступление искусственным интеллектом!</p>
               <form className="main-screen__form">
                  <div className="main-screen__form-box">
                     <p className="main-screen__form-text">Нажми на микрофон, чтобы начать</p>
                     <button className="main-screen__form-btn" type="submit">
                        <img className="main-screen__form-btn_img" src={microphone} alt="логотип" />
                     </button>
                  </div>
               </form>
            </div>

            <div className="main-screen__cards">
               <CardInfo img={toolMagic} text={'Речь в текст'} subText={'Проще говорить, чем печатать'} />
               <CardInfo img={textAction} text={'Обозначит структуру'} subText={'Исходя из лучших практик сторителлинга'} />
               <CardInfo img={timeClock} text={'Сократит объём'} subText={'Только самое важное, никто не уснёт'} />
            </div>
         </div>
      </>
   )
}

export default MainScreen;