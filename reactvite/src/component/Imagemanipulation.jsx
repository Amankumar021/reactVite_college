import React, { useState } from 'react'
import cat from '../images/cat.png';

function Imagemanipulation() {

    const[height,setHeight]=useState(200);
    const[width,setWidth]=useState(200);
    const[red,setRed]=useState(20);
    const[green,setGreen]=useState(10);
    const[blue,setBlue]=useState(140);
   const[angle,setAngle]=useState(0);
function enhanceHeight(){
setHeight(height+10);
}


function enhanceWidth(){
setWidth(width+10);
}

function chnageBGColor(){
   setRed(Math.random()*255);
   setGreen(Math.random()*255);
   setBlue(Math.random()*255)
}

function rotateImage(){
setAngle(angle+25);
}
  return (
    <div>
<h2 style={{color:'white',backgroundColor:'brown'}}> Image Manipulation using React</h2>
<div style={{border:'2px solid red',height:'300px', width:'400px',marginLeft:'300px'}}>
<img src={cat} height={height} width={width} style={{backgroundColor:`rgb(${red},${green},${blue})`, transform:`rotate(${angle}deg)`}}></img>
<div>
    <h2>Cat height:{height}</h2>
    <h2>Cat width:{width}</h2>
    <h2>Color code:{red},{green},{blue}</h2>
  
    
</div>
</div>
<div>

</div>
<button onClick={enhanceHeight}>EnhanceHeight</button>
<button onClick={enhanceWidth}>EnhanceWidth</button>
<button onClick={chnageBGColor}>ChnageBGColor</button>
<button onClick={rotateImage}>rotateImage</button>

    </div>
  )
}

export default Imagemanipulation