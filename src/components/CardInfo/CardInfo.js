import "./CardInfo.css"
import React from "react";

function CardInfo(props) {
   return (
      <>
         <div className="main-sreen_card">
            <img className="main-sreen_img" src={props.img} alt="волшебная палочка" />
            <p className="main-screen__text" >{props.text}</p>
            <p className="main-screen__subtext" >{props.subText}</p>
         </div>
      </>
   )
}

export default CardInfo