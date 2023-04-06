import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const HomeScreenTest = ({navigation}: any) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Todos')}>
        <Text style={styles.title}>Todos Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('TestQueries')}>
        <Text style={styles.title}>Test Queries Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('PaginatedTodosScreen')}>
        <Text style={styles.title}>Paginated Todos Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('InfinitePageQuery')}>
        <Text style={styles.title}>Infinite Todos Screen</Text>
      </TouchableOpacity>

      
    </View>
  );
};

export default HomeScreenTest;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#09203F',
    margin: 10,
    padding: 10,
    width: '50%',
    borderRadius: 5,
  },
  title: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
  },
});
