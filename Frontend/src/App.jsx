import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  return (
    <>
    <Navbar/>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
     </Routes>
     </BrowserRouter>
     {/* <Footer/> */}
    </>
   
  )
}

export default App
