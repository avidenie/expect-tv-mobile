import * as React from 'react';

import { SimilarTvShowsData, SimilarTvShowsVars } from 'types/tvShows';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';

import { NavigationProp } from 'routes/DefaultStack';
import { useNavigation } from '@react-navigation/native';

const GET_SIMILAR_TV_SHOWS = gql`
  query getSimilarTvShows(
    $tmdbId: Int!
    $language: String = "en"
    $page: Int = 1
  ) {
    similarTvShows(tmdbId: $tmdbId, language: $language, page: $page) {
      results {
        tmdbId
        name
        firstAirDate
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

type Props = {
  tmdbId: number;
};

function getReleaseYear(firstAirDate: string): string {
  return firstAirDate.split('-')[0];
}

function SimilarTvShows({ tmdbId }: Props): React.ReactElement {
  const navigation = useNavigation<NavigationProp<'TvShowDetails'>>();
  const { loading, error, data } = useQuery<
    SimilarTvShowsData,
    SimilarTvShowsVars
  >(GET_SIMILAR_TV_SHOWS, { variables: { tmdbId } });

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
