import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, withRouter } from 'react-router-dom';
import Footer from './components/Footer/footer';
import UsersContainer from './components/Users/UserContainer';
import LoginPage from './components/Login/Login'
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp }  from './redux/app-reducer'
import Preloader from './components/Preloader/Preloader';

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper' >
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
            render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?'
            render={() => <ProfileContainer />} />
          <Route path='/users'
            render={() => <UsersContainer />} />
          <Route path='/login'
            render={() => <LoginPage />} />
        </div>
        <Footer />
      </div>
    );
  }
}
// :userId можем добавять необходимые параметры в урл
// ? показывает, что параметр необязатьный


const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

/*
<Route path='/friends' render={() => <Friends
  state={props.appState.friendsPage} />} />*/