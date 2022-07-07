import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header/Header';
import './header/Header.css'
import Main, {Form} from './main/Main';
import './main/Main.css'
import Ul, {Li} from './ul/Ul';
import './ul/Ul.css'
import Countries from './ul/Countries';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Form />
    <Ul />     
    <Countries />
  </React.StrictMode>
);