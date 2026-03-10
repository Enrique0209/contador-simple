import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let counter = 0;

setInterval(function () {

  counter++

  const digito1 = Math.floor(counter / 100000) % 10;
  const digito2 = Math.floor(counter / 10000) % 10;
  const digito3 = Math.floor(counter / 1000) % 10;
  const digito4 = Math.floor(counter / 100) % 10;
  const digito5 = Math.floor(counter / 10) % 10;
  const digito6 = Math.floor(counter / 1) % 10;

   ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home 
        digito1={digito1}
        digito2={digito2}
        digito3={digito3}
        digito4={digito4}
        digito5={digito5}
        digito6={digito6}
      />
    </React.StrictMode>,
  )

}, 1000);

  
 
