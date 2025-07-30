import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj ={                           // 1st component
    name : 'chai aur code',
    teacher : 'sir' 
  }
  console.log(myobj)

  let newarr =[2,4,5,5]

  // {} is used to retrieve the value of some var outhere !! called as destructuring 
  // hum ak component se dusre component me value assign kar sakte hai props ka use karke 
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center mt-10 bg-green-400 mb-4">
        Hello world!
      </h1>
    
      <Card name={myobj.name} somekey = {myobj} newarr = {newarr}/>  
    </>
  )
}

export default App
