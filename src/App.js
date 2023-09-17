import logo from './logo.svg';
import './App.css';
// import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import { useState } from 'react';
function App() {
 const[alert,setalert]=useState(null);
  let name="shweta hasani"
  return (
  <>
 
    <Alert alert="this is alert"/>
    <div className='container'>

    <Textform heading="enter the text "/>
    </div>
  
  </>
  );
}

export default App;
