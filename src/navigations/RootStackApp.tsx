import React from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodosScreen from '../react-query/screens/TodosScreen/TodosScreen';
import TodoDetailsScreen from '../react-query/screens/TodoDetailsScreen/TodoDetailsScreen';

const Stack = createNativeStackNavigator();

const RootStackApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Todos" component={TodosScreen} />
      <Stack.Screen name="Todo" component={TodoDetailsScreen} />
    </Stack.Navigator>
  );
};

export default RootStackApp;
