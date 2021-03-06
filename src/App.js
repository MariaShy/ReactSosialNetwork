import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";



const App = (props) => {

  return (
        <div className='app-wrapper'>
          <Header />
          <NavBar />
          <div className='app-wrapper-content'>
            <Route path="/profile" render={ ()=> <Profile
                state={props.state.profilePage}
                addPost={props.addPost}
            /> }/>
            <Route path="/dialogs" render={ ()=> <Dialogs state={props.state.messagesPage} />}  />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </div>
        </div>
  );
}

export default App;
