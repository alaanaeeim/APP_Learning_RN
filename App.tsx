import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import RootStackApp from './src/navigations/RootStackApp';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';

export default function App() {
  const client = new QueryClient();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <QueryClientProvider client={client}>
        <NavigationContainer>
          <RootStackApp />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
