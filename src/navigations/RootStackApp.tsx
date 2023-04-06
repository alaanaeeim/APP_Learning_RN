import React from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodosScreen from '../react-query/screens/TodosScreen/TodosScreen';
import TodoDetailsScreen from '../react-query/screens/TodoDetailsScreen/TodoDetailsScreen';
import TestQueries from '../screens/testQueries/TestQueries';
import HomeScreenTest from '../screens/HomeScreenTest/HomeScreenTest';
import PaginatedTodosScreen from '../react-query/screens/PaginatedTodosScreen/PaginatedTodosScreen';
import InfinitePageQuery from '../react-query/screens/InfinitePageQuery/InfinitePageQuery';

const Stack = createNativeStackNavigator();

const RootStackApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreenTest" component={HomeScreenTest} />
      <Stack.Screen name="Todos" component={TodosScreen} />
      <Stack.Screen name="Todo" component={TodoDetailsScreen} />
      <Stack.Screen name="TestQueries" component={TestQueries} />
      <Stack.Screen name="InfinitePageQuery" component={InfinitePageQuery} />
      <Stack.Screen
        name="PaginatedTodosScreen"
        component={PaginatedTodosScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStackApp;
