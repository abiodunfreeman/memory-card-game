import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Card( props ){
const {name, url, id, clicked, handleClick} = props
return(
   
   <div className='card-container'
        onClick={() => handleClick(id ,name, clicked)}
        key={name}
         >       <p>{id} {clicked ? "clicked" : "nope"}</p>
        <img src={url} alt="" />
       <h3>{name}</h3>
      

        </div>
        
    )
}