import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  counterState,
  decrement,
  increment,
  incrementByAmount,
} from './src/store/CounterSlice';
import {AppDispatch, RootState} from './src/store/store';

export default function App() {
  const dispatch: AppDispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);
  const counterState2 = useSelector(counterState);

  return (
    <View style={styles.container}>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button
        title="Increment By 10"
        onPress={() => dispatch(incrementByAmount(10))}
      />
      <Text>{counter.value}</Text>
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button
        title="Decrement By 10"
        onPress={() => dispatch(incrementByAmount(-10))}
      />

      <Text>counterState : {counterState2}</Text>
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
