import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import CountriesList from './components/CountriesList.jsx';
import countries from './countries.json' //pass the info like props
import CountryDetails from './components/CountryDetails';
import {Switch, Route} from 'react-router'


class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Hello</h1>
        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />

            {/* <Switch>
              <Route path="/country/:name" component={CountryDetails}/>
            </Switch> */}

          </div>
        </div>
      </div>
    );
  }
}
export default App;
