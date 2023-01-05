

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Contacts from "./pages/Contacts";
import Nav from "./components/Nav";
import ContactsDetails from "./pages/ContactsDetails";
import Home from "./pages/Home";
import About from "./pages/About";
import AddContact from "./pages/AddContact";
import contacts from './data.json'

export default class App extends Component {
  state={
    contacts:[]
  }
  componentDidMount(){
    
    axios.get('http://localhost:4000/contacts')
    .then(({data})=>{console.log(data)
      this.setState({
        contacts:data
      })
    })
    .catch(err=>console.log(err))
  }
 
  render() {
    const{contacts}=this.state
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/AddContact">
              <AddContact />
            </Route>
            <Route path="/contacts/:id">
              <ContactsDetails contacts={contacts}/>
            </Route>
            <Route path="/contacts">
              <Contacts contacts={contacts} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

