import React from "react";
export default function Number(props){
 
    return(
        <div onClick={()=>props.changeState(props.id)} className={props.isHeld? "number  isHeld":"number"}>{props.num}</div>
    );
}