import { Genre, Rating } from 'types/common';

interface TvShowOverview {
  tmdbId: number;
  name: string;
  firstAirDate: string;
}

interface TvShowDetails {
  tmdbId: number;
  name: string;
  originalName: string;
  originalLanguage: string;
  firstAirDate: string;
  overview: string;
  genres: Genre[];
  runtime: number[];
  rating: Rating;
  createdBy: CreatedBy[];
  type: string;
  inProduction: boolean;
  status: string;
}

interface CreatedBy {
  id: number;
  name: string;
}

interface PageInfo {
  page: number;
}

interface TvShowResults {
  results: TvShowOverview[];
  pageInfo: PageInfo;
}

export interface DiscoverTvShowsData {
  discoverTvShows: TvShowResults;
}

export interface DiscoverTvShowsVariables {
  params: DiscoverTvShowsParams;
}

export interface DiscoverTvShowsParams {
  language?: string;
  sortBy?: string;
  airDateGte?: string;
  airDateLte?: string;
  firstAirDateGte?: string;
  firstAirDateLte?: string;
  firstAirDateYear?: number;
  page?: number;
  timezone?: string;
  voteAverageGte?: number;
  voteCountGte?: number;
  withGenres?: string;
  withNetworks?: string;
  withoutGenres?: string;
  withRuntimeGte?: number;
  withRuntimeLte?: number;
  includeNullFirstAirDates?: boolean;
  withOriginalLanguage?: string;
  withoutKeywords?: string;
  screenedTheatrically?: boolean;
  withCompanies?: string;
  withKeywords?: string;
}

export interface RecommendedTvShowsData {
  recommendedTvShows: TvShowResults;
}

export interface RecommendedTvShowsVariables {
  tmdbId: number;
  language?: string;
  page?: string;
}

export interface SimilarTvShowsData {
  similarTvShows: TvShowResults;
}

export interface SimilarTvShowsVariables {
  tmdbId: number;
  language?: string;
  page?: string;
}

export interface TvShowDetailsData {
  tvShowDetails: TvShowDetails;
}

export interface TvShowDetailsVariables {
  tmdbId: number;
}
