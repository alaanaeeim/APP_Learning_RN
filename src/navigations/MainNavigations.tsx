import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Products from '../screens/Products/Products';
import ProductDetails from '../screens/Products/ProductDetails';
import CartScreen from '../screens/Products/CartScreen';

const MainNavigations = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: '#141E30',
          },
          headerTitleStyle: {
            color: '#FFFFFF',
            fontSize: 18,
          },
        }}>
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigations;

//   options={({navigation}) => ({
// presentation: 'modal',
//   })}
