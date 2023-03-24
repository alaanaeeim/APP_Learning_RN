import React from 'react';
import {StatusBar} from 'react-native';
import MainNavigations from './src/navigations/MainNavigations';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <MainNavigations />
    </>
  );
}
