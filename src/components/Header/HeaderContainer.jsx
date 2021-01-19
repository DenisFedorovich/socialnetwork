import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import Preloader from './../Preloader/Preloader';
import Header from './Header';
import { getAuthUserData, logout } from './../../redux/auth-reducer'
import { connect } from 'react-redux';
import { authAPI } from './../Api/api'


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />
  };
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);

