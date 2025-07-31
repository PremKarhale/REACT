import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [Color, setColor] = useState("olive") //state function or hook !!
  const [isDisco, setisDisco] = useState(false)
  const effectRef = useRef(null)

  const colorarr = ['red', 'green', 'blue', 'orange', 'violet', '#800075', '#006f80', 'yellow']
  const getrandomcolor = () => {
    return colorarr[Math.floor((Math.random() * colorarr.length))]
  }


  const setDiscoeffect = () => {
    if (isDisco) {
      clearInterval(effectRef.current)  // band he to chalu karenga or chalu he to band karenga 
      setisDisco(false)
      setColor('olive')
    }
    else {
      setisDisco(true)
      effectRef.current = setInterval(() => {
        setColor(getrandomcolor())
      }, 300);
    }

  }

  return (
    <>
      <div className='w-full h-screen duration-200 text-center text-red-500 ' style={{ backgroundColor: Color }}>
        <div className=' fixed flex flex-wrap  justify-center bottom-12 px-2 insert-x-0 w-7xl  p-3 ml-11 '>
          <div className='flex flex-wrap justify-center  bg-white gap-6 px-4 py-2 rounded-4xl' >
            <button onClick={() => {
              if (isDisco) {
                setisDisco(false)
                clearInterval(effectRef.current)
                setColor('red')
              } else {
                setColor('red')
              }
            }}
              className=' outline-none cursor-pointer  text-white px-4 py-2 rounded-3xl bg-red-500'>Red</button>
            <button onClick={() => {
              if (isDisco) {
                setisDisco(false)
                clearInterval(effectRef.current)
                setColor('blue')
              } else {
                setColor('blue')
              }
            }} className=' outline-none cursor-pointer  text-white px-3 py-2 rounded-3xl bg-blue-600'>blue</button>
            <button onClick={() => {
              if (isDisco) {
                setisDisco(false)
                clearInterval(effectRef.current)
                setColor('green')
              } else {
                setColor('green')
              }
            }} className=' outline-none cursor-pointer  text-white px-3 py-2 rounded-3xl bg-green-500'>green</button>
            <button onClick={setDiscoeffect} className=' outline-none cursor-pointer  text-white px-3 py-2 rounded-3xl bg-orange-600'> {isDisco ? 'STOP DISCO' : 'DISCO EFFECT'}</button>


          </div>

        </div>

      </div>

    </>
  )
}

export default App
