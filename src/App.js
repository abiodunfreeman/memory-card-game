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
const [numberOfCards, setNumberOfCards] = useState(9)
let objectArray = Names.map(name => createObjects( name )) 
  shuffle(objectArray);

  let slicedArray = objectArray.slice(0, numberOfCards)
// console.log(objectArray)
for (let i = 0; i < objectArray.length; i++) {
  objectArray[i].id = i;
}




 const [toons, setToons] = useState([...slicedArray])
 const [score, setScore] = useState(0);
 const [best, setBest] = useState(0);
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
  
  // setCards(prevCards => shuffle(prevCards))
  setCards(prevCards => {
    shuffle(prevCards);
    return prevCards
  })
  // console.log(cards[id].props.id)
  // console.log(cards[id].props.name)
  
}
const [cheat, setCheat] = useState(true); //shows 'clicked/not clicked' on cards if true
 const [cards,setCards] = useState(toons.map(object => {
  return <Card
        cheat={cheat}
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








function toggleCheat(){
  setCheat(prevCheat => !prevCheat)
}
function changeNumber(number){
  console.log(number)
  setNumberOfCards(number)
  console.log(numberOfCards)
}

  return (
    <div className="App">
    <div id="yep">
     <Header
      best={best}
      score={score}
       
     />
     <div id="display-container">
            <DisplayCards 
              cards={cards}
                handleClick={handleClick}
             />
             {/* <div id="inputs">
               <button onClick={() => changeNumber(4)}>Easy</button>
               <button onClick={() => changeNumber(8)}>Medium</button>
               <button onClick={() => changeNumber(16)}>Hard</button>
               <button onClick={toggleCheat}>Cheat</button>
             </div> */}
     </div>
     
     </div>
     
    </div>
    );
  
}

export default App;
