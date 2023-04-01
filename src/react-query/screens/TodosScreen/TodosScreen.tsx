import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useQuery, useQueryClient} from 'react-query';
import {FlatList} from 'react-native-gesture-handler';
import {getAllTodos} from '../../Api/Api';

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: string;
}

const TodosScreen = ({navigation}: any) => {
  const query_client = useQueryClient();

  const {data, isFetching, refetch} = useQuery(['Users'], () => getAllTodos(), {
    staleTime: Infinity,
  });

  const navigateAndCacheData = (item: ITodo) => {
    console.log(item);
    query_client.setQueryData(['Todo', item.id], item);
    navigation.navigate('Todo', {todoId: item.id});
  };

  return (
    <View style={styles.container}>
      {isFetching ? (
        <Text>Fetching Data ........</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          onRefresh={() => refetch()}
          onEndReached={() => refetch()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.todo}
              onPress={() => navigateAndCacheData(item)}>
              <View style={styles.todoIdContainer}>
                <Text style={styles.todoId}>{item.id}</Text>
              </View>
              <Text style={styles.todoTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  todo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
    backgroundColor: '#4A586E',
    marginVertical: 5,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  todoIdContainer: {
    width: 25,
    height: 25,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginEnd: 10,
  },
  todoId: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  todoTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default TodosScreen;
