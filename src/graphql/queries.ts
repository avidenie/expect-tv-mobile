import {
  MovieOverviewFragment,
  PageInfoFragment,
  TvShowOverviewFragment,
} from 'graphql/fragments';

import { gql } from '@apollo/client';

export const DiscoverMoviesDocument = gql`
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
  ${MovieOverviewFragment}
  ${PageInfoFragment}
`;

export const RecommendedMoviesDocument = gql`
  query recommendedMovies(
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
  ${MovieOverviewFragment}
  ${PageInfoFragment}
`;

export const SimilarMoviesDocument = gql`
  query similarMovies($tmdbId: Int!, $language: String = "en", $page: Int = 1) {
    similarMovies(tmdbId: $tmdbId, language: $language, page: $page) {
      results {
        ...movieOverviewFields
      }
      pageInfo {
        ...pageInfoFields
      }
    }
  }
  ${MovieOverviewFragment}
  ${PageInfoFragment}
`;

export const MovieDetailsDocument = gql`
  query movieDetails(
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
        logo {
          url
        }
        poster(orientation: PORTRAIT) {
          url
        }
        background(orientation: LANDSCAPE) {
          url
        }
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

export const DiscoverTvShowsDocument = gql`
  query discoverTvShows($params: DiscoverTvShowsInput!) {
    discoverTvShows(params: $params) {
      results {
        ...tvShowOverviewFields
      }
      pageInfo {
        ...pageInfoFields
      }
    }
  }
  ${TvShowOverviewFragment}
  ${PageInfoFragment}
`;

export const RecommendedTvShowsDocument = gql`
  query recommendedTvShows(
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
  ${TvShowOverviewFragment}
  ${PageInfoFragment}
`;

export const SimilarTvShowsDocument = gql`
  query similarTvShows(
    $tmdbId: Int!
    $language: String = "en"
    $page: Int = 1
  ) {
    similarTvShows(tmdbId: $tmdbId, language: $language, page: $page) {
      results {
        ...tvShowOverviewFields
      }
      pageInfo {
        ...pageInfoFields
      }
    }
  }
  ${TvShowOverviewFragment}
  ${PageInfoFragment}
`;

export const TvShowDetailsDocument = gql`
  query tvShowDetails($tmdbId: Int!, $language: String = "en") {
    tvShowDetails(tmdbId: $tmdbId, language: $language) {
      tmdbId
      name
      originalName
      originalLanguage
      firstAirDate
      images {
        logo {
          url
        }
        poster(orientation: PORTRAIT) {
          url
        }
        background(orientation: LANDSCAPE) {
          url
        }
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
