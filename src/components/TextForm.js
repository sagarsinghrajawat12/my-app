import React, { useState } from 'react'

export default function TextForm(props) {
    const handelUPclick = () => {
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleonchange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('write your text here');

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handelUPclick}>CONVERT TO UPPERCASE</button>
        </div>
    )
}
