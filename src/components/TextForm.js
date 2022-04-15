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
        props.setalert("Converted To Upper Case", "success");
    }
    const changeLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.setalert("Converted To Lower Case", "success");
    }
    const changeCapitalizedCase = () => {
        let newText = text.toLowerCase().split(' ');
        for (var i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        setText(newText.join(' '));
        props.setalert("Converted To Capitalized Case", "success");
    }
    const changeInvertCase = () => {
        var s = '';
        var i = 0;
        var str = text;
        while (i < str.length) {
            var n = str.charAt(i);
            if (n === n.toUpperCase()) {
                n = n.toLowerCase();
            } else {
                n = n.toUpperCase();
            }
            i += 1;
            s += n;
        }
        setText(s);
        props.setalert("Converted To Invert Case", "success");
    };
    const changeFirstSmallCase = () => {
        let newText = text.toUpperCase().split(' ');
        for (var i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toLowerCase() + newText[i].slice(1);
        }
        setText(newText.join(' '));
        props.setalert("Converted To Alternate Case", "success");
    }
    const changeAlternateCase = () => {
        var s = '';
        var i = 0;
        var str = text;
        while (i < str.length) {
            var n = str.charAt(i);
            if (i % 2 === 1) {
                n = n.toLowerCase();
            } else {
                n = n.toUpperCase();
            }
            i += 1;
            s += n;
        }
        setText(s);
        props.setalert("Converted To Alternate Case", "success");
    }
    const clearText = () => {
        setText("");
        props.setalert("Clear Text", "success");
    }
    const copyText = () => {
        let text = document.getElementById('myText');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.setalert("Copy Text", "success");
    }
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.setalert("Removed Extra Spaces", "success");
    }

    return (
        <>
            <div className="container mt-5 custom-text-area text-center" style={{ color: props.mode === 'dark' ? 'white' : '#000000e6' }}>
                <label htmlFor="exampleFormControlTextarea1" className="form-label text-dark"><h2><strong style={{ color: props.mode === 'dark' ? 'white' : '#000000e6' }}>{props.heading}</strong></h2></label>
                <textarea className="form-control h-100 w-75 m-auto" style={{ background: props.mode === 'dark' ? '#212529' : '#fff', color: props.mode === 'dark' ? 'white' : '#000000e6' }} onChange={handleOnChange} value={text} id="myText" rows="15"></textarea>
                <div className="counter">
                    <span><h5 className='m-0'>Your text Summary</h5></span>
                    <div className="d-flex justify-content-center alin align-items-center">
                        <span><h4>Word: </h4></span>
                        <h4 className="mx-3">{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</h4><h4>,</h4>
                        <span><h4>Character: </h4></span>
                        <h4 className="mx-3">{text.split("").filter((element) => { return element.length !== 0 }).length}</h4>
                    </div>
                </div>
                <div className="button my-2">
                    <button disabled={text.length === 0} className='btn btn-dark mx-2 my-2' onClick={copyText}>Copy Text</button>
                    <button disabled={text.length === 0} className='btn btn-dark mx-2 my-2' onClick={clearText}>Clear Text</button>
                    <button disabled={text.length === 0 || text === text.toUpperCase()} className='btn btn-dark mx-2 my-2' onClick={changeUpperCase}>UPPER CASE</button>
                    <button disabled={text.length === 0 || text === text.toLowerCase()} className='btn btn-dark mx-2 my-2' onClick={changeLowerCase}>lower case</button>
                    <button disabled={text.length === 0} className='btn btn-dark mx-2 my-2' onClick={changeCapitalizedCase}>Capitalized Case</button>
                    <button disabled={text.length === 0} className='btn btn-dark mx-2 my-2' onClick={changeAlternateCase}>aLtErNaTe cAsE</button>
                    <button disabled={text.length === 0} className='btn btn-dark mx-2 my-2' onClick={changeFirstSmallCase}>fIRST sMALL</button>
                    <button disabled={text.length === 0} className='btn btn-dark mx-2 my-2' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                    <button disabled={text.length === 0} className='btn btn-dark mx-2 my-2' onClick={changeInvertCase}>Invert Case</button>

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
