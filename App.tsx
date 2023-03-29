import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Learning App</Text>
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
