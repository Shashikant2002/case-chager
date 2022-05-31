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

                <div className="textcontent wid-70 mt-5">
                    <p>online case converter allows you to convert the case and change the case of your text from UPPERCASE to lower case, lower case to UPPERCASE, or capitalize words in phrases with a single click. This text converter is designed for you if you don't know how to convert the text in Word, Notepad, or other word processing software.
                    </p>
                    <h3>Lower case</h3>
                    <p>If you're wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do. It reduces the size of all the letters in your text. To convert lowercase from caps to lowercase, copy the text you want to convert to lowercase, paste it into the above box, and click the 'lower case' tab.
                        "this is an example of a lower case".</p>
                    <h3>Upper case</h3>
                    <p>The upper case transformer takes any text and converts all letters to caps. It will essentially convert lowercase letters to CAPITALS (while keeping uppercase letters as uppercase letters).
                        Copy the text you want to change and paste it into the above box, then click the UPPER CASE tab.
                        "THIS IS AN EXAMPLE OF AN UPPER CASE".</p>
                    <h3>Capitalize case</h3>
                    <p> The capitalized case converter will automatically convert the first letter of each word to upper case and leave the remaining letters as lower case letters.
                        Copy the content you want to convert to this format, paste the form above into the box and choose the Capitalized Case tab.
                        "This Is An Example Of Capitalized Case Tab".
                    </p>
                    <h3>Alternating Case</h3>
                    <p>The alternating case converter converts your text (regardless of its current format) into text alternating between lower and upper cases. It will generate a capital letter within the same word followed by a lower case letter.
                        this is an "aLtErNaTiNg cAsE TaB ExAmPlE".
                    </p>
                    <h3>Copy Text</h3>
                    <p>The Copy text converter allows you to copy any text you write. Just click on "copy text", and your whole sentence automatically will get copied.</p>
                    <h3>Clear Text</h3>
                    <p>The clear text converter allows you to clear all the written text. You can also clear the selected text if you want to.</p>
                    <h3>First small</h3>
                    <p>The first small converter will automatically convert the first letter of each word to lower case and leave the remaining letters as upper case letters.
                        Copy the content you want to convert to this format, paste the form above into the box and choose the First small tab.
                        "tHIS iS aN eXAMPLE oF fIRST sMALL".
                    </p>
                    <h3>Remove Extra Spaces</h3>
                    <p>Remove Extra Spaces is a simple tool for eliminating extra spaces between words. Extra spaces should be copied, pasted, and deleted.</p>
                    <h3>Invert case</h3>
                    <p>Uppercase characters are converted to lowercase, and lowercase characters are converted to uppercase. Paste your text into the tool's first text area, and it will get converted immediately!
                        "EXAMPLE of this IS - example OF THIS is".
                    </p>
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
