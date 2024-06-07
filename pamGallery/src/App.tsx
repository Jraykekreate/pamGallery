import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)


  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home></Home>}></Route>
    </Routes>
    
    
    
    </BrowserRouter>
     
  )
}

export default App
