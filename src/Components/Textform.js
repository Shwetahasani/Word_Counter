// import { useState } from "react"
import React, {useState} from 'react'
import './index2.css'
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from  '@fortawesome/free-solid-svg-icons';

function Textform(props) {
  let mystyle={
    color:'red',
     backgroundColor:'black',
   borderRadius:'4px'
   }

const[detailsvisible,setdetailsvisible]=useState(false);

    const handleup=()=>{
        console.log("clicked"+text);
        const newtext=text.toUpperCase();
        settext(newtext);

    }
    const handlelo=()=>{
      console.log("clicked"+text);
      const newtext=text.toLowerCase();
      settext(newtext);

  }
  const handlecopy=()=>{
     var text1=document.getElementById("myBox");
     text1.select();
     navigator.clipboard.writeText(text1.value);
  } 
  const handlespaces=()=>{
    let newtext=text.split(/[ ]+/);
    settext(newtext.join(" "));
  }
  const toggleDetails=()=>{
   setdetailsvisible(!detailsvisible);
  }

 


    const handle =(event)=>{
console.log("change");
settext(event.target.value);
    }

    const [text, settext]=useState("");
    
  return (
    <>

    <div className='container'>

    
    <h1>{props.heading}</h1>
      <div className='mb2'>
      <textarea name="form-control" onChange={handle} value={text} id="myBox" cols="100" rows="8"></textarea>


      </div>
      <button className='btn mx-2' onClick={handleup}> convert  to Uppercase</button>
      <button className='btn mx-6' onClick={handlelo}> convert  to  Lowercase</button>
      <button className='btn mx-6' onClick={handlecopy}> copy text</button>
      <button className='btn mx-6' onClick={handlespaces}> Remove extra spaces </button>
    </div>
    <br/>
    <div className='container'>
    <p>{text.length} Characters,{text.split("").length} Words</p>
    <p>{0.008*text.split("").length} Minutes read</p>
    
  <h2>preview</h2>
  <p>{text}</p>


<h1 className='details' onClick={toggleDetails}>Details
<FontAwesomeIcon className='details-icon' icon={detailsvisible ? faChevronUp : faChevronDown} />
</h1>
{detailsvisible && (
<div>
<p>{text.split("").length} Words</p>

 <p>{text.length} Characters</p>
 <p>{text.split(/[.!?]+/).length} Sentences</p>
<p>{text.split(/\n/).length} Paragraphs</p>


   <p>Reading Time: {0.008*text.split("").length}minutes</p>
   </div>)}
   
<div className="container" style={mystyle}>

</div>
   
    </div>
    </>
  )

  }
export default Textform;
