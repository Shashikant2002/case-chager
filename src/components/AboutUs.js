import React, { useState } from 'react'

export default function AboutUs() {
    const [btn, setbtn] = useState("Enable Dark mode")
    const [DarkStyle, setDarkStyle] = useState({
        backgroundColor: "#fff",
        color: "rgb(31,31,31)"
        });

        const darkMode = () => {
            if(DarkStyle.color === '#fff'){
                 setDarkStyle({
                    color: "#000", 
                    backgroundColor: "rgb(255,255,255)"
                });
                setbtn("Enable Dark Mode");
            }else{
                setDarkStyle({
                    color: "#fff",
                    backgroundColor: "rgb(31,31,31)"
                });
                setbtn("Enable Light Mode");
            }
        }

    return (
        <div className="full py-1 mt-5" style={DarkStyle}>
            <div className='container mt-5 text-center'>
                <h2 className='text-center my-3'><strong>About Us</strong></h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style={DarkStyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" style={DarkStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={DarkStyle}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo" style={DarkStyle}>
                            <button className="accordion-button collapsed" style={DarkStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={DarkStyle}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={DarkStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={DarkStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={DarkStyle}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                <button type='button' className='btn btn-dark my-3' onClick={darkMode}>{btn}</button>
            </div>
        </div>
    )
}
