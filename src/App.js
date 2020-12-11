import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom'

const App = ({dialogsData, messagesData, postData}) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path="/profile" render={ () => <Profile postData={postData}/>}/>
          <Route path="/dialogs" render={() => <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
