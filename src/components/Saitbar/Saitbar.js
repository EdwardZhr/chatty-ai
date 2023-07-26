import './Saitbar.css';
import React, { useState, } from "react";
import { NavLink } from 'react-router-dom';
import NavItem from "../NavItem/NavItem"
import logo from '../../images/avatar.svg'
import comment from "../../images/comment.svg"
// import presentation from "../../images/presentation.svg"
import chat from "../../images/chat-conversation.svg"
import file from "../../images/file.svg"
//import pravki from "../../images/pravki.svg"
//import time from "../../images/time.svg"
import statia from "../../images/statia.svg"
import notification from "../../images/notification.svg"
import setting from "../../images/setting.svg"
import close from "../../images/close.svg"
// import number from "../../images/number.svg"




function Saitbar() {
   // const a = document.querySelectorAll('.test')
   // function handleToggleSaidBar() {
   //    console.log('click')
   //    a.forEach((i) => {
   //       console.log('click', i)
   //       i.classList.toggle('display-none')
   //    })
   // }
   const saitBarText = document.querySelectorAll('.sait-bar__box-text')
   const [isState, setState] = useState(false)
   function handleHidenSaidBar() {

      saitBarText.forEach((i) => {
         console.log(i)
         if (!i.classList.contains('text-hiden')) {
            setState(true)
         } else {
            setState(false)
         }
      })

   }
   return (
      <div className="sait-bar">

         <div className="sait-bar__box">
            <img className='sait-bar__nav-icon' src={logo} alt="логотип" />
            <div className={`sait-bar__box-text ${isState && 'text-hiden'}`} >
               <p className="sait-bar__text">Chatty AI</p>
               <p className="sait-bar__sub-text">Version 1.0</p>
            </div>
         </div>

         <nav className="sait-bar__nav">

            <NavLink to="/chatty-ai" className={({ isActive }) => `sait-bar__nav-link ${isActive ? "sait-bar__nav-link_active" : ""}`}>
               <NavItem icon={comment} text={"Чат"} isState={isState} />
            </NavLink>

            <NavLink to="#" className={({ isActive }) => `sait-bar__nav-link`} >
               <NavItem icon={chat} text={"Архив"} isState={isState} />
            </NavLink>

            <NavLink to="#" className={({ isActive }) => `sait-bar__nav-link`} >
               <NavItem icon={file} text={"Мои выступления"} isState={isState} />
            </NavLink>

            <NavLink to="#" className={({ isActive }) => `sait-bar__nav-link sait-bar__nav-link_modiff`} >
               <NavItem icon={statia} text={"О Chatty AI"} isState={isState} />
            </NavLink>
         </nav>

         <nav className='sait-bar__nav-footer'>
            <NavLink to="#" className={({ isActive }) => `sait-bar__nav-link`} >
               <NavItem icon={notification} text={"Уведомления"} isState={isState} />
            </NavLink>
            <NavLink to="#" className={({ isActive }) => `sait-bar__nav-link`} >
               <NavItem icon={setting} text={"Настройки"} isState={isState} />
            </NavLink>
            <button onClick={handleHidenSaidBar} className='sait-bar__nav-footer_btn' type='button'>
               <img className='sait-bar__nav-icon' src={close} alt="иконка срытия сайдбара" />
               <p className={`sait-bar__nav-footer_text ${isState && 'text-hiden'} `}>Скрыть</p>
            </button>
         </nav>
      </div >
   )
}

export default Saitbar
