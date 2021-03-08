import React, {useEffect} from 'react';
import Categories from './Categories';

import "./css/slick.css"; 

import Egypt from './categories/Egypt'
import Lebanon from './categories/Lebanon'
import KSA from './categories/KSA'
import Iraq from './categories/Iraq'

import EgyptScreen from './Screens/EgyptScreen'
import LebanonScreen from './Screens/LebanonScreen'
import KSAScreen from './Screens/KSAScreen'
import IraqScreen from './Screens/IraqScreen'

import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

const App = () => {

  useEffect(() => {
    const aceneasBody = document.getElementsByTagName('body')[0];
    setTimeout(function(){
      aceneasBody.classList.add('loaded');
    }, 200);
    setTimeout(function(){
      aceneasBody.classList.add('hideloading');
    }, 900);
    
  }, [])

  return (
    <Router>
      <main>
        <div className="loading">
          <div className="flex ai-c jc-c">
            <div>أهلاً بكم في شخخني ضحك</div>
          </div>
        </div>
        <Switch>
          <Route path="/" exact component={Categories} />

          <Route path="/Egypt" exact component={Egypt} />
          <Route path="/Lebanon" exact component={Lebanon} />
          <Route path="/KSA" exact component={KSA} />
          <Route path="/Iraq" exact component={Iraq} />

          <Route path="/Egypt/:id" component={EgyptScreen} />
          <Route path="/Lebanon/:id" component={LebanonScreen} />
          <Route path="/KSA/:id" component={KSAScreen} />
          <Route path="/Iraq/:id" component={IraqScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
