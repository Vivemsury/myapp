// import logo from './logo.svg';
import './App.css';
// components na folder ma navbar 6
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import About from './components/About';
import Alert from './components/Alert';

// import {
//   // first letter in capital
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

import React, { useState } from 'react';
function App() {

  const [mode, setMode] = useState('light');
  const [modename, setModename] = useState('Enable Dark Mode')
  // const[textcolor,setTextcolor]=useState('text-light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setModename('Enable Light Mode')
      document.body.style.backgroundColor = "#042743"
      showAlert("dark mode has been enable", "success")
      // setTextcolor('light')
      document.title = "Textutils-dark mode";
    }
    else {
      setMode('light')
      setModename('Enable Dark Mode')
      document.body.style.backgroundColor = "white"
      showAlert("light mode has been enable", "success")
      document.title = "Textutils-Light mode";
      // setTextcolor('dark')

    }
  }
  const btn2 = () => {
    if (mode === 'light') {
      setMode('#9ac49a')
      setModename('Enable Light Mode')
      document.body.style.backgroundColor = "#9ac49a"
      showAlert("dark mode has been enable", "success")
      // setTextcolor('light')
    }
    else {
      setMode('light')
      setModename('Enable Dark Mode')
      document.body.style.backgroundColor = "white"
      showAlert("light mode has been enable", "success")
      // setTextcolor('dark')

    }
  }


  return (
    <>
    {/* <Router> */}

      {/* aa ma je title use karyo 6 ae props tarike use thay 6 */}
      {/* <Navbar title={3}></Navbar> */}
      <Navbar title="textutils" mode={mode} toggleMode={toggleMode} modename={modename} btn2={btn2} ></Navbar>
      {/* <Navbar ></Navbar> */}
      {/* <Link></Link> */}

      <Alert alert={alert}></Alert>


      <div className="container my-3">
        {/* <Routes> */}
        {/* perfect aej elemnt no path male */}
      {/* example:-  
          /users-->component-1
          /users/home-->component-2,
          to aama exact na lakhiae and aapdne bijo component access karvo hoy to ae aapde ne pehlo component aapi de
       */}
        {/* <Route exact path="/about" element={<About />} > */}
            {/* <About></About> */}
          {/* </Route> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter text to analyze"></TextForm>} > */}
          {/* </Route> */}
        {/* </Routes> */}

            <TextForm showAlert={showAlert} mode={mode} heading="Enter text to analyze"></TextForm>


        {/* <About></About> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
