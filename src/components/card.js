import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Card( props ){
const {name, url, id, clicked} = props
return(
   
   <div className='card-container'

 >       <p>{id} {clicked}</p>
        <img src={url} alt="" />
       <h3>{name}</h3>
      

        </div>
        
    )
}