import React, { Component } from 'react';


import { Switch, Route, Redirect } from "react-router-dom";
import { Main } from "./main/Main"

class Container extends Component {
  state = {

  };

  render() {
    const location = this.props.location;
    return (
        <Switch key={location.pathname} location={location}>
          <Route exact path="/main" component={Main} />
          <Redirect to="/main" />
        </Switch>
    );
  }
}


export default Container;
