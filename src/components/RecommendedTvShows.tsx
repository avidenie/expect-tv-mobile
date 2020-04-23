import * as React from 'react';

import { PAGE_INFO_FIELDS, TV_SHOW_OVERVIEW_FIELDS } from 'graphql/fragments';
import {
  RecommendedTvShowsData,
  RecommendedTvShowsVariables,
} from 'types/tvShows';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';

import { NavigationProp } from 'routes/DefaultStack';
import { useNavigation } from '@react-navigation/native';

const GET_RECOMMENDED_TV_SHOWS = gql`
  query getRecommendedTvShows(
    $tmdbId: Int!
    $language: String = "en"
    $page: Int = 1
  ) {
    recommendedTvShows(tmdbId: $tmdbId, language: $language, page: $page) {
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

type Props = {
  tmdbId: number;
};

function getReleaseYear(firstAirDate: string): string {
  return firstAirDate.split('-')[0];
}

function RecommendedTvShows({ tmdbId }: Props): React.ReactElement {
  const navigation = useNavigation<NavigationProp<'TvShowDetails'>>();
  const { loading, error, data } = useQuery<
    RecommendedTvShowsData,
    RecommendedTvShowsVariables
  >(GET_RECOMMENDED_TV_SHOWS, { variables: { tmdbId } });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended TV Shows</Text>
      <View>
        {data &&
          data.recommendedTvShows.results.map((tvShow) => (
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

export default RecommendedTvShows;
