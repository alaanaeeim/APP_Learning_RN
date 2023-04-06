import {View, Text} from 'react-native';
import React from 'react';
import {useIsFetching} from 'react-query';

const GeneralFetchingData = () => {
  const isFetching = useIsFetching();

  return isFetching ? (
    <View>
      <Text>Fetching Data</Text>
    </View>
  ) : null;
};

export default GeneralFetchingData;
