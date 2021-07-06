import React, { useState } from 'react';
import './App.css';
import Axios from 'axios'

function App() {
   const [eName, setName] = useState('');
   const [ePassWord, setPassword] = useState('');
   const [leaveType, setType] = useState('');

  const submitleave = () => {
    Axios.post("http://localhost:3001/api/insert", {
      eName:eName, 
      ePassWord:ePassWord,
      leaveType:leaveType
    }).then(() => {
      alert("Success")
     
    });
  };

  return (
    <div className="App"> 
      <h1>Leave Management</h1>

      <div className="form">
        <label>User Name</label>
        <input type="text" 
               name="eName"
               onChange={(e) => {
                 setName(e.target.value);
               }}>
        </input>

        <label>User Password</label>
        <input type="text" 
               name="ePassWord"
               onChange={(e) => {
                setPassword(e.target.value);
              }}>
        </input>
        
        <label>Leave type</label>
        <input type="text" 
               name="leaveType"
               onChange={(e) => {
                setType(e.target.value);
              }}>
        </input>

        <button onClick={submitleave}>Submit</button>

        
      </div>
    </div>
  );
}

export default App;
