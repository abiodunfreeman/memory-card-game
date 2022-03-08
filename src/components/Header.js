import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Header ( props ){
    
    return(
        <header>
       <h1>LOL Memory Cards -- Score: {props.score}</h1>
       
       {/* <input value={props.numOfCards}type="number" name="numCards" id="numCards" onChange={props.setNum}/> */}

     </header>
    )
}