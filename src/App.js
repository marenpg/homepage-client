import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import './App.scss';

import NavBar from './components/navbar/navbar.jsx';
import Jokes from './pages/jokes.jsx';
import StartPage from './pages/startpage';

const menuLinks = [
    {
        heading: "HJEM",
        url: "/",
        className: "w3-bar-item w3-button"
    },
    {
        heading: "JOKES",
        url: "/jokes",
        className: "w3-bar-item w3-button"
    }
]

const App = () => (
  <main>
    <NavBar links={menuLinks}/>
      <Route exact path='/' component={StartPage} />  
      <Route exact path='/jokes' component={Jokes} />  
  </main>
);

export default App;
