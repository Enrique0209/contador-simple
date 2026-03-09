import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let num1 = 0;

setInterval(function () {

  num1++
//si num1 es > 9 => empezar a contar el siguiente numero y volver num1 a cero
//si num2 es > 9 
console.log(num1);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home digito1={num1} />
    </React.StrictMode>,
  )
}, 1000);

  
 
