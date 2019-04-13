import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';

import SeachForm from './SeachForm/SeachForm';
import SerialsList from './SerialsList/SerialsList';
import SerialInfo from './SerialInfo/SerialInfo';

class App extends Component {

  componentDidMount(){
    this.props.history.push('/seach')
  }

  componentDidUpdate(nextProps){
    if(nextProps.TVSerialsList.length !== this.props.TVSerialsList.length) {
        this.props.history.push('/list')
        
    }
  }

  render() {
    return (
      <Switch>
        <Route path='/seach' component={SeachForm}/>
        <Route path='/list' component={SerialsList}/>
        <Route path='/info' component={SerialInfo}/>
      </Switch>
    );
  }
}

function MSTP (state){
  return {
    TVSerialsList: state.TVSerialsList,
  };
};

export default withRouter(connect(MSTP, null)(App));