import * as React from 'react';

import {
  SimilarMoviesQuery,
  SimilarMoviesQueryVariables,
} from 'types/generated';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NavigationProp } from 'routes/DefaultStack';
import { SimilarMoviesDocument } from 'graphql/queries';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@apollo/client';

type Props = {
  tmdbId: number;
};

function SimilarMovies({ tmdbId }: Props): React.ReactElement {
  const navigation = useNavigation<NavigationProp<'MovieDetails'>>();
  const { loading, error, data } = useQuery<
    SimilarMoviesQuery,
    SimilarMoviesQueryVariables
  >(SimilarMoviesDocument, { variables: { tmdbId } });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Similar Movies</Text>
      <View>
        {data &&
          data.similarMovies.results.map((movie) => (
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

export default SimilarMovies;
