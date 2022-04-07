import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import AboutUs from "./components/AboutUs";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = "#212529f2";
    }else{
      setMode('light');
      document.body.style.background = "#fff";
    }
  }
  return (
    <>
      <Navbar title="Hello World" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Text Area" mode={mode} />
      {/* <AboutUs /> */}
    </>
  );
}

export default App;
