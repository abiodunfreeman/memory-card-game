import React, { useEffect, useState } from "react";
import Card from "./card";
import { v4 as uuidv4 } from 'uuid';
export default function DisplayCards( props ){
    
    const [items, setItems] = useState([]);
    const [numOfCards, setNumOfCards] = useState(8)
    const [error, setError] = useState(null); //catches error for api
    const [isLoaded, setIsLoaded] = useState(false); //determines if api is loaded
    const list = Object.keys(items)
    shuffle(list)
    const nameList = list.slice(0,numOfCards)

    useEffect(function (){ //fetches api
        console.log('useEffect App.js')
        fetch('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json')
        .then(res => res.json())
        .then(result => {
          setIsLoaded(true);
          setItems(result.data)
        },
        (error) => {
                setIsLoaded(true);
                setError(error);
          }
        )
      
      }, [])
   
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
          clicked: false,
        })
      })
   
  
   const cardJSX = cards.map( object => {
       return(
           <Card
           setScore={props.setScore}
           shuffle={shuffle}
                key={uuidv4()}
               name={object.name}
               url={object.url}
               clicked={object.clicked}
           />
       )
   })


// const letters =['A', 'B', 'C', 'D', 'E']
// console.log(letters)
// shuffle(letters)
// console.log(letters)
useEffect(() => {
    console.log('useEffect DisplayCards')
    

   
},[])
if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <div id="DisplayCards">
            {/* <h1>Display</h1> */}
            {cardJSX}
        </div>
    )
  }
}