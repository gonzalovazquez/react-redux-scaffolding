import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { fetchUserSession } from '../../action/authenticated';
import Toggle from 'material-ui/Toggle';

let imgUrl = 'https://app.itsquiz.com/be/static/images/backgrounds/6.jpg';

const style = StyleSheet.create({
  header: {
    paddingLeft: '0',
    background: 'url(' + imgUrl + ') center center / cover' ,
  },
  headerTitle: {
    paddingBottom: '25px',
    '@media only screen and (max-width: 992px)': {
      fontSize: '36px',
    },
    '@media only screen and (min-width: 993px)': {
      fontSize: '48px',
    },
  },
  container: {
    paddingBottom: '6px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  paperBg: {
    height: '100',
    width: '100',
    margin: '20',
    textAlign: 'center',
    display: 'inline-block'
  },
  avatar: {
    marginTop: '35px',
    height: '150px',
    borderRadius: '50%',
  },
  tc: {
    textAlign: 'center'
  }
});

class Profile extends Component {
    constructor(props){
      super(props);
    }
    componentWillMount() {
      this.props.userSession();
    }
    render() {
      return (
        <div>
          <header className={css(style.header)}>
            <div className={css(style.tc)}>
              <img src={this.props.avatar} className={css(style.avatar)} />
              <h1 className={`flow-text white-text ${css(style.headerTitle)}`}>{this.props.username}</h1>
            </div>
          </header>
          <div className="container">
            <div className="row">
              <div className="col s12">
                <p> Permission coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    username: state.authenticated.user.name,
    avatar: state.authenticated.user.avatar_url
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSession: () => dispatch(fetchUserSession())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
