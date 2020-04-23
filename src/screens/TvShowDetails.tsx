import * as React from 'react';

import { ScrollView, StyleSheet, Text } from 'react-native';
import { TvShowDetailsData, TvShowDetailsVariables } from 'types/tvShows';
import { gql, useQuery } from '@apollo/client';

import { Props } from 'routes/DefaultStack';
import RecommendedTvShows from 'components/RecommendedTvShows';
import SimilarTvShows from 'components/SimilarTvShows';

const GET_TV_SHOW_DETAILS = gql`
  query getTvShowDetails($tmdbId: Int!, $language: String = "en") {
    tvShowDetails(tmdbId: $tmdbId, language: $language) {
      tmdbId
      name
      originalName
      originalLanguage
      firstAirDate
      images {
        poster
        thumbnail
        logo
        backgrounds(limit: 1)
      }
      overview
      genres {
        name
      }
      runtime
      rating {
        voteAverage
        voteCount
      }
      createdBy {
        name
      }
      type
      inProduction
      status
    }
  }
`;

function getFirstAirYear(firstAirDate: string): string {
  return firstAirDate.split('-')[0];
}

function formatRuntime(runtime: number): string {
  if (runtime <= 60) {
    return `${runtime} min`;
  }

  const hours = Math.floor(runtime / 60);
  const min = runtime - hours * 60;

  if (min > 0) {
    return `${hours}h ${min}min`;
  } else {
    return `${hours}h`;
  }
}

function TvShowDetails({ route }: Props<'TvShowDetails'>): React.ReactElement {
  const { tmdbId } = route.params;

  const { loading, error, data } = useQuery<
    TvShowDetailsData,
    TvShowDetailsVariables
  >(GET_TV_SHOW_DETAILS, {
    variables: {
      tmdbId,
    },
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  const { tvShowDetails } = data!;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.row}>ID: #{tmdbId}</Text>
      <Text style={styles.row}>
        Name: {tvShowDetails.name} (
        {getFirstAirYear(tvShowDetails.firstAirDate)})
      </Text>
      {tvShowDetails.originalName && (
        <Text style={styles.row}>
          Original Name: {tvShowDetails.originalName} (
          {tvShowDetails.originalLanguage})
        </Text>
      )}
      <Text style={styles.row}>
        First Air Date: {tvShowDetails.firstAirDate}
      </Text>
      <Text style={styles.row}>Overview: {tvShowDetails.overview}</Text>
      <Text style={styles.row}>
        Genres: {tvShowDetails.genres.map((genre) => genre.name).join(', ')}
      </Text>
      <Text style={styles.row}>
        Runtime: {tvShowDetails.runtime.map(formatRuntime).join(', ')}
      </Text>
      <Text style={styles.row}>
        Rating: {tvShowDetails.rating.voteAverage} of{' '}
        {tvShowDetails.rating.voteCount} votes
      </Text>
      {tvShowDetails.createdBy.length > 0 && (
        <Text style={styles.row}>
          Created By:{' '}
          {tvShowDetails.createdBy
            .map((createdBy) => createdBy.name)
            .join(', ')}
        </Text>
      )}
      <Text style={styles.row}>
        In Production: {tvShowDetails.inProduction ? 'Yes' : 'No'}
      </Text>
      <Text style={styles.row}>Type: {tvShowDetails.type}</Text>
      <Text style={styles.row}>Status: {tvShowDetails.status}</Text>
      <RecommendedTvShows tmdbId={tmdbId} />
      <SimilarTvShows tmdbId={tmdbId} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  row: {
    paddingVertical: 4,
  },
});

export default TvShowDetails;
