import React from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddUserScreen from '../screens/AddUserScreen/AddUserScreen';

const Stack = createNativeStackNavigator();

const AddUserStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AddUserScreen" component={AddUserScreen} />
    </Stack.Navigator>
  );
};

export default AddUserStack;
