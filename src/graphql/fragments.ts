import { gql } from '@apollo/client';

export const MOVIE_OVERVIEW_FIELDS = gql`
  fragment movieOverviewFields on MovieOverview {
    tmdbId
    title
    releaseDate
    images {
      logo {
        url
      }
      poster(orientation: PORTRAIT) {
        url
      }
    }
  }
`;

export const TV_SHOW_OVERVIEW_FIELDS = gql`
  fragment tvShowOverviewFields on TvShowOverview {
    tmdbId
    name
    firstAirDate
    images {
      logo {
        url
      }
      poster(orientation: PORTRAIT) {
        url
      }
    }
  }
`;

export const PAGE_INFO_FIELDS = gql`
  fragment pageInfoFields on PageInfo {
    page
    totalPages
    totalResults
  }
`;
