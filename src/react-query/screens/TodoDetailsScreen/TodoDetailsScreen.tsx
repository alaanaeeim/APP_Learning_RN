import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useQuery, useQueryClient} from 'react-query';
import {getTodo} from '../../Api/Api';

const TodoDetailsScreen = ({route}: any) => {
  const {todoId} = route.params;
  const queryCient = useQueryClient();
  const cachedTodo = queryCient.getQueryData(['Todo', todoId]);

  const {data: Todo, isFetching: FetchingTodo} = useQuery(
    ['Todo', todoId],
    () => getTodo(todoId),
    {
      initialData: cachedTodo,
    },
  );

  useEffect(() => {
    console.log('cachedTodo -------> ', cachedTodo);
  }, []);

  return (
    <View>
      <Text>
        {FetchingTodo ? (
          <Text>Fetching ............ </Text>
        ) : (
          <View>
            <Text>{Todo.title}</Text>
          </View>
        )}
      </Text>
    </View>
  );
};

export default TodoDetailsScreen;
