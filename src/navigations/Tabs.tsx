/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ArticleStack from './ArticleStack';
import ChatStack from './ChatStack';
import ContactsStack from './ContactsStack';
import AlbumStack from './Albums';
import {StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AddUserStack from './AddUserStack';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Article"
        component={ArticleStack}
        listeners={{
          tabPress: () => {
            console.log('Press on Article');
          },
        }}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <Text style={[styles.title, {color: focused ? 'blue' : 'grey'}]}>
                Article
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <MaterialIcons
                name="article"
                size={24}
                color={focused ? 'blue' : 'grey'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStack}
        listeners={{
          tabPress: () => {
            console.log('Press on Article');
          },
        }}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <Text style={[styles.title, {color: focused ? 'blue' : 'grey'}]}>
                Chat
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <Entypo name="chat" size={24} color={focused ? 'blue' : 'grey'} />
            );
          },
        }}
      />

      <Tab.Screen
        name="HomeScreen"
        component={AddUserStack}
        listeners={{
          tabPress: () => {
            console.log('Press on Article');
          },
        }}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <Text style={[styles.title, {color: focused ? 'blue' : 'grey'}]}>
                Add
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.homeIcon}>
                <MaterialIcons
                  name="add"
                  size={30}
                  color={focused ? 'blue' : 'purple'}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Contacts"
        component={ContactsStack}
        listeners={{
          tabPress: () => {
            console.log('Press on Article');
          },
        }}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <Text style={[styles.title, {color: focused ? 'blue' : 'grey'}]}>
                Contacts
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <MaterialIcons
                name="contacts"
                size={24}
                color={focused ? 'blue' : 'grey'}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Albums"
        component={AlbumStack}
        listeners={{
          tabPress: () => {
            console.log('Press on Article');
          },
        }}
        options={{
          tabBarLabel: ({focused}) => {
            return (
              <Text style={[styles.title, {color: focused ? 'blue' : 'grey'}]}>
                Albums
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <MaterialIcons
                name="book"
                size={24}
                color={focused ? 'blue' : 'grey'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 10,
    fontWeight: '500',
  },
  homeIcon: {
    position: 'absolute',
    backgroundColor: 'orange',
    top: -12,
    width: 35,
    height: 35,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
