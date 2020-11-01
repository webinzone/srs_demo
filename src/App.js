import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Create_service_agreement from './components/create_service_agreement';
import Transfer_form from './components/transfer_form';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark  bg-primary">
            <Link to={'/'} className="navbar-brand">SRS MANAGER</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
               <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
               {/*  <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
                */} 
                <li className="nav-item">
                  <Link to={'/service_agreement'} className="nav-link">Residential Service Agreement</Link>
                </li>                
                <li className="nav-item">
                  <Link to={'/transfer_form'} className="nav-link">Transfer Form</Link>
                </li>                

              </ul>
            </div>
          </nav> <br/>
          {/* <h2>Welcome to React CRUD Tutorial</h2>  */} 
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
              <Route path='/service_agreement' component={ Create_service_agreement } />
              <Route path='/transfer_form' component={ Transfer_form } />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
