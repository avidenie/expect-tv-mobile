import * as React from 'react';

import {
  DiscoverTvShowsData,
  DiscoverTvShowsParams,
  DiscoverTvShowsVariables,
} from 'types/tvShows';
import { PAGE_INFO_FIELDS, TV_SHOW_OVERVIEW_FIELDS } from 'graphql/fragments';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';

type Props = {
  title: string;
  params?: DiscoverTvShowsParams;
  onPress: (tmdbId: number) => () => void;
};

const DISCOVER_TV_SHOWS_QUERIES = gql`
  query discoverTvShows($params: DiscoverTvShowsInput!) {
    discoverTvShows(params: $params) {
      results {
        ...tvShowOverviewFields
      }
      pageInfo {
        ...pageInfoFields
      }
    }
  }
  ${TV_SHOW_OVERVIEW_FIELDS}
  ${PAGE_INFO_FIELDS}
`;

function getFirstAirYear(firstAirDate: String): String {
  return firstAirDate.split('-')[0];
}

function DiscoverTvShows({
  title,
  params,
  onPress,
}: Props): React.ReactElement {
  const { loading, error, data } = useQuery<
    DiscoverTvShowsData,
    DiscoverTvShowsVariables
  >(DISCOVER_TV_SHOWS_QUERIES, {
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
