import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alerts from './components/Alerts';


import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';





function App() {

  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled ", "success");

    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled ", "success");

    }
  }


  return (
    < >
      <Router>

        <Navbar title=" Textutils" mode={mode} toggleMode={toggleMode} />
        <strong><Alerts alert={alert} /></strong>

        <div className="container">

          <Routes>
            <Route path='/about' element={<About />} />



            <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter your text" mode={mode} />
            } />

          </Routes>



        </div>

      </Router>


    </>
  );
}

export default App;
