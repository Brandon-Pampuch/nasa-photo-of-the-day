import React, {useState} from "react";
import {useEffect} from "react";
import axios from "axios"
import HeroImage from "./components/HeroImage"
import "./App.css";


function App() {

  const [state, setState] = useState("")
  const [Title, setTitle] = useState("")

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res =>{
      console.log(res)
      setTitle(res.data.title)
      setState(res.data.url)
    })
  },[])

  return (
    <div>
      <h1>{Title}</h1>
       <HeroImage image={state}></HeroImage>
    </div>
  );
}

export default App;
