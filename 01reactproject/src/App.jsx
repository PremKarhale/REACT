import { useState } from 'react' // default liabriary for hooks !!
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // core javascript!!
  let [count, setCount] = useState(15)  //React's useState Hook! //setcount is the method used to set the value of the count 

  const addvalue = () => {
    if (count == 20) {
      setCount(count = 20)
    } else {
      setCount(count = count + 1) // increase the count value by 1 
      console.log("current value ", count)
    }
  }

  const subvalue = () => {
    if (count == 0) {
      setCount(count = 0)
    } else {

      setCount(count = count - 1) // dec the count value by 1 
      console.log("deceremented value is ", count)
    }


  }

  // Always return Html syntax
  return (
    <>
      <h1>hey there my second react folder</h1>
      <h2>Counter :{count}</h2>
      <button onClick={addvalue}>add value</button>
      <button onClick={subvalue}>remove value </button>
      <h2>{count}</h2>
    </>
  )
}

export default App
