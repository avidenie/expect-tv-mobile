import * as React from 'react';

import {
  MovieDetailsData,
  MovieDetailsVars,
  RegionReleaseDate,
} from 'types/movies';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { gql, useQuery } from '@apollo/client';

import { Props } from 'routes/DefaultStack';
import SimilarMovies from 'components/SimilarMovies';

const GET_MOVIE_DETAILS = gql`
  query getMovieDetails(
    $tmdbId: Int!
    $language: String = "en"
    $region: String = "US"
  ) {
    movieDetails(tmdbId: $tmdbId, language: $language) {
      tmdbId
      title
      originalTitle
      originalLanguage
      releaseDate
      images {
        poster
        thumbnail
        logo
        backgrounds(limit: 1)
      }
      tagline
      overview
      genres {
        name
      }
      runtime
      rating {
        voteAverage
        voteCount
      }
      releaseDates(region: $region) {
        region
        results {
          releaseDate
          certification
          type
        }
      }
      credits {
        directors {
          id
          name
        }
        writers {
          id
          name
          job
        }
        cast {
          id
          name
          character
        }
      }
    }
  }
`;

function getCertification(releaseDates: RegionReleaseDate[]): string {
  console.log(releaseDates);
  for (let i = 0, n = releaseDates.length; i <= n; i++) {
    const releaseDate = releaseDates[i].results.find(
      (date) => date.certification !== '',
    );
    if (releaseDate) {
      return releaseDate.certification;
    }
  }
  return 'Unrated';
}

function getReleaseYear(primaryReleaseDate: string): string {
  return primaryReleaseDate.split('-')[0];
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

function MovieDetails({ route }: Props<'MovieDetails'>): React.ReactElement {
  const { tmdbId } = route.params;

  const { loading, error, data } = useQuery<MovieDetailsData, MovieDetailsVars>(
    GET_MOVIE_DETAILS,
    {
      variables: {
        tmdbId,
      },
    },
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  const { movieDetails } = data!;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.row}>ID: #{tmdbId}</Text>
      <Text style={styles.row}>
        Title: {movieDetails.title} ({getReleaseYear(movieDetails.releaseDate)})
      </Text>
      {movieDetails.originalTitle && (
        <Text style={styles.row}>
          Original Title: {movieDetails.originalTitle} (
          {movieDetails.originalLanguage})
        </Text>
      )}
      <Text style={styles.row}>Tagline: {movieDetails.tagline}</Text>
      <Text style={styles.row}>Overview: {movieDetails.overview}</Text>
      <Text style={styles.row}>
        Certification: {getCertification(movieDetails.releaseDates)}
      </Text>
      <Text style={styles.row}>Release date: {movieDetails.releaseDate}</Text>
      <Text style={styles.row}>
        Genres: {movieDetails.genres.map((genre) => genre.name).join(', ')}
      </Text>
      <Text style={styles.row}>
        Runtime: {formatRuntime(movieDetails.runtime)}
      </Text>
      <Text style={styles.row}>
        Rating: {movieDetails.rating.voteAverage} of{' '}
        {movieDetails.rating.voteCount} votes
      </Text>
      <Text style={styles.row}>
        {movieDetails.credits.directors.length === 1
          ? 'Director:'
          : 'Directors:'}{' '}
        {movieDetails.credits.directors
          .map((director) => director.name)
          .join(', ')}
      </Text>
      <Text style={styles.row}>
        {movieDetails.credits.writers.length === 1 ? 'Writer:' : 'Writers:'}{' '}
        {movieDetails.credits.writers.map((writer) => writer.name).join(', ')}
      </Text>
      <Text style={styles.row}>
        Starring:{' '}
        {movieDetails.credits.cast.map((cast) => cast.name).join(', ')}
      </Text>
      <SimilarMovies tmdbId={tmdbId} />
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

export default MovieDetails;
