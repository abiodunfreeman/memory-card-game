import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Card( props ){
const {name, url, clicked, setScore} = props

const [status, setStatus] = useState(clicked); //clicked status true or false
function handleClick (){
    console.log('click')
    setStatus(prevStatus => !prevStatus)
    
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