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

export interface TvShowDetailsData {
  tvShowDetails: TvShowDetails;
}

export interface TvShowDetailsVars {
  tmdbId: number;
}

export interface PopularTvShowsData {
  popularTvShows: TvShowResults;
}

export interface PopularTvShowsVars {
  region: string;
  language: string;
  page: string;
}

export interface SimilarTvShowsData {
  similarTvShows: TvShowResults;
}

export interface SimilarTvShowsVars {
  tmdbId: number;
  region?: string;
  language?: string;
  page?: string;
}
