import {View, StyleSheet} from 'react-native';
import React from 'react';
import AnimationScreen from './src/screens/AnimationScreen/AnimationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AnimationScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
