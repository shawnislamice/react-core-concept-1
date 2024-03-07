import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Shawon Islam</h1>
      <Device name='laptop' price='55,000'></Device>
      <Device name='mobile' price='17,000'></Device>
      <Device></Device>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student grade='7' score='99'></Student>
      <Student grade='7' score='99'></Student>
      <Developer></Developer>
    
    </>
  );
}
function Device(props){
  console.log(props)
  return <h2>This Device:{props.name}, Price: {props.price} </h2>
}
function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "Shawon Islam", age: 14 };
  return (
    <h3>
      I am {person.name} with age: {age + money}
    </h3>
  );
}
const {grade,score}={grade:'7', score:'99'}
function Student(props) {
  console.log(props)
  return (
    <div className="student">
      <h3>This is {grade}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
        deleniti.
      </p>
    </div>
  );
}

function Developer(){
  const developerStyle={
    margin:'20px',
    padding:'20px',
    border:'2px solid purple',
    borderRadius:'10px'
  }
  return(
    <div style={developerStyle}>
      <h5>Developer</h5>
      <p>Coding: </p>
    </div>
  )
}
export default App;
