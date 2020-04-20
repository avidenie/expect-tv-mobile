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

export interface MovieDetailsData {
  movieDetails: MovieDetails;
}

export interface MovieDetailsVars {
  tmdbId: number;
}

export interface PopularMoviesData {
  popularMovies: MovieResults;
}

export interface PopularMoviesVars {
  region?: string;
  language?: string;
  page?: string;
}

export interface SimilarMoviesData {
  similarMovies: MovieResults;
}

export interface SimilarMoviesVars {
  tmdbId: number;
  language?: string;
  page?: string;
}
