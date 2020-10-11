import React, {useState} from 'react';
import './App.css';
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";



function App() {
  const [username, setUsername] = useState("username");
  function setUserOnClick(e){
    let curr = e.target.value;
    if (curr.length <=50 || e.keyCode === 8){
      setUsername(e.target.value);
    }else{
      e.preventDefault();
    }
    
  }
  return (
    <div className="App" >
      <UserInput id="myMainInput" onClick = {setUserOnClick}/>
      <UserOutput username ={username}/>
      <UserOutput username ={username} additionalText="Thank you for coming."/>
    </div>
  );
}

export default App;

// e)=> {return e.target.value}