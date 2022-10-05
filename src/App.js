import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const axios = require('axios');

function App() {

  let[name,setname] = useState('');
  let[email,setemail]= useState('');
  let[password,setpassword]= useState('');

  const btnhandler =() =>{
    axios.post('http://localhost/kashmira/demo.php',{name:name,email:email,password:password})
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

  }
  return (
    <div className="App">
      Name:<input type='text' onChange={(e)=>{setname(e.target.value)}}></input>
      <br></br>
      Email:<input type='text' onChange={(e)=>{setemail(e.target.value)}}></input>
      <br></br>
      password:<input type='password' onChange={(e)=>{setpassword(e.target.value)}}></input>
      <br></br>
      <input type="button" onClick ={btnhandler} value="Click Here"></input>
    </div>
  );
}

export default App;
