import * as React from 'react';

import {
  DiscoverMoviesData,
  DiscoverMoviesParams,
  DiscoverMoviesVariables,
} from 'types/movies';
import { MOVIE_OVERVIEW_FIELDS, PAGE_INFO_FIELDS } from 'graphql/fragments';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';

type Props = {
  title: string;
  params?: DiscoverMoviesParams;
  onPress: (tmdbId: number) => () => void;
};

const DISCOVER_MOVIES_QUERY = gql`
  query discoverMovies($params: DiscoverMoviesInput!) {
    discoverMovies(params: $params) {
      results {
        ...movieOverviewFields
      }
      pageInfo {
        ...pageInfoFields
      }
    }
  }
  ${MOVIE_OVERVIEW_FIELDS}
  ${PAGE_INFO_FIELDS}
`;

function getReleaseYear(releaseDate: String): String {
  return releaseDate.split('-')[0];
}

function DiscoverMovies({ title, params, onPress }: Props): React.ReactElement {
  const { loading, error, data } = useQuery<
    DiscoverMoviesData,
    DiscoverMoviesVariables
  >(DISCOVER_MOVIES_QUERY, {
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
          data.discoverMovies.results.map((movie) => (
            <TouchableOpacity
              key={movie.tmdbId}
              style={styles.item}
              onPress={onPress(movie.tmdbId)}>
              <Text>
                {movie.tmdbId}. {movie.title} (
                {getReleaseYear(movie.releaseDate)})
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

export default DiscoverMovies;
