import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import FastTrackersList from './FastTrackersList';
import * as ReactBootStrap from "react-bootstrap";

import { BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";

function App() {
  return (

 /*         <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootStrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                  <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                      <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                      <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                      <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                      <ReactBootStrap.NavDropdown.Divider />
                      <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                  </ReactBootStrap.Nav>
                  <ReactBootStrap.Nav>
                    <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                      Dank memes
                    </ReactBootStrap.Nav.Link>
                  </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>*/


    <Router>
      <div className="App" style={{
              backgroundColor: '#d1ffbd',
              textAlign: 'center',
              padding: '14px 16px',
              textDecoration: 'none',
              fontSize: '17px'
            }}>
        


        <h2> Clue Mediator (www.cluemediator.com)</h2>

        <div className="topper">

        <NavLink exact activeClassName="active" to="/">Home</NavLink> <hr />
        <NavLink activeClassName="active" to="/about">About</NavLink> <hr />
        <NavLink activeClassName="active" to="/contact">Contact</NavLink> <hr />
        <NavLink activeClassName="active" to="/fasttrackerslist">FastTrackersList</NavLink> <hr />



        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/fasttrackerslist" component={FastTrackersList} />
          <Route component={NotFound} />


          


        </Switch></div>

         
      </div>
    </Router>
  );
}

export default App;
