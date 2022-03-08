import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import './App.css';
// import Card from './components/card';
import DisplayCards from './components/DisplayCards';
function App() {
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
  


  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0)

 










// console.log(cards)



  return (
    <div className="App">
     <Header
       score={score}
       
     />
     <DisplayCards 
     setScore={setScore}

                  />
   
     
    </div>
    );
  
}

export default App;
