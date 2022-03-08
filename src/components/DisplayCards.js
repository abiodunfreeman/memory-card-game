import React, { useEffect, useState } from "react";
import Card from "./card";

import { v4 as uuidv4 } from 'uuid';
export default function DisplayCards( props ){
   const {toons } = props
   
  const cards = toons.map(object => {
    return <Card
          key={object.id}
          url={object.url}
          clicked={object.clicked}
          id={object.id}
          name={object.name}
    />
  })
 
    // function shuffle( array ) {
    //     let currentIndex = array.length, randomIndex;
    //     //While there remain elements to shuffle...
    //     while(currentIndex != 0) {
    
    //         //Pick a remaining element...
    //         randomIndex = Math.floor(Math.random() * currentIndex)
    //         currentIndex--;
    
    //         //And swap it with the current element.
    //         [array[currentIndex], array[randomIndex]] = [
    //             array[randomIndex], array[currentIndex]];
    //     }
    //     return array;
    // }    
  
 


    return (
        <div id="DisplayCards">
            {/* <h1>Display</h1> */}
           {cards}
        </div>
    )
  }
