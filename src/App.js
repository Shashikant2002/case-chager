import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import AboutUs from "./components/AboutUs";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";


function App() {
    const [alert, setAlert] = useState(null);
    const setalert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    const [mode, setMode] = useState("light");
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.background = "#212529f2";
            setalert("Dark Mode Has Been Enabled", "success");
        } else {
            setMode('light');
            document.body.style.background = "#fff";
            setalert("Light Mode Has Been Enabled", "success");
        }
    }
    return (
        <>
            <Router>
                <Navbar title="Case Changer" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <Routes>
                    <Route path="/" element={<TextForm heading="Text Area" setalert={setalert} mode={mode} />} />
                    <Route path="/about" element={<AboutUs mode = {mode} />} />
                    <Route path="/terms" element={<Terms mode = {mode} />} />
                    <Route path="/pry" element={<Privacy mode = {mode} />} />
                </Routes>
                <Footer mode={mode} />
            </Router>
        </>
    );
}

export default App;