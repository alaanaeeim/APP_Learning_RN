import React from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ArticleScreen from '../screens/ArticleScreen/ArticleScreen';

const Stack = createNativeStackNavigator();

const ArticleStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ArticleScreen" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

export default ArticleStack;
