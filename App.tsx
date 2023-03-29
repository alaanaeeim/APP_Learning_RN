import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import RootStackApp from './src/navigations/RootStackApp';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigations/Tabs';

export default function App() {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        {authenticated ? <Tabs /> : <RootStackApp />}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
