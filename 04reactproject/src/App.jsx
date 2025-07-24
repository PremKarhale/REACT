import { useState, useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)   //state functions
  const [isnum, setisnum] = useState(false)
  const [ischar, setischar] = useState(false)
  const [Pass, setpass] = useState("")

  const passref = useRef(null) //useRef hook

  const passwordGenerator = useCallback(() => {  //use for the optimisation of program or cache memory 
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz."
    if (isnum) str += "1234567890"
    if (ischar) str += "!@#$%^&*()-_=+[]{}\|;:',.<>/?`~"
    for (let i = 1; i <= length; i++) {
      let char = (Math.floor(Math.random() * str.length + 1))
      pass += (str.charAt(char))
      setpass(pass)
    }
  }, [length, isnum, ischar, setpass])

  //function create kiya to copy the password by click on copy btn 
  const copyonclipboard = useCallback(()=>{
    passref.current
    ? (passref.current.select(), window.navigator.clipboard.writeText(Pass)) 
    : null;  

  },[Pass])

  useEffect(() => {
    passwordGenerator()
  }, [length, isnum, ischar, passwordGenerator])



  return (
    <>
      <div className='w-full  max-w-md mx-auto bg-blue-500 text-center m-4 h-[177px] p-6 rounded-4xl flex flex-col justify-between'>
        <h2 className='text-2xl font-sans font-extrabold'>password Generator</h2>
        <div className='pass h-[80px] align-middle'>
          <label className=' text-xl ' htmlFor="password ">Password :</label>
          <div className='flex align-middle '>
            <input className='input rounded-l-full px-2'
              type="text"
              value={Pass}
              placeholder='Password'
              ref={passref} // pass ka reference liya hai ref ={passref} ne
            //  name="password" 
            />
            <button onClick={copyonclipboard} className='bg-amber-400 p-1 px-2 rounded-br-xl '>copy</button></div>


        </div>
        <div className='flex  align-middle bg-amber-100 rounded-xl gap-x-1'>
          <label className='px-3'>length :{length} </label>
          <input type="range" name="length" value={length}
            min={5}
            max={100}
            className='bg-black length'

            onChange={(e) => { setlength(e.target.value) }} />

            <div className='fixed right-123'>
          <div className=' flex align-middle gap-1'>
            <label className='px-1' htmlFor="number">number :</label>
            <input type="checkbox" defaultChecked={isnum} id="checked"
              onChange={() => {
                setisnum((prev) => !prev)
              }}

            />

            <div className='flex align-middle'>
              <label className='  px-1' htmlFor="character at ">char :</label>
              <input type="checkbox" name="char:" defaultChecked={ischar} id="char"
                onChange={
                  () => {
                    setischar((prev) => !prev)
                  }
                } />

            </div>
          </div>
          </div>

          <div>

          </div>


        </div>


      </div>

    </>
  )
}

export default App
