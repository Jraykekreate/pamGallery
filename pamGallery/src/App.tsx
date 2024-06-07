
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import SignUpLogin from './pages/SignUpLogin'

function App() {
 


  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home></Home>}></Route>

      <Route path='/Sign Up' element={<SignUpLogin></SignUpLogin>}></Route>
    </Routes>
    
    
    
    </BrowserRouter>
     
  )
}

export default App
