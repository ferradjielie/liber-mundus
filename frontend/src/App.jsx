 import Home from "./pages/Home/Home"
 import Marquee from "react-fast-marquee";
 import BorderStrip from "./components/BorderStrip/BorderStrip";

function App() {
 

  return (
    <>
   <Home/>
   <Marquee speed={70} gradient={true}>
  <div className="marqueeContainer">
    <BorderStrip/>
  </div>
</Marquee>
    </>
  )
}

export default App
