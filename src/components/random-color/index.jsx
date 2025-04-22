import React, { useEffect, useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function randomColorUtiility(length){
    return Math.floor(Math.random()*length)
  }
  function handleCreatedRandomHexColor() {
    //#678765
    const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexColor="#"
    for(let i=0;i<6;i++){
        hexColor+=hex[randomColorUtiility(hex.length)]
    }
    console.log(hexColor)
    setColor(hexColor)

  }
  function handleRandomRgbColor() {
    const r=randomColorUtiility(256)
    const g=randomColorUtiility(256)
    const b=randomColorUtiility(256)
    setColor(`rgb(${r},${g},${b})`)
  }
  useEffect(()=>{
    if(typeOfColor==='rgb')handleRandomRgbColor()
      else handleCreatedRandomHexColor()
  },[typeOfColor])
  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        background: color,
        
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create rgb Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreatedRandomHexColor
            : handleRandomRgbColor
        }
      >
        Generate Random color
      </button>
      <div style={{
        display:'flex',
        flexDirection:'column',
        gap:'20px',
        justifyContent:'center',
        alignItems:'center',
        color:'#fff',
        fontSize:'60px',
        marginTop:'50px'
      }}>
        <h3>{typeOfColor==='rgb'?'RGB color':'HEX color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
