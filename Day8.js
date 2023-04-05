import React, {useState, useEffect} from 'react'

export default function Day8() {
  const [message, setMessage] = useState("Hello dear one, learning React...?")
  useEffect(() => {
    console.log('use effect hook called');
    setTimeout(() =>{
      setMessage("Great... This is time to learn about HOOKS")
    }, 9000)
  })
  return (
    <div className="App">
      <h4>CC2 DAY8 </h4>
      <h1>{message}</h1>
    </div>
  );
}