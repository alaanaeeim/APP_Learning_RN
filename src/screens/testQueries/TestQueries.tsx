import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {useQueries, useQuery} from 'react-query';
import axios from 'axios';
import GeneralFetchingData from '../../react-query/utils/GeneralFetchingData';

const TestQueries = () => {
  const getTodoByID = async (toDoID: number) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${toDoID}`,
    );
    return res.data;
  };

  const query = useQueries([
    {
      queryKey: ['Todo', 1],
      queryFn: () => getTodoByID(1),
    },
    {
      queryKey: ['Todo', 2],
      queryFn: () => getTodoByID(2),
    },
  ]);

  const {isIdle, isLoading, isError, data, error, refetch, isFetching} =
    useQuery('todos', () => getTodoByID(1), {
      enabled: false,
    });

  // if (query[0]?.isFetching) {
  //   return (
  //     <View>
  //       <Text>Fetching Data</Text>
  //     </View>
  //   );
  // }

  return (
    <>
      <Button title="Fetch Todos" onPress={() => refetch()} />

      {isIdle ? (
        <Text>'Not ready...'</Text>
      ) : isLoading ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <>
          <View>
            <Text key={data.id}>{data.title}</Text>
          </View>
          <View>
            {isFetching ? <Text>'Fetching...'</Text> : <Text>Empty</Text>}
          </View>
        </>
      )}
    </>
  );

  // return (
  //   <View style={styles.container}>
  //     <Text>Todos</Text>
  //     <GeneralFetchingData />
  //     {query.map(todo => (
  //       <View style={styles.todo} key={todo?.data?.id}>
  //         <Text>{todo?.data?.id} - </Text>
  //         <Text>{todo?.data?.title}</Text>
  //       </View>
  //     ))}
  //   </View>
  // );
};

export default TestQueries;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  todo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#b2b2',
    padding: 10,
    marginVertical: 5,
  },
});
