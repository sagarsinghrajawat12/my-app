import React, { useState } from 'react'

export default function TextForm(props) {
    const handeldwclick = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }
    const handelUPclick = () => {
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleonchange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('write your text here');

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3 " onClick={handelUPclick}>CONVERT TO UPPERCASE</button>
            <button className="btn btn-primary mx-3" onClick={handeldwclick}>Convert to lowercase</button>
        </div>
        <div className="container my-4">
            <h1>Your text summary </h1>
            <p>{text.split(" ").length} words  and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Meanute in read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
