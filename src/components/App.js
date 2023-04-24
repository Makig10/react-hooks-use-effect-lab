import React ,{useEffect,useState}from 'react';
import './App.css';

function App() {
  const[image,setImage]=useState[image]
  const URL = "https://dog.ceo/api/breeds/image/random"
  useEffect(
    fetch(URL)
    .then(response =>(response.json()))
    .then(data=>{
     setImage(image)
    }), []
  )
  return(
    
    <div>
      {Image ? (
        <img src={Image} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
    
  )
}

export default App;
