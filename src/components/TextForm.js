import React, { useState } from 'react';
import PropTypes from 'prop-types';


export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const changeUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const changeLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const changeCapitalizedCase = () => {
        let newText = text.toLowerCase().split(' ');
        for (var i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        setText(newText.join(' '));
    }

    
    const clearText = () => {
        setText("");
    }
    const copyText = () => {
        let text = document.getElementById('myText');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    return (
        <>
            <div className="container mt-5 custom-text-area text-center" style={{color: props.mode === 'dark'?'white':'#000000e6'}}>
                <label htmlFor="exampleFormControlTextarea1" className="form-label text-dark"><h2><strong  style={{color: props.mode === 'dark'?'white':'#000000e6'}}>{props.heading}</strong></h2></label>
                <textarea className="form-control h-100 w-75 m-auto"  style={{background: props.mode === 'dark'?'#212529':'#fff',color: props.mode === 'dark'?'white':'#000000e6'}} onChange={handleOnChange} value={text} id="myText" rows="15"></textarea>
                <div className="counter">
                    <span><h5 className='m-0'>Your text Summary</h5></span>
                    <div className="d-flex justify-content-center alin align-items-center">
                        <span><h4>Word: </h4></span>
                        <h4 className="mx-3">{text.split(" ").length}</h4><h4>,</h4>
                        <span><h4>Character: </h4></span>
                        <h4 className="mx-3">{text.length}</h4>
                    </div>
                </div>
                <div className="button my-2">
                    <button className='btn btn-dark mx-2 my-2' onClick={copyText}>Copy Text</button>
                    <button className='btn btn-dark mx-2 my-2' onClick={clearText}>Clear Text</button>
                    <button className='btn btn-dark mx-2 my-2' onClick={changeCapitalizedCase}>Capitalized Case</button>
                    <button className='btn btn-dark mx-2 my-2' onClick={changeUpperCase}>Upper Case</button>
                    <button className='btn btn-dark mx-2 my-2' onClick={changeLowerCase}>Lower Case</button>
                    <button className='btn btn-dark mx-2 my-2' onClick={removeExtraSpaces}>Remove Extra Spaces</button>

                </div>
            </div>
        </>
    );
}
TextForm.propTypes = {
    heading: PropTypes.string
}
TextForm.defaultProps = {
    heading: "Set Heading"
}
