//** IMPORTS */
import React, { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai';


const AiChat = () => {
  const [prom,setProm] = useState();
  const [ans,setAns] = useState();
  const genAns = async() =>{
    const key = (process.env.REACT_APP_AI_KEY);
    
    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = "Explain how AI works";
    
    const result =  await model.generateContent(prom);
    console.log(result.response.text());
    setAns(result.response.text());
  }

  return (
    <div>
      <h1>AI CHAT</h1>
      <input type="text" onChange={(e)=>setProm(e.target.value)}/>
      <p>{ans}</p>
      <button onClick={()=>genAns()}>generate ans</button>
    </div>
  )
}

export default AiChat