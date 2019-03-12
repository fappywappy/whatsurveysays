import React from 'react';
import NavBar from './component_navbar';
import Main from './component_main';
import Survey from './component_survey';
import Correct from './component_correct';
import Wrong from './component_wrong';
import Waiting from './component_waiting';
import Footer from './component_footer';
import { Switch, Route } from 'react-router-dom';
import './styles.scss';

export default (props) => (
  <div styleName="landing">
    <NavBar />
    <Switch>
      <Route component={Main} path="/" exact></Route>
      <Route component={Survey} path="/survey" exact></Route>
      <Route component={Correct} path="/correct" exact></Route>
      <Route component={Wrong} path="/wrong" exact></Route>
      <Route component={Waiting} path="/waiting" exact></Route>
    </Switch>
    <Footer />
  </div>
);
