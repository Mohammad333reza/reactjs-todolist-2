import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  {/*Enables stricter checks and warnings during React development to improve code quality. */}
    <App /> {/*enabling StrcitMode for the app component */}
  </React.StrictMode>,
);
/*ReactDOM is a package in React that provides DOM-specific methods that can be used at the top level of 
a web app to enable an efficient way of managing DOM elements of the web page(importing a package).*/
//createRoot :lets you create a base to display React components inside a browser DOM node.
/*In JavaScript, the document object represents the entire
 HTML document that's currently loaded in the web browser.*/
 /*Rendering is a process used in web development 
 that turns website code into the interactive pages users see when they visit a website.*/
 // UI(user interface): everything that is visible and usable for users.
 /*The render function of a React component returns JSX code that defines 
 the UI structure of the component*/