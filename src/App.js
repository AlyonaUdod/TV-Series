import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SeachForm from './SeachForm/SeachForm';
import SerialsList from './SerialsList/SerialsList';
import SerialInfo from './SerialInfo/SerialInfo';
import { clearInput } from './redux/actions/queryTextAction';
import { clearSeach } from './redux/actions/TVSerialsListAction';
import { clearQueryError } from './redux/actions/errorAction';
import './App.css';

class App extends Component {

  componentDidMount(){
    if(this.props.TVSerialsList.length === 0 && !this.props.currentSerial.score){
      this.props.history.push('/seach')
    }
  }

  componentDidUpdate(nextProps){
    if(nextProps.TVSerialsList.length !== this.props.TVSerialsList.length && this.props.TVSerialsList[0] ) {
       this.props.history.push('/list');
       this.props.clearError();
       window.scrollTo(0, 0);
    }
    if(this.props.currentSerial.score && nextProps.currentSerial.score !== this.props.currentSerial.score){
        this.props.history.push('/info');
        window.scrollTo(0, 0);
    }
  }

  moveBackToSeach = () => {
    this.props.history.push('/seach');
    this.props.clearStore();
    this.props.clearSeachInput();
  }

  render() {
    return (
      <Switch>
        <Route path='/seach' component={SeachForm}/>
        <Route path='/list' render={(props) => <SerialsList {...props} moveBack={this.moveBackToSeach}/>}/>
        <Route path='/info' render={(props) => <SerialInfo {...props} moveBack={this.moveBackToSeach}/>}/>
      </Switch>
    );
  };
};

function MSTP (state){
  return {
    TVSerialsList: state.TVSerialsList,
    currentSerial: state.currentSerial,
  };
};

function MDTP (dispatch) {
  return {
      clearStore: function(){
          dispatch(clearSeach());
      },
      clearSeachInput: function(){
          dispatch(clearInput());
      },
      clearError: function(){
        dispatch(clearQueryError());
      }
  };
};

export default withRouter(connect(MSTP, MDTP)(App));