import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {useInfiniteQuery} from 'react-query';

const InfinitePageQuery = () => {
  const fetchProjects = ({pageParam = 0}) =>
    fetch('https://jsonplaceholder.typicode.com/todos?_page=' + pageParam).then(
      res => res.json(),
    );

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isError,
  } = useInfiniteQuery('projects', fetchProjects, {
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length > 0 ? allPages.length : null;
      return nextPage;
    },
  });

  console.log('hasNextPage =======> ', hasNextPage)
  const projects = data?.pages.flatMap(page => page);

  return (
    <View>
      <ScrollView>
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
            {projects.map(project => (
              <Text key={project.id}>{project.id} - {project.title}</Text>
            ))}
          </View>
        )}
        <Button
          onPress={() => fetchNextPage()}
          disabled={!hasNextPage || isFetching}
          title={isFetching ? 'Loading...' : 'Load More'}
        />
      </ScrollView>
    </View>
  );
};

export default InfinitePageQuery;
