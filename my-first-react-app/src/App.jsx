import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";

// import Singer from "./Singer";
import BookStore from "./BookStore";
function App() {
  const actors = [
    "Sah Rukh Khan",
    "Shakib Khan",
    "Jhankar Khan",
    "Salman Khan",
    "Shawon Khan",
  ];
  const singers = [
    { name: "Dr. Mahfuzur Rahmen", age: 68 },
    { name: "Eva Rahmen", age: 38 },
    { name: "Shuvro Dev", age: 58 },
    { name: "Pritom Dev", age: 28 },
  ];
  const books = [
    { id: 1, name: "Physics", price: 1000 },
    { id: 2, name: "Chemistry", price: 1000 },
    { id: 3, name: "Math", price: 1000 },
    { id: 4, name: "Bangla", price: 1000 },
    { id: 5, name: "Physics II", price: 1000 },
  ];
  return (
    <>
      <BookStore></BookStore>

      
      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}

      <Actor name={"Shawon Islam"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      {/* <h1>Shawon Islam</h1>
      <Device name='laptop' price='55,000'></Device>
      <Device name='mobile' price='17,000'></Device>
      <Device></Device>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student grade='12' score='99'></Student>
      <Student grade='15' score='99'></Student>
      <Developer></Developer> */}
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Exploring React" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
    </>
  );
}
function Device(props) {
  console.log(props);
  return (
    <h2>
      This Device:{props.name}, Price: {props.price}{" "}
    </h2>
  );
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
// const {grade,score}={grade:'7', score:'99'}
function Student({ grade, score }) {
  console.log(grade, score);
  return (
    <div className="student">
      <h3>This is {grade}</h3>
      <h3>Grade: {score}</h3>
      <p class="text-red-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
        deleniti.
      </p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h5>Developer</h5>
      <p>Coding: </p>
    </div>
  );
}
export default App;
