import './App.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {connect} from 'react-redux'
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import {initializeApp} from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloader';
class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }
  
  render() {
    if(!this.props.initialized) {
      return <Preloader/>
    }

        return (
        <BrowserRouter>
          <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">

              <Route path="/profile/:userId?" render={ () => 
                <ProfileContainer  />}/>

              <Route path="/dialogs" render={() => 
                <DialogsContainer />}/>
              <Route path="/users" render={() => 
              <UsersContainer/> }/>
                <Route path="/login" render={() => 
              <Login/> }/>
            </div>
          </div>
        </BrowserRouter>
        
      );
  }
}

const mstp = (state) => {
  return {
    initialized: state.app.initialized
  }
}
export default compose(
  withRouter,
  connect(mstp, {initializeApp})
)(App)
