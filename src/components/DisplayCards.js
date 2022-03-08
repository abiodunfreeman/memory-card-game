import React, { useEffect, useState } from "react";
import Card from "./card";
import Names from "./Names";
import { v4 as uuidv4 } from 'uuid';
export default function DisplayCards( props ){
    const [clickedStatus, setClickedStatus] = useState(false)
    const [items, setItems] = useState([]);
    const [numOfCards, setNumOfCards] = useState(8)
    const [error, setError] = useState(null); //catches error for api
    const [isLoaded, setIsLoaded] = useState(false); //determines if api is loaded
    const [cardArray, setCardArray] = useState([]); //empty array for card
    const list = Names;
    console.log(list)
    shuffle(list)
    const nameList = list.slice(0,numOfCards)
    
  
   
    function shuffle( array ) {
        let currentIndex = array.length, randomIndex;
        //While there remain elements to shuffle...
        while(currentIndex != 0) {
    
            //Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--;
    
            //And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }    
  
    const cards = nameList.map(name => {
        return({
          name,
          url:  `./images/loading/${name}_0.jpg`,
          clicked: true,
        })
      })
      // console.log(cards)
      const [cardObjects, setCardObjects] = useState(null)
      console.log(cardObjects);
  
     
   const cardJSXX = cards.map( object => {
       return(
           <Card
             revertStatus={revertStatus}
                setCardArray={setCardArray}
                // handleClick={handleClick}
                setScore={props.setScore}
                shuffle={shuffle}
                key={uuidv4()}
                name={object.name}
                url={object.url}
                clicked={object.clicked}
           />)
   })
   const [cardJSX , setCardJSX] = useState([...cardJSXX]) 
   console.log(cardJSX + " !!!!!!!!!!!!!!!! klsjfklsdfj")
   useEffect(function (){ //fetches api

    // console.log('useEffect App.js')
    
    // fetch('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json',{
    //   mode:'cors'
    // })
    // .then(res => res.json())
    // .then(result => {
    //   setIsLoaded(true);
    //   setItems(result.data)
    // },
    // (error) => {
    //         setIsLoaded(true);
    //         setError(error);
    //   }
    // )
   

  setCardObjects(cards)
  }, [])

function revertStatus(){
  setCardObjects( prevObjectArray => {
    const newArray = []
    prevObjectArray.forEach(object => {
     
      object.clicked = false;
      newArray.push(object)
      console.log(object)
      
    })
    return newArray;
  })
}
console.log(cardArray)


    return (
        <div id="DisplayCards">
            {/* <h1>Display</h1> */}
            {cardJSX}
        </div>
    )
  }
