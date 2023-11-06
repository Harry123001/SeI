import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [color, setColor] = useState()

  const fetchColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    fetch(`http://www.thecolorapi.com/id?rgb=${r},${g},${b}`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        setColor(res)
    })
}

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
