import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookStore from './BookStore'

function App() {
  const books=[
    {id:1,name:'Physics',price:300},
    {id:2,name:'Bangla',price:300},
    {id:3,name:'Biology',price:300},
    {id:4,name:'Bangla',price:300},
    {id:5,name:'Chemistry',price:300},
    {id:6,name:'Math',price:300},
  ]
  return (
    <>
      <BookStore books={books}></BookStore>
    </>
  )
}

export default App
