import {View, StyleSheet} from 'react-native';
import React from 'react';
import QuestionsBoard from './src/screens/QuestionsBoard/QuestionsBoard';

export default function App() {
  return (
    <View style={styles.container}>
      <QuestionsBoard />
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
