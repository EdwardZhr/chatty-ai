import './Sidebar.css';
import React, { useState, } from "react";
import { NavLink, Link } from 'react-router-dom';
import NavItem from "../NavItem/NavItem"
import logo from '../../images/logo.svg'
import chat from "../../images/chat.svg"
import close from "../../images/close.svg"

function Sidebar() {
   const [isCropped, setIsCropped] = useState(false)

   function handleCroppeSaidBar() {
      setIsCropped(!isCropped)
   }

   return (
      <div className={`${isCropped ? 'sidebar sidebar_cropped' : 'sidebar'}`}>
      <Link to='/'>
         <div className='sidebar__header'> 
            <div className='sidebar__logo'/>
            {/* <img className='sidebar__logo' src={logo} alt="Логотип" /> */}
            <div className={`${isCropped ? 'sidebar__text-wrapper sidebar__text-wrapper_hidden' : 'sidebar__text-wrapper'}`}>
               <p className='sidebar__text'>Chatty AI</p>
               <p className='sidebar__sub-text'>Version 1.0</p>
            </div>
         </div>
      </Link>
         

         <nav className='sidebar__nav'>

            <NavLink to="/recording" className={({ isActive }) => `sidebar__nav-link ${isActive ? 'sidebar__nav-link_active' : ''}`}>
               <NavItem icon={chat} text={"Чат"} isCropped={isCropped} />
            </NavLink>

         </nav>

         <nav className='sidebar__nav-footer'>
            <button onClick={handleCroppeSaidBar} className='sidebar__nav-footer_btn' type='button'>
               <img className='sidebar__nav-icon' src={close} alt="Кнопка скрыть сайдбар" />
               <p className={`sidebar__nav-footer_text ${isCropped && 'text-hiden'} `}>Скрыть</p>
            </button>
         </nav>
      </div>


   )
}

export default Sidebar
