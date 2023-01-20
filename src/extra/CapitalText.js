import React, { useState } from 'react'

const CapitalText = () => {
    const onclickhandler = () => {
        const newText = text.toUpperCase();
        setText(newText);
    }
    const onchangehandler = (event) => {
        setText(event.target.value)

    }
    const [text, setText] = useState(`Enter Text For UpperCase`);
    return (
        <>

<center>
        <h3>Total word's {text.length}</h3>  
        {/* {text.split(" ").length} for count word  */}
            <div style={{ width: "50%"}}>
                <textarea className="form-control m-2 mt-4" value={text} rows="3" onChange={onchangehandler}></textarea>
                <br />
                <button className='btn btn-sn btn-success m-1' onClick={onclickhandler}>Convert To Uppercase</button>
                
            </div>
</center>

        </>
    )
}
export default CapitalText;