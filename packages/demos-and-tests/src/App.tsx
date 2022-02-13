import React, { useState } from 'react'
import {Input} from '@test/input-emotion';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Input />
    </div>
  )
}

export default App
