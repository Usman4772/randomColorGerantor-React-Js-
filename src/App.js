import { useState } from 'react';
import './App.css';
function App() {
  const buttonStyle={
    padding:".5rem 1rem",
    border:"none",
    outline:"none",
    cursor:"pointer",
    borderRadius:".3rem"
  }
  const [type,setType]=useState("hex")
  const [color,setColor]=useState("#000000")
  function createRandomIndex(length){
    let index=Math.floor(Math.random()*length)
    return index
  }
  function createRandomHexColor(){
const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let color="#"
for(let i=0;i<6;i++){
  color+=hex[createRandomIndex(hex.length)]
}
setColor(color)
  }
  function createRandomRbgColor(){
    let r=createRandomIndex(255)
    let g=createRandomIndex(255)
    let b=createRandomIndex(255)
    setColor(`rgb(${r},${g},${b})`)

  } 
    useEffect(()=>{
    if(type=="hex"){
      createRandomHexColor()
    }else {
      createRandomRbgColor()
    }
      },[type])
   return (
  
    <div style={{
      width:"100vw",
      height:"100vh",
      background:color,
      padding:"2rem 0",
    }}>
    <div style={{
      width:"100vw",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:"2rem 0",
      gap:"1rem"
    }} >
    <button style={buttonStyle}  onClick={()=>setType("hex")}>Create hex Color</button>
    <button style={buttonStyle} onClick={()=>setType("rgb")}>Create rgb Color</button>
    <button style={buttonStyle} onClick={type==="hex"?createRandomHexColor:createRandomRbgColor}>Create Random Color</button>      
    </div>
    <div style={{color:"white",display:"flex",justifyContent:"center",alignItems:"center", width:"100vw",height:"100vh",fontSize:"3rem"}}>{color}</div>
    </div>
  );
}

export default App;
