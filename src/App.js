import React, { Component } from 'react';
import Main from './components/Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { balance } from './shared/BankBalance';

export default class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const store = createStore(balance);

    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
