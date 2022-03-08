import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Card( props ){
const {name, url, setScore, setCardArray, shuffle, revertStatus } = props
let clicked = props.clicked
const [status, setStatus] = useState(clicked); //clicked status true or false
console.log(clicked)
function handleClick (){
   
        setCardArray(prevArray => shuffle(prevArray))
 
    
  }

return(
   
   <div className='card-container' 
    
   onClick={handleClick}
    >
            <img src={url} alt="" />
            <h3>{name}</h3>
            <p>{status ? 'clicked': null}</p>
            
        </div>
        
    )
}