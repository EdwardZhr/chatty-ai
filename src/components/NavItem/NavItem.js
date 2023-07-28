import "./NavItem.css"
import React from "react";

function NavItem(props) {
   return (
      <>

         <img className="sait-bar__nav-icon" src={props.icon} alt="" />


         <div className={`sait-bar__nav-box ${props.isCropped && 'text-hiden'}`}>
            <p className={`sait-bar__nav-text`}>{props.text}</p>
            {/* <img className="sait-bar__nav-img" src={props.iconNum} alt='' /> */}
         </div>



      </>
   )
}

export default NavItem;