import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Names from "./components/Names";
import { v4 as uuidv4 } from 'uuid';
// import Card from './components/card';
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


 
function handleClick(){
  console.log('clickedd')
}








// console.log(cards)



  return (
    <div className="App">
     <Header
      
       
     />
     <DisplayCards 
     toons={toons}
     handleClick={handleClick}

                  />
   
     
    </div>
    );
  
}

export default App;
