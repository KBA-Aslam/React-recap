import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ villain, setVillain ] = useState([])
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setVillain(data))
  }, [])
  // const villain = [{name:"Joker", wish:"Burn"}, {name:"Thanos", wish:"equality"}, {Name:"Ultron", wish:"Robotics"}]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Movies></Movies>
        {
          villain.map(vil => <Villain name={vil.name} key={vil.name} wish={vil.phone}></Villain>)
        }
      </header>
    </div>
  );
}

function Villain(props){

  return (
    <div>
      <h3>I am SupperVillain- {props.name}</h3>
      <h5>I want- {props.wish}</h5>
    </div>
  )
}

function Movies(){
const [count, setCount] = useState(10);
  return (
    <div style={{border: "2px solid purple", width: "400px"}}>
      <button onClick={()=> setCount(count + 1)} >Add Chela</button>
      <h3>Number of chela i have : {count}</h3>
      <Acted movie={count - 8}></Acted>
    </div>
  )
}

function Acted(props){
  return <div>
    <h4>Movies i have acted: {props.movie} </h4>
    </div>
}

export default App;
