/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const InitialApp = () => {
  return <App />;
};

AppRegistry.registerComponent(appName, () => InitialApp);
