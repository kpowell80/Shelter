import React, { Component } from 'react';
import './App.css';
import "react-router";
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/DashBoard';
import PetForm from './components/PetForm';
import DetailPet from './components/DetailPet';
import EditPet from './components/EditPet';


class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
       <ul>
          <li ><Link to="/">Home</Link></li>
          <li><Link to="/pet/new">Add a new pet to the shelter</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/pet/new" component={PetForm} />
          <Route path="/pet/:_id/edit" component={EditPet} />
          <Route path="/pet/:_id/detail" component={DetailPet} />
        </Switch>
      
      
      </BrowserRouter>
       
      </div>
    );
  }
}

export default App;
