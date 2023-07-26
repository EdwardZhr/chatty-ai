import "./CardInfo.css"
import React from "react";

function CardInfo(props) {
   return (
      <>
         <div>
            <img src={props.img} alt="волшебная палочка" />
            <p className="main-screen__text" >{props.text}</p>
            <p>{props.subText}</p>
         </div>
      </>
   )
}

export default CardInfo