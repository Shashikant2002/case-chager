import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Navbar title="Hello World" />
      <TextForm heading="Text Area" />
      <AboutUs />
    </>
  );
}

export default App;
