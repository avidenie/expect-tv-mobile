import * as React from 'react';

import { PopularMoviesData, PopularMoviesVars } from 'types/movies';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';

type Props = {
  onPress: (tmdbId: number) => () => void;
};

const GET_POPULAR_MOVIES = gql`
  query getPopularMovies(
    $region: String = "US"
    $language: String = "en"
    $page: Int = 1
  ) {
    popularMovies(region: $region, language: $language, page: $page) {
      results {
        tmdbId
        title
        releaseDate
        images {
          poster
          thumbnail
          logo
        }
      }
      pageInfo {
        page
        totalPages
        totalResults
      }
    }
  }
`;

function getReleaseYear(releaseDate: string): string {
  return releaseDate.split('-')[0];
}

function PopularMovies({ onPress }: Props): React.ReactElement {
  const { loading, error, data } = useQuery<
    PopularMoviesData,
    PopularMoviesVars
  >(GET_POPULAR_MOVIES);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Movies</Text>
      <View>
        {data &&
          data.popularMovies.results.map((movie) => (
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

export default PopularMovies;
