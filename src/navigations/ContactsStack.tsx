import React from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactsScreen from '../screens/ContactsScreen/ContactsScreen';

const Stack = createNativeStackNavigator();

const ContactsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
    </Stack.Navigator>
  );
};

export default ContactsStack;
