import React, { Component } from 'react';

import { Wrapper } from './styles';
import Login from '../Login';
import Register from '../Register';
import ForgottenPassword from '../ForgottenPassword';
import Mainpage from '../MainPage';

class App extends Component {
  constructor(props) {
    super(props);
    // set initial state values
    this.state = {
      message: '',
      loggedIn: false,
      registering: false,
      forgottenPassword: false,
      activeUserId: '',
      activeUserName: '',
      savedUsers: [],
      dontSave: false,
    };
  }

  componentDidMount() {
    // load array of saved users from local storage
    const savedUsers = JSON.parse(localStorage.getItem('savedUsers')) || [];

    // save array from local storage to state
    this.setState({ savedUsers });

    // log the imported array of saved users to the console (dev purposes)
    console.log('Saved Users: ');
    console.log(savedUsers);

    // add event listener to handle "enter" key presses
    document.addEventListener('keydown', this.onKeyDown);

    // add event listener to handle data saving when exiting the app
    window.addEventListener('beforeunload', this.onBeforeUnload);
  }

  componentWillUnmount() {
    // regardless of how the app exits, run the "before unload" function
    this.onBeforeUnload();

    // remove keyboard listener
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onBeforeUnload = () => {
    // get saved users state for storage to local storage
    const { savedUsers } = this.state;

    // stringify saved users and port it to local storage
    localStorage.setItem('savedUsers', JSON.stringify(savedUsers));

    // remove unload event listener
    window.removeEventListener('beforeunload', this.onBeforeUnload);
  };

  // function to update app state loggedIn from components
  onLoginUpdate = (loggedIn) => {
    this.setState({ loggedIn });
  };

  // function to update app state registering from components
  onRegisteringUpdate = (registering) => {
    this.setState({ registering });
  };

  // function to update app state activeUserId from components
  onActiveUserIdUpdate = (activeUserId) => {
    this.setState({ activeUserId });
  };

  // function to update app statesavedUsers from components
  onSavedUsersUpdate = (savedUsers) => {
    this.setState({ savedUsers });
  };

  // function to update app state forgottenPassword from components
  onForgottenPasswordUpdate = (forgottenPassword) => {
    this.setState({ forgottenPassword });
  };

  // function to update app state message from components
  onMessageUpdate = (message) => {
    this.setState({ message });
  };

  // function to update app state activeUserName from components
  onActiveUserNameUpdate = (activeUserName) => {
    this.setState({ activeUserName });
  };

  // function to delete local storage memory (only during DEV)
  deleteMemory = () => {
    this.setState({
      message: '',
      loggedIn: false,
      registering: false,
      forgottenPassword: false,
      activeUserId: '',
      activeUserName: '',
      savedUsers: [],
      dontSave: true,
    });
    localStorage.clear();
  };

  render() {
    // grab relevant state variables
    const {
      savedUsers,
      loggedIn,
      registering,
      forgottenPassword,
      message,
      activeUserName,
      activeUserId,
      dontSave,
    } = this.state;

    // render return
    return (
      <Wrapper>
        {/* Title */}
        <header>
          <h1>Custom Spellbook Generator</h1>
        </header>

        {/* Message  */}
        <h3 className="message">{message}</h3>

        {/* Login Component */}
        {!loggedIn && !registering && !forgottenPassword && (
          <Login
            savedUsers={savedUsers}
            onActiveUserIdUpdate={this.onActiveUserIdUpdate}
            onActiveUserNameUpdate={this.onActiveUserNameUpdate}
            onForgottenPasswordUpdate={this.onForgottenPasswordUpdate}
            onLoginUpdate={this.onLoginUpdate}
            onMessageUpdate={this.onMessageUpdate}
            onRegisteringUpdate={this.onRegisteringUpdate}
            onSavedUsersUpdate={this.onSavedUsersUpdate}
          />
        )}

        {/* Component used to register users */}
        {registering && !forgottenPassword && !loggedIn && (
          <Register
            savedUsers={savedUsers}
            onMessageUpdate={this.onMessageUpdate}
            onRegisteringUpdate={this.onRegisteringUpdate}
            onSavedUsersUpdate={this.onSavedUsersUpdate}
          />
        )}

        {/* Component used to change passwords */}
        {forgottenPassword && !loggedIn && !registering && (
          <ForgottenPassword
            savedUsers={savedUsers}
            onForgottenPasswordUpdate={this.onForgottenPasswordUpdate}
            onMessageUpdate={this.onMessageUpdate}
            onSavedUsersUpdate={this.onSavedUsersUpdate}
          />
        )}

        {/* Component where spells are displayed / added / deleted / modified */}
        {loggedIn && (
          <Mainpage
            activeUserId={activeUserId}
            activeUserName={activeUserName}
            dontSave={dontSave}
            onMessageUpdate={this.onMessageUpdate}
          />
        )}

        {/* delete all memory button (dev only) */}
        <button type="button" onClick={this.deleteMemory}>
          Clear All Memory
        </button>
      </Wrapper>
    );
  }
}

export default App;
