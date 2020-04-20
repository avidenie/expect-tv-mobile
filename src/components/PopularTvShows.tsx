import * as React from 'react';

import { PopularTvShowsData, PopularTvShowsVars } from 'types/tvShows';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';

const GET_POPULAR_TV_SHOWS = gql`
  query getPopularTvShows(
    $region: String = "US"
    $language: String = "en"
    $page: Int = 1
  ) {
    popularTvShows(region: $region, language: $language, page: $page) {
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
  onPress: (tmdbId: number) => () => void;
};

function getReleaseYear(firstAirDate: string): string {
  return firstAirDate.split('-')[0];
}

function PopularTvShows({ onPress }: Props): React.ReactElement {
  const { loading, error, data } = useQuery<
    PopularTvShowsData,
    PopularTvShowsVars
  >(GET_POPULAR_TV_SHOWS);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular TV Shows</Text>
      <View>
        {data &&
          data.popularTvShows.results.map((tvShow) => (
            <TouchableOpacity
              key={tvShow.tmdbId}
              style={styles.item}
              onPress={onPress(tvShow.tmdbId)}>
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
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  item: {
    paddingVertical: 2,
  },
});

export default PopularTvShows;
