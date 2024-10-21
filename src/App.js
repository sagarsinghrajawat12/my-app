
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [ mode, setMode] = useState('light');
 const togglemode = ()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor = 'black'
   
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    
  
  }

  }
  return (
    <>
      <Navbar title="TextUtile" aboutText="About" Link="Link" mode= {mode} togglemode= {togglemode}/>
      <div className="container my-3 ">
       <TextForm heading="Enter the text to analyze below"mode= {mode} />
     {/* <About/>*/}
      </div>
    </>
  );
}

export default App;
