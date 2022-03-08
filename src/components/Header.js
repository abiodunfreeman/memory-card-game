import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Header ( props ){
    const array = [...document.querySelectorAll('p')];
    const list = []
    array.forEach(unit => {
        console.log(unit.innerText)
        if (unit.innerText === 'clicked') {
            list.push(unit)
        }
    })
    console.log(list)
    return(
        <header>
       <h1>LOL Memory Cards -- Score: {list.length}</h1>
       
       {/* <input value={props.numOfCards}type="number" name="numCards" id="numCards" onChange={props.setNum}/> */}

     </header>
    )
}