import * as React from 'react';

import {
  DiscoverTvShowsInput,
  DiscoverTvShowsQuery,
  DiscoverTvShowsQueryVariables,
} from 'types/generated';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { DiscoverTvShowsDocument } from 'graphql/queries';
import { useQuery } from '@apollo/client';

type Props = {
  title: string;
  params?: DiscoverTvShowsInput;
  onPress: (tmdbId: number) => () => void;
};

function getFirstAirYear(firstAirDate: String): String {
  return firstAirDate.split('-')[0];
}

function DiscoverTvShows({
  title,
  params,
  onPress,
}: Props): React.ReactElement {
  const { loading, error, data } = useQuery<
    DiscoverTvShowsQuery,
    DiscoverTvShowsQueryVariables
  >(DiscoverTvShowsDocument, {
    variables: {
      params: params || {},
    },
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        {data &&
          data.discoverTvShows.results.map((tvShow) => (
            <TouchableOpacity
              key={tvShow.tmdbId}
              style={styles.item}
              onPress={onPress(tvShow.tmdbId)}>
              <Text>
                {tvShow.tmdbId}. {tvShow.name} (
                {getFirstAirYear(tvShow.firstAirDate)})
              </Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  item: {
    paddingVertical: 4,
  },
});

export default DiscoverTvShows;
