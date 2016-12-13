import React from 'react';
import ReactDOM from 'react-dom';
import {NavItem, Navbar, Dropdown, Button, Icon, Footer, Col, Row, Input, CardPanel, Tabs, Tab} from 'react-materialize';

// import { Autocomplete }   from 'material-ui';
// import getMuiTheme        from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
//AreaAutocomplete
import injectTapEventPlugin from 'react-tap-event-plugin';
import MainButton from './MainButton'; // Our custom react component

import Place from './Place.js'

import { Router, Route, IndexRoute, Link, browserHistory } from "react-router"
// import createBrowserHistory from 'history/lib/createBrowserHistory'

injectTapEventPlugin();

class Nav extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand='logo' right>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/search">Search</Link></NavItem>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

class Paralax extends React.Component {
  render() {
    return (
      <div className="parallax-container">
        <h1 className="header center teal-text text-lighten-2">TraveLink</h1>

        <h5 className="header center col s12 light">
            See places around your destination
        </h5>

        <Row>
            <MainButton />
            <Button s={6}>Search</Button>
        </Row>

        <div className="parallax">
          <img src="images/parallax1.jpg" />
        </div>
      </div>
    );
  }
}

const ptop0 = {
  'paddingTop': '0px',
};

class FootLinks extends React.Component {
  render() {
    return (

      <div className="blue-grey white-text">

        <div className="row container section">
          
          <Col s={12} m={6} l={6} className='grid-example'>
            <h5 className="truncate white-text">Popular Culinary Destination</h5>
            <ul>
              <li>
                <Link to="/search/1/3" className="truncate grey-text text-lighten-3" activeClassName="truncate grey-text text-lighten-3">Slipi, DKI Jakarta Culinary</Link>
              </li>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Slipi, DKI Jakarta Culinary</a></li>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Cihampelas, Bandung Culinary</a></li>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Tj Pandan, Belitung Culinary</a></li>
            </ul>
          </Col>

          <Col s={12} m={6} l={6} className='grid-example'>
            <h5 className="truncate white-text">Find Nearest ATM</h5>
            <ul>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Slipi, DKI Jakarta ATMs</a></li>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Cihampelas, Bandung ATMs</a></li>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Tj Pandan, Belitung ATMs</a></li>
            </ul>
          </Col>

          <Col s={12} m={6} l={6} className='grid-example'>
            <h5 className="truncate white-text">Need Groceries?</h5>
            <ul>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Slipi, DKI Jakarta Minimarkets</a></li>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Cihampelas, Bandung Minimarkets</a></li>
              <li><a className="truncate grey-text text-lighten-3" href="#!">Tj Pandan, Belitung Minimarkets</a></li>
              
            </ul>
          </Col>

          <Col s={6} m={3} l={3} className='grid-example'>
            <h5 className="truncate white-text">About TraveLink</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Why use TraveLink</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
            </ul>
          </Col>
        </div>

        <footer className="page-footer blue-grey darken-2" style={ptop0}>
          <div className="footer-copyright">
            <div className="container">
              <span>Copyright © 2016 <a className="grey-text text-lighten-4">Hutomo</a> All rights reserved.</span>
              <span className="right"> Design and Developed by <a className="grey-text text-lighten-4">HutomoLabs</a></span>
              </div>
          </div>
        </footer>

      </div>

     
    );
  }
}

class Ttab extends React.Component {
  render() {
    return (
      <div className="row container section">
        <Tabs className='tab-demo z-depth-1'>
            <Tab title="Culinary">Culinary</Tab>
            <Tab title="Minimarket" active>Minimarket</Tab>
            <Tab title="ATM">ATM</Tab>
        </Tabs>
      </div>
    );
  }
}

class App extends React.Component {
  render () {
    return (
      <div>
        <Paralax />
        <FootLinks />
      </div>
    );
  }
}

class Search extends React.Component {
  render () {
    return(
      <div>
        <Ttab />
        <Place params={this.props.params} />
        <FootLinks />
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Nav}>
      <IndexRoute component={App} />
        <Route path="search" component={Search}>
        <Route path="/search/:areaId/:catId" component={Search}/>
      </Route>
    </Route>
  </Router>, document.querySelector('.react-root')
);
