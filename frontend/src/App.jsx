
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Countries from "./pages/Countries/Countries";


function App() {
  return (
    <>
     <Nav/>
    <Routes>
      
     

     <Route path="/" element={<Home />} />
        <Route path="/liste-des-pays" element={<Countries/> }   />

    </Routes>
    
     
      <Footer/>
     
    </>
  );
}

export default App;
