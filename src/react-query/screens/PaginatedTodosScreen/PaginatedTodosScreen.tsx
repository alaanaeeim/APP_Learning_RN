import React from 'react';
import {View, Text, Button} from 'react-native';
import {useQuery} from 'react-query';

const PaginatedTodosScreen = () => {
  const [page, setPage] = React.useState(1);

  const fetchProjects = (page = 0) =>
    fetch('https://jsonplaceholder.typicode.com/todos?_page=' + page).then(
      res => res.json(),
    );

  const {isLoading, isError, error, data, isFetching, isPreviousData} =
    useQuery(['projects', page], () => fetchProjects(page), {
      keepPreviousData: true,
    });

  return (
    <View>
      {isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : isError ? (
        <View>
          <Text>Error: {error.message}</Text>
        </View>
      ) : (
        <View>
          {data.map(project => (
            <Text key={project.id}>{project.title}</Text>
          ))}
        </View>
      )}
      <Text>Current Page: {page + 1}</Text>
      <Button
        onPress={() => setPage(old => old - 1)}
        disabled={page === 0}
        title="Previous Page"
      />
      <Button
        onPress={() => {
          if (!isPreviousData) {
            setPage(old => old + 1);
          }
        }}
        title="Next Page"
        // disabled={isPreviousData || !data?.hasMore}
      />
      {isFetching ? <Text> Loading...</Text> : null}
    </View>
  );
};

export default PaginatedTodosScreen;
