import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { StyleSheet, css } from 'aphrodite';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';

const style = StyleSheet.create({
  //Styles go here
});

class Dashboard extends Component {
    render(){
      return(
        <div>
          <div>
              <div>
                <h1>Main content goes here </h1>
              </div>
        </div>
      </div>)
    }
}

export default Dashboard;