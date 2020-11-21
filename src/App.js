import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";

import { createBrowserHistory } from 'history';

import Selections from './selection/Selections';
import PracticeCharacters from './practice/PracticeCharacters';
import PracticeReading from './practice/PracticeReading';

import './App.css';

import history from './history';

function App() {
  return (
    <Router history={history}>
      <nav className="navigation">
        <ul>
          <li><a className="logo">Kana.Study</a></li>
          <li className="navigation-item"><Link to="/">Selections</Link></li>
          <li className="navigation-item"><Link to="/practice-characters">Practice Characters</Link></li>
          <li className="navigation-item"><Link to="/practice-reading">Practice Reading</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/practice-characters">
          <PracticeCharacters/>
        </Route>
        <Route path="/practice-reading">
          <PracticeReading/>
        </Route>
        <Route path="/">
          <Selections/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
