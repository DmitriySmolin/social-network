import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import { RootStateType, ActionsTypes } from './redux/state';

type PropsType = {
  appState: RootStateType;
  dispatch: (action: ActionsTypes) => void;
};

const App: React.FC<PropsType> = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => <Profile state={props.appState.profilePage} dispatch={props.dispatch} />}
        />
        <Route path="/dialogs" render={() => <Dialogs state={props.appState.dialogsPage} />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
