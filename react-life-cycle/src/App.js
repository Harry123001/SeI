import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [color, setColor] = useState()

  const fetchColor = async () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    
    const res = await axios.get (`http://www.thecolorapi.com/id?rgb=${r},${g},${b}`)
    setColor(res.data)
}
  useEffect(() => { // callback function
    fetchColor()
  }, []) //dependency array

  return (
    <div className="App">
      <div>
        {color ? <img src={color.image.bare} /> : null}
        <button onClick={fetchColor}>Get New Color</button>
      </div>
    </div>
  );
}

export default App;