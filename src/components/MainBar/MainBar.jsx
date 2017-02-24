import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { authenticateUser, logoutUser, fetchUserSession } from '../../action/authenticated';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
        <FlatButton 
        {...this.props}
        label="Login" />
    );
  }
}

class MainBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        logged: false
    };
  }

  componentWillMount() {
    this.props.userSession();
  }

  render() {
    let self = this;
    
    // Login user
    this.userLogIn = () => {
      this.props.authUser();
    }

    // Logout user
    this.destroySession = () => {
      this.props.logout();
      browserHistory.push('/');
    }

    return (
      <div>
        <AppBar
        title="App"
        iconElementRight={this.props.logged ?   
          <IconMenu
            iconButtonElement={
              <IconButton
                tooltip="me" touch={true} tooltipPosition="bottom-right" style={{padding: '0'}}>
                <Avatar
                    src={self.props.avatar}
                    size={45}
                />
              </IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
            <MenuItem primaryText="Profile"  onClick={() => browserHistory.push('/Profile')} />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" onClick={this.destroySession}/>
          </IconMenu> : 
        <Login onClick={this.userLogIn}  />}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logged: state.authenticated.logged,
    username: state.authenticated.user.name,
    avatar: state.authenticated.user.avatar_url,
    hasErrored: state.authenticated.hasErrored,
    isLoading: state.authenticated.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: () => dispatch(authenticateUser()),
    logout: () => dispatch(logoutUser()),
    userSession: () => dispatch(fetchUserSession())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBar);