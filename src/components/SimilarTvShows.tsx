import * as React from 'react';

import {
  SimilarTvShowsQuery,
  SimilarTvShowsQueryVariables,
} from 'types/generated';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NavigationProp } from 'routes/DefaultStack';
import { SimilarTvShowsDocument } from 'graphql/queries';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@apollo/client';

type Props = {
  tmdbId: number;
};

function getReleaseYear(firstAirDate: string): string {
  return firstAirDate.split('-')[0];
}

function SimilarTvShows({ tmdbId }: Props): React.ReactElement {
  const navigation = useNavigation<NavigationProp<'TvShowDetails'>>();
  const { loading, error, data } = useQuery<
    SimilarTvShowsQuery,
    SimilarTvShowsQueryVariables
  >(SimilarTvShowsDocument, { variables: { tmdbId } });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Similar TV Shows</Text>
      <View>
        {data &&
          data.similarTvShows.results.map((tvShow) => (
            <TouchableOpacity
              key={tvShow.tmdbId}
              style={styles.item}
              onPress={() =>
                navigation.push('TvShowDetails', { tmdbId: tvShow.tmdbId })
              }>
              <Text>
                {tvShow.tmdbId}. {tvShow.name} (
                {getReleaseYear(tvShow.firstAirDate)})
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

export default SimilarTvShows;
