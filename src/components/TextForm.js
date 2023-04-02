import React, { useState } from 'react'


export default function TextForm(props) {



    // ye concept state and handaling event 
    // ka hai  . ye hm use krte hai jb screen pr kuch krte hai 
    // tb kuch change hota hai 

    const handleUpClick = () => {
        // console.log("UpperCase was Clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("vonverted to uppercase", "success");
    }

    const handleOnchange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text your 4v');

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 >{props.heading} </h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to upperCase</button>
            </div>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1> Your text summarry</h1>
                <p>
                    {text.split(" ").length}  words {text.length} character
                </p>


            </div>

        </>
    )
}
