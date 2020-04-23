import { Genre, Rating } from 'types/common';

export interface MovieOverview {
  tmdbId: number;
  title: string;
  releaseDate: string;
}

export interface MovieDetails {
  tmdbId: number;
  title: string;
  originalTitle: string;
  originalLanguage: string;
  releaseDate: string;
  tagline: string;
  overview: string;
  genres: Genre[];
  runtime: number;
  rating: Rating;
  releaseDates: RegionReleaseDate[];
  credits: Credits;
}

enum ReleaseDateType {
  PREMIERE = 'PREMIERE',
  THEATRICAL_LIMITED = 'THEATRICAL_LIMITED',
  THEATRICAL = 'THEATRICAL',
  DIGITAL = 'DIGITAL',
  PHYSICAL = 'PHYSICAL',
  TV = 'TV',
}

export interface RegionReleaseDate {
  region: string;
  results: ReleaseDate[];
}

interface ReleaseDate {
  certification: string;
  releaseDate: string;
  type: ReleaseDateType;
}

interface Credits {
  directors: Crew[];
  writers: Crew[];
  cast: Cast[];
}

interface Crew {
  id: number;
  name: string;
  job: string;
}

interface Cast {
  id: number;
  name: string;
  character: string;
}

interface PageInfo {
  page: number;
}

interface MovieResults {
  results: MovieOverview[];
  pageInfo: PageInfo;
}

export interface DiscoverMoviesData {
  discoverMovies: MovieResults;
}

export interface DiscoverMoviesVariables {
  params: DiscoverMoviesParams;
}

export interface DiscoverMoviesParams {
  language?: string;
  region?: string;
  sortBy?:
    | 'popularity.asc'
    | 'popularity.desc'
    | 'release_date.asc'
    | 'release_date.desc'
    | 'revenue.asc'
    | 'revenue.desc'
    | 'primary_release_date.asc'
    | 'primary_release_date.desc'
    | 'original_title.asc'
    | 'original_title.desc'
    | 'vote_average.asc'
    | 'vote_average.desc'
    | 'vote_count.asc'
    | 'vote_count.desc';
  certificationCountry?: string;
  certification?: string;
  certificationLte?: string;
  certificationGte?: string;
  includeAdult?: boolean;
  includeVideo?: boolean;
  page?: number;
  primaryReleaseYear?: number;
  primaryReleaseDateGte?: string;
  primaryReleaseDateLte?: string;
  releaseDateGte?: string;
  releaseDateLte?: string;
  withReleaseType?: string;
  year?: number;
  voteCountGte?: number;
  voteCountLte?: number;
  voteAverageGte?: number;
  voteAverageLte?: number;
  withCast?: string;
  withCrew?: string;
  withPeople?: string;
  withCompanies?: string;
  withGenres?: string;
  withoutGenres?: string;
  withKeywords?: string;
  withoutKeywords?: string;
  withRuntimeGte?: number;
  withRuntimeLte?: number;
  withOriginalLanguage?: string;
}

export interface RecommendedMoviesData {
  recommendedMovies: MovieResults;
}

export interface RecommendedMoviesVariables {
  tmdbId: number;
  language?: string;
  page?: string;
}

export interface SimilarMoviesData {
  similarMovies: MovieResults;
}

export interface SimilarMoviesVariables {
  tmdbId: number;
  language?: string;
  page?: string;
}

export interface MovieDetailsData {
  movieDetails: MovieDetails;
}

export interface MovieDetailsVariables {
  tmdbId: number;
}
