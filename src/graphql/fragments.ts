import { gql } from '@apollo/client';

export const MovieOverviewFragment = gql`
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

export const TvShowOverviewFragment = gql`
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

export const PageInfoFragment = gql`
  fragment pageInfoFields on PageInfo {
    page
    totalPages
    totalResults
  }
`;
