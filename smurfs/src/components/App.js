import React, { Component } from 'react';
import './App.css';
import SmurfList from './SmurfList';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';

class App extends Component {

  //fetching the smurf data from the server
  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <SmurfList />
      </div>
    );
  }
}

//adding the getSmurfs function to props
const mapDispatchToProps = {
  getSmurfs
}

export default connect(null, mapDispatchToProps)(App);