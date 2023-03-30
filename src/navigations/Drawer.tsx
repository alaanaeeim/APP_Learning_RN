/* eslint-disable react-native/no-inline-styles */
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../components/CustomDrawer';
import {Dimensions} from 'react-native';
import ArticleStack from './ArticleStack';
import ChatStack from './ChatStack';
import ContactsStack from './ContactsStack';
import AlbumStack from './Albums';

const Drawer = createDrawerNavigator();
const {width} = Dimensions.get('window');

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={({navigation}) => ({
        drawerStyle: {width: width * 0.6},
        drawerType: 'slide',
        drawerStatusBarAnimation: 'slide',
        drawerItemStyle: {borderRadius: 5, width: width * 0.5},
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 16,
        },
        headerLeft: () => (
          <Ionicons
            name="list-outline"
            size={25}
            color="blue"
            style={{marginHorizontal: 10}}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      })}>
      <Drawer.Screen
        name="Article"
        component={ArticleStack}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Chat"
        component={ChatStack}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contacts"
        component={ContactsStack}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Albums"
        component={AlbumStack}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
