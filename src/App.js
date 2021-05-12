import React from "react";
import Index from "pages/index";
import Sdasd from "pages/sdasd";
import Dasda from "pages/dasda";
import Dasda1 from "pages/dasda1";
import Sdasd1 from "pages/sdasd1";
import Sdasd2 from "pages/sdasd2";
import Sdasd3 from "pages/sdasd3";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/sdasd' component={Sdasd}/>
			<Route exact path='/sdasd/dasda' component={Dasda}/>
			<Route exact path='/sdasd/dasda/dasda1' component={Dasda1}/>
			<Route exact path='/sdasd1' component={Sdasd1}/>
			<Route exact path='/sdasd1/sdasd2' component={Sdasd2}/>
			<Route exact path='/sdasd3' component={Sdasd3}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
