import {View, StyleSheet} from 'react-native';
import React from 'react';
import FormikScreen from './src/screens/FormikScreen/FormikScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <FormikScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
