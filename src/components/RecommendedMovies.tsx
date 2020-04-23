import * as React from 'react';

import { MOVIE_OVERVIEW_FIELDS, PAGE_INFO_FIELDS } from 'graphql/fragments';
import {
  RecommendedMoviesData,
  RecommendedMoviesVariables,
} from 'types/movies';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';

import { NavigationProp } from 'routes/DefaultStack';
import { useNavigation } from '@react-navigation/native';

const GET_RECOMMENDED_MOVIES = gql`
  query getRecommendedMovies(
    $tmdbId: Int!
    $language: String = "en"
    $page: Int = 1
  ) {
    recommendedMovies(tmdbId: $tmdbId, language: $language, page: $page) {
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

type Props = {
  tmdbId: number;
};

function RecommendedMovies({ tmdbId }: Props): React.ReactElement {
  const navigation = useNavigation<NavigationProp<'MovieDetails'>>();
  const { loading, error, data } = useQuery<
    RecommendedMoviesData,
    RecommendedMoviesVariables
  >(GET_RECOMMENDED_MOVIES, { variables: { tmdbId } });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Movies</Text>
      <View>
        {data &&
          data.recommendedMovies.results.map((movie) => (
            <TouchableOpacity
              key={movie.tmdbId}
              style={styles.item}
              onPress={() =>
                navigation.push('MovieDetails', { tmdbId: movie.tmdbId })
              }>
              <Text>
                {movie.tmdbId}. {movie.title}
              </Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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

export default RecommendedMovies;
