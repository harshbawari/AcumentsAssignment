import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const store = ConfigureStore();

    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
