import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route } from 'react-router-dom';
import Footer from './components/Footer/footer'


const App = () => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />
        <Route path='/profile'
          render={() => <Profile />} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

/*
<Route path='/friends' render={() => <Friends
  state={props.appState.friendsPage} />} />*/