import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route } from 'react-router-dom';
import Footer from './components/Footer/footer';
import UsersContainer from './components/Users/UserContainer';
import LoginPage from './components/Login/Login'


const App = () => {

  return (
    <div className='app-wrapper'>
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
// :userId можем добавять необходимые параметры в урл
// ? показывает, что параметр необязатьный

export default App;

/*
<Route path='/friends' render={() => <Friends
  state={props.appState.friendsPage} />} />*/