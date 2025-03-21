import { Route, Routes } from "react-router-dom";
import About from "./Pages.jsx/About";
import Contact from "./Pages.jsx/ContactUs";
import Home from "./Pages.jsx/Home";



function App(){
    return (
      <>


 <Routes>
  <Route path="/" element={<Home/>}></Route>

  <Route path="/About" element={<About/>}></Route>
  <Route path="/About" element={<About/>}></Route>
  <Route path="/Contact" element={<Contact/>}></Route>
 </Routes>

      </>
      
    );
}





export default App;