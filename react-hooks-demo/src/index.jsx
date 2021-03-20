import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from "./container/Container"
import { HashRouter, Route } from "react-router-dom"
import { Page } from "./store/reducers"


ReactDOM.render(
  <HashRouter hashType="noslash">
    <Page>
      <Route path="/" component={Container} />
    </Page>
  </HashRouter>, document.getElementById("app")
)
