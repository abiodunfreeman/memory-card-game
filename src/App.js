import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Names from "./components/Names";
import { v4 as uuidv4 } from 'uuid';
import Card from './components/card';
import DisplayCards from './components/DisplayCards';
function App() {

  function shuffle( array ) { //shuffle array function
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

function createObjects ( name ) {
 
  return {
    id: null,
    clicked: false,
    name: name,
    url:  `./images/loading/${name}_0.jpg`
    } 
}
let objectArray = Names.map(name => createObjects( name )) 
  shuffle(objectArray);
  objectArray = objectArray.slice(0, 8)
// console.log(objectArray)
for (let i = 0; i < objectArray.length; i++) {
  objectArray[i].id = i;
}




 const [toons, setToons] = useState([...objectArray])
 const [score, setScore] = useState(0);

 function handleClick(id,name,clicked){
  
  if (toons[id].clicked === false ) {
  setToons(prevToons => {
    prevToons[id].clicked = true;
    return prevToons;
  })
  
  setScore(prevScore => prevScore + 1)
  } else if (toons[id].clicked === true) {
    console.log(name + ' is already clicked')
    setScore(0)
    setToons(prevToons => {
      prevToons.forEach(toon => {
        toon.clicked = false;
      })
      return prevToons;
    })
  }

  setCards(prevCards => {
    const newCards = toons.map(object => {
      return <Card
       key={object.name}
        url={object.url}
        clicked={object.clicked}
        id={object.id}
        name={object.name}
        handleClick={handleClick}
  />
    })
    return newCards;
  })
 
  shuffleCards(id);

}
function shuffleCards(id){
  console.log(cards[id].props.id)
  setCards(prevCards => shuffle(prevCards))
  console.log(cards[id].props.name)
  
}
 
 const [cards,setCards] = useState(toons.map(object => {
  return <Card
        key={object.name}
        url={object.url}
        clicked={object.clicked}
        id={object.id}
        name={object.name}
        handleClick={handleClick}
  />
})
 )
 

useEffect(() => {
  console.log('render')
},[...toons])







// console.log(cards)



  return (
    <div className="App">
     <Header
      score={score}
       
     />
     <DisplayCards 
     cards={cards}
    
     handleClick={handleClick}

                  />
   
     
    </div>
    );
  
}

export default App;
