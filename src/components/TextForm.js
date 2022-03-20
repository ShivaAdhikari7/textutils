import React, {useState} from 'react'

export default function TextForm(props) {

  
 
  const handleUpClick =()=>{
    let newText =text.toUpperCase()
    setText(newText)
  }
  const handleOnChange =(event) =>{
    setText(event.target.value)
  }
  const handleLowClick =()=>{
    let newtext=text.toLowerCase()
    setText(newtext)
  }
  const handleClearClick=()=>{
    let newText=""
    setText(newText)
  }
  const handleExtraSpaces =()=>{
    let newText= text.split(/[ ]+/);
    console.log(newText)
    setText(newText.join(" "))
  }
  const handleCopy =()=>{
    navigator.clipboard.writeText(text)
  }
  const[text, setText]=useState("")
  return (
    <div>
      <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>      
        <div className="mb-3">       
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#042743':'white', color: props.mode === 'dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="button btn btn-primary mx-1 my-1"  onClick={handleUpClick} >Convert to Uppercase </button>
        <button disabled={text.length===0} className="button btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to Lowercase </button>
        <button disabled={text.length===0} className="button btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text </button>
        <button disabled={text.length===0} className="button btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces </button>
        <button disabled={text.length===0} className="button btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text </button>

        <div className="textPreview my-3">
          <h2>Your Text Summary:</h2>
          <p><b>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters.</b></p>
          <p>{0.08*text.split(/\s+/).filter((element)=>{return element.length !==0}).length} minutes to read</p>
          <h3>Preview</h3>
          <p>{text.length>0?text:"Enter some text in the texbox above to preview it."}</p>
        </div>
      </div>
    </div>
  )
}

