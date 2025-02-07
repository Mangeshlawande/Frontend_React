import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [charAllowed, setCharAllowed] = useState(false)
  const [numAllowed, setNumAllowed] = useState(false)
  const [password, setPassword] = useState('')

 

  let passwordGenerator = useCallback(()=>{
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%&";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length +1);
      pass += str.charAt(char);
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed]);

  const passwordRef = useRef(null);

  const copyPasswordToClipboard= ()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,4)
  }

  useEffect(()=>{
    passwordGenerator();
  },[length, charAllowed, numAllowed])

  return (
    <div >
    <h1 className='bg-blue-300 text-center text-black p-3 font-mono  rounded-md'> Random Password Generator  </h1>
    
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600 text-orange-500"
        >
          <h1 className="text-3xl font-bold mb-2 text-center"> Password Generator </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white '
            placeholder='Password'
            readOnly
            ref={passwordRef}
            />
            <button 
            onClick={copyPasswordToClipboard}
            className="outline-none text-white px-3 py-1 shrink-0 bg-blue-700">Copy</button>
          </div>

          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input type="range"
              min={8}
              max={80}
              value={length}
              className='cursor-pointer'
              onChange={(e)=> setLength(e.target.value)}
               name="" 
               id=""
                />
                <label htmlFor="length" className="">Length : {length}</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input type="checkbox" 
              defaultChecked={numAllowed}
              onChange={()=>{
                setNumAllowed((prev)=> !prev)
              }}
              name=""
               id="" />
                <label htmlFor="number" className="">: Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input type="checkbox" 
              defaultChecked={charAllowed}
              onChange={()=>{
                setCharAllowed((prev)=> !prev)
              }}
              name=""
               id="" />
                <label htmlFor="charInput" className="">: Character</label>
            </div>
          </div>

          
        </div>
    </div>
  )
}

export default App
