import React from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AlbumScreen from '../screens/AlbumSscreen/AlbumSscreen';

const Stack = createNativeStackNavigator();

const AlbumStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={AlbumScreen} />
    </Stack.Navigator>
  );
};

export default AlbumStack;
