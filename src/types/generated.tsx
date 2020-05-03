export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type Cast = {
  __typename?: 'Cast';
  id: Scalars['Int'];
  name: Scalars['String'];
  character: Scalars['String'];
};

export type CreatedBy = {
  __typename?: 'CreatedBy';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Credits = {
  __typename?: 'Credits';
  directors: Array<Crew>;
  writers: Array<Crew>;
  cast: Array<Cast>;
};

export type Crew = {
  __typename?: 'Crew';
  id: Scalars['Int'];
  name: Scalars['String'];
  job: Scalars['String'];
};

export type DiscoverMoviesInput = {
  language?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Scalars['String']>;
  certificationCountry?: Maybe<Scalars['String']>;
  certification?: Maybe<Scalars['String']>;
  certificationLte?: Maybe<Scalars['String']>;
  certificationGte?: Maybe<Scalars['String']>;
  includeAdult?: Maybe<Scalars['Boolean']>;
  includeVideo?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Int']>;
  primaryReleaseYear?: Maybe<Scalars['Int']>;
  primaryReleaseDateGte?: Maybe<Scalars['String']>;
  primaryReleaseDateLte?: Maybe<Scalars['String']>;
  releaseDateGte?: Maybe<Scalars['String']>;
  releaseDateLte?: Maybe<Scalars['String']>;
  withReleaseType?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  voteCountGte?: Maybe<Scalars['Int']>;
  voteCountLte?: Maybe<Scalars['Int']>;
  voteAverageGte?: Maybe<Scalars['Float']>;
  voteAverageLte?: Maybe<Scalars['Float']>;
  withCast?: Maybe<Scalars['String']>;
  withCrew?: Maybe<Scalars['String']>;
  withPeople?: Maybe<Scalars['String']>;
  withCompanies?: Maybe<Scalars['String']>;
  withGenres?: Maybe<Scalars['String']>;
  withoutGenres?: Maybe<Scalars['String']>;
  withKeywords?: Maybe<Scalars['String']>;
  withoutKeywords?: Maybe<Scalars['String']>;
  withRuntimeGte?: Maybe<Scalars['Int']>;
  withRuntimeLte?: Maybe<Scalars['Int']>;
  withOriginalLanguage?: Maybe<Scalars['String']>;
};

export type DiscoverTvShowsInput = {
  language?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Scalars['String']>;
  airDateGte?: Maybe<Scalars['String']>;
  airDateLte?: Maybe<Scalars['String']>;
  firstAirDateGte?: Maybe<Scalars['String']>;
  firstAirDateLte?: Maybe<Scalars['String']>;
  firstAirDateYear?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  voteAverageGte?: Maybe<Scalars['Float']>;
  voteCountGte?: Maybe<Scalars['Int']>;
  withGenres?: Maybe<Scalars['String']>;
  withNetworks?: Maybe<Scalars['String']>;
  withoutGenres?: Maybe<Scalars['String']>;
  withRuntimeGte?: Maybe<Scalars['Int']>;
  withRuntimeLte?: Maybe<Scalars['Int']>;
  includeNullFirstAirDates?: Maybe<Scalars['Boolean']>;
  withOriginalLanguage?: Maybe<Scalars['String']>;
  withoutKeywords?: Maybe<Scalars['String']>;
  screenedTheatrically?: Maybe<Scalars['Boolean']>;
  withCompanies?: Maybe<Scalars['String']>;
  withKeywords?: Maybe<Scalars['String']>;
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export enum ImageOrientation {
  Portrait = 'PORTRAIT',
  Landscape = 'LANDSCAPE',
}

export type LogoImage = {
  __typename?: 'LogoImage';
  url: Scalars['String'];
  lang: Scalars['String'];
  rank: Scalars['Float'];
};

export type Movie = {
  __typename?: 'Movie';
  tmdbId: Scalars['Int'];
  title: Scalars['String'];
  originalTitle: Scalars['String'];
  language: Scalars['String'];
  originalLanguage: Scalars['String'];
  releaseDate: Scalars['String'];
  images: MovieImages;
  tagline: Scalars['String'];
  overview: Scalars['String'];
  genres: Array<Genre>;
  runtime: Scalars['Int'];
  rating: Rating;
  releaseDates: Array<ReleaseDates>;
  credits: Credits;
  externalIds: MovieExternalIds;
};

export type MovieReleaseDatesArgs = {
  region?: Maybe<Scalars['String']>;
};

export type MovieBackgroundImage = {
  __typename?: 'MovieBackgroundImage';
  url: Scalars['String'];
  orientation?: Maybe<ImageOrientation>;
  rank: Scalars['Float'];
};

export type MovieExternalIds = {
  __typename?: 'MovieExternalIds';
  imdbId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  instagramId?: Maybe<Scalars['String']>;
  twitterId?: Maybe<Scalars['String']>;
};

export type MovieImages = {
  __typename?: 'MovieImages';
  logo?: Maybe<LogoImage>;
  logos: Array<LogoImage>;
  poster?: Maybe<PosterImage>;
  posters: Array<PosterImage>;
  background?: Maybe<MovieBackgroundImage>;
  backgrounds: Array<MovieBackgroundImage>;
};

export type MovieImagesLogosArgs = {
  limit?: Maybe<Scalars['Int']>;
};

export type MovieImagesPosterArgs = {
  orientation: ImageOrientation;
};

export type MovieImagesPostersArgs = {
  orientation: ImageOrientation;
  limit?: Maybe<Scalars['Int']>;
};

export type MovieImagesBackgroundArgs = {
  orientation: ImageOrientation;
};

export type MovieImagesBackgroundsArgs = {
  orientation: ImageOrientation;
  limit?: Maybe<Scalars['Int']>;
};

export type MovieOverview = {
  __typename?: 'MovieOverview';
  tmdbId: Scalars['Int'];
  title: Scalars['String'];
  originalTitle: Scalars['String'];
  language: Scalars['String'];
  originalLanguage: Scalars['String'];
  releaseDate: Scalars['String'];
  images: MovieImages;
};

export type MovieResults = {
  __typename?: 'MovieResults';
  results: Array<MovieOverview>;
  pageInfo: PageInfo;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  page: Scalars['Int'];
  totalPages: Scalars['Int'];
  totalResults: Scalars['Int'];
};

export type PosterImage = {
  __typename?: 'PosterImage';
  url: Scalars['String'];
  orientation: ImageOrientation;
  lang: Scalars['String'];
  rank: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  discoverMovies: MovieResults;
  recommendedMovies: MovieResults;
  similarMovies: MovieResults;
  movieDetails: Movie;
  discoverTvShows: TvShowResults;
  recommendedTvShows: TvShowResults;
  similarTvShows: TvShowResults;
  tvShowDetails: TvShow;
};

export type QueryDiscoverMoviesArgs = {
  params: DiscoverMoviesInput;
};

export type QueryRecommendedMoviesArgs = {
  tmdbId: Scalars['Int'];
  language?: Scalars['String'];
  page?: Scalars['Int'];
};

export type QuerySimilarMoviesArgs = {
  tmdbId: Scalars['Int'];
  language?: Scalars['String'];
  page?: Scalars['Int'];
};

export type QueryMovieDetailsArgs = {
  tmdbId: Scalars['Int'];
  language?: Scalars['String'];
};

export type QueryDiscoverTvShowsArgs = {
  params: DiscoverTvShowsInput;
};

export type QueryRecommendedTvShowsArgs = {
  tmdbId: Scalars['Int'];
  language?: Scalars['String'];
  page?: Scalars['Int'];
};

export type QuerySimilarTvShowsArgs = {
  tmdbId: Scalars['Int'];
  language?: Scalars['String'];
  page?: Scalars['Int'];
};

export type QueryTvShowDetailsArgs = {
  tmdbId: Scalars['Int'];
  language?: Scalars['String'];
};

export type Rating = {
  __typename?: 'Rating';
  voteAverage: Scalars['Float'];
  voteCount: Scalars['Int'];
};

export type ReleaseDate = {
  __typename?: 'ReleaseDate';
  releaseDate: Scalars['String'];
  certification: Scalars['String'];
  type: Scalars['Int'];
};

export type ReleaseDates = {
  __typename?: 'ReleaseDates';
  region: Scalars['String'];
  results: Array<ReleaseDate>;
};

export enum ReleaseDateType {
  Premiere = 'PREMIERE',
  TheatricalLimited = 'THEATRICAL_LIMITED',
  Theatrical = 'THEATRICAL',
  Digital = 'DIGITAL',
  Physical = 'PHYSICAL',
  Tv = 'TV',
}

export type TvShow = {
  __typename?: 'TvShow';
  tmdbId: Scalars['Int'];
  name: Scalars['String'];
  originalName: Scalars['String'];
  language: Scalars['String'];
  originalLanguage: Scalars['String'];
  firstAirDate: Scalars['String'];
  images: TvShowImages;
  overview: Scalars['String'];
  genres: Array<Genre>;
  runtime: Array<Scalars['Int']>;
  rating: Rating;
  createdBy: Array<CreatedBy>;
  type: Scalars['String'];
  inProduction: Scalars['Boolean'];
  status: Scalars['String'];
  externalIds: TvShowExternalIds;
};

export type TvShowBackgroundImage = {
  __typename?: 'TvShowBackgroundImage';
  url: Scalars['String'];
  orientation: ImageOrientation;
  rank: Scalars['Float'];
  season?: Maybe<Scalars['Int']>;
};

export type TvShowExternalIds = {
  __typename?: 'TvShowExternalIds';
  imdbId?: Maybe<Scalars['String']>;
  tvdbId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  instagramId?: Maybe<Scalars['String']>;
  twitterId?: Maybe<Scalars['String']>;
};

export type TvShowImages = {
  __typename?: 'TvShowImages';
  logo?: Maybe<LogoImage>;
  logos: Array<LogoImage>;
  poster?: Maybe<PosterImage>;
  posters: Array<PosterImage>;
  background?: Maybe<TvShowBackgroundImage>;
  backgrounds: Array<TvShowBackgroundImage>;
};

export type TvShowImagesLogosArgs = {
  limit?: Maybe<Scalars['Int']>;
};

export type TvShowImagesPosterArgs = {
  orientation: ImageOrientation;
};

export type TvShowImagesPostersArgs = {
  orientation: ImageOrientation;
  limit?: Maybe<Scalars['Int']>;
};

export type TvShowImagesBackgroundArgs = {
  orientation: ImageOrientation;
};

export type TvShowImagesBackgroundsArgs = {
  orientation: ImageOrientation;
  limit?: Maybe<Scalars['Int']>;
};

export type TvShowOverview = {
  __typename?: 'TvShowOverview';
  tmdbId: Scalars['Int'];
  name: Scalars['String'];
  originalName: Scalars['String'];
  language: Scalars['String'];
  originalLanguage: Scalars['String'];
  firstAirDate: Scalars['String'];
  images: TvShowImages;
};

export type TvShowResults = {
  __typename?: 'TvShowResults';
  results: Array<TvShowOverview>;
  pageInfo: PageInfo;
};

export type MovieOverviewFieldsFragment = {
  __typename?: 'MovieOverview';
} & Pick<MovieOverview, 'tmdbId' | 'title' | 'releaseDate'> & {
    images: { __typename?: 'MovieImages' } & {
      logo?: Maybe<{ __typename?: 'LogoImage' } & Pick<LogoImage, 'url'>>;
      poster?: Maybe<{ __typename?: 'PosterImage' } & Pick<PosterImage, 'url'>>;
    };
  };

export type TvShowOverviewFieldsFragment = {
  __typename?: 'TvShowOverview';
} & Pick<TvShowOverview, 'tmdbId' | 'name' | 'firstAirDate'> & {
    images: { __typename?: 'TvShowImages' } & {
      logo?: Maybe<{ __typename?: 'LogoImage' } & Pick<LogoImage, 'url'>>;
      poster?: Maybe<{ __typename?: 'PosterImage' } & Pick<PosterImage, 'url'>>;
    };
  };

export type PageInfoFieldsFragment = { __typename?: 'PageInfo' } & Pick<
  PageInfo,
  'page' | 'totalPages' | 'totalResults'
>;

export type DiscoverMoviesQueryVariables = {
  params: DiscoverMoviesInput;
};

export type DiscoverMoviesQuery = { __typename?: 'Query' } & {
  discoverMovies: { __typename?: 'MovieResults' } & {
    results: Array<
      { __typename?: 'MovieOverview' } & MovieOverviewFieldsFragment
    >;
    pageInfo: { __typename?: 'PageInfo' } & PageInfoFieldsFragment;
  };
};

export type RecommendedMoviesQueryVariables = {
  tmdbId: Scalars['Int'];
  language?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
};

export type RecommendedMoviesQuery = { __typename?: 'Query' } & {
  recommendedMovies: { __typename?: 'MovieResults' } & {
    results: Array<
      { __typename?: 'MovieOverview' } & MovieOverviewFieldsFragment
    >;
    pageInfo: { __typename?: 'PageInfo' } & PageInfoFieldsFragment;
  };
};

export type SimilarMoviesQueryVariables = {
  tmdbId: Scalars['Int'];
  language?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
};

export type SimilarMoviesQuery = { __typename?: 'Query' } & {
  similarMovies: { __typename?: 'MovieResults' } & {
    results: Array<
      { __typename?: 'MovieOverview' } & MovieOverviewFieldsFragment
    >;
    pageInfo: { __typename?: 'PageInfo' } & PageInfoFieldsFragment;
  };
};

export type MovieDetailsQueryVariables = {
  tmdbId: Scalars['Int'];
  language?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};

export type MovieDetailsQuery = { __typename?: 'Query' } & {
  movieDetails: { __typename?: 'Movie' } & Pick<
    Movie,
    | 'tmdbId'
    | 'title'
    | 'originalTitle'
    | 'originalLanguage'
    | 'releaseDate'
    | 'tagline'
    | 'overview'
    | 'runtime'
  > & {
      images: { __typename?: 'MovieImages' } & {
        logo?: Maybe<{ __typename?: 'LogoImage' } & Pick<LogoImage, 'url'>>;
        poster?: Maybe<
          { __typename?: 'PosterImage' } & Pick<PosterImage, 'url'>
        >;
        background?: Maybe<
          { __typename?: 'MovieBackgroundImage' } & Pick<
            MovieBackgroundImage,
            'url'
          >
        >;
      };
      genres: Array<{ __typename?: 'Genre' } & Pick<Genre, 'name'>>;
      rating: { __typename?: 'Rating' } & Pick<
        Rating,
        'voteAverage' | 'voteCount'
      >;
      releaseDates: Array<
        { __typename?: 'ReleaseDates' } & Pick<ReleaseDates, 'region'> & {
            results: Array<
              { __typename?: 'ReleaseDate' } & Pick<
                ReleaseDate,
                'releaseDate' | 'certification' | 'type'
              >
            >;
          }
      >;
      credits: { __typename?: 'Credits' } & {
        directors: Array<{ __typename?: 'Crew' } & Pick<Crew, 'id' | 'name'>>;
        writers: Array<
          { __typename?: 'Crew' } & Pick<Crew, 'id' | 'name' | 'job'>
        >;
        cast: Array<
          { __typename?: 'Cast' } & Pick<Cast, 'id' | 'name' | 'character'>
        >;
      };
    };
};

export type DiscoverTvShowsQueryVariables = {
  params: DiscoverTvShowsInput;
};

export type DiscoverTvShowsQuery = { __typename?: 'Query' } & {
  discoverTvShows: { __typename?: 'TvShowResults' } & {
    results: Array<
      { __typename?: 'TvShowOverview' } & TvShowOverviewFieldsFragment
    >;
    pageInfo: { __typename?: 'PageInfo' } & PageInfoFieldsFragment;
  };
};

export type RecommendedTvShowsQueryVariables = {
  tmdbId: Scalars['Int'];
  language?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
};

export type RecommendedTvShowsQuery = { __typename?: 'Query' } & {
  recommendedTvShows: { __typename?: 'TvShowResults' } & {
    results: Array<
      { __typename?: 'TvShowOverview' } & TvShowOverviewFieldsFragment
    >;
    pageInfo: { __typename?: 'PageInfo' } & PageInfoFieldsFragment;
  };
};

export type SimilarTvShowsQueryVariables = {
  tmdbId: Scalars['Int'];
  language?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
};

export type SimilarTvShowsQuery = { __typename?: 'Query' } & {
  similarTvShows: { __typename?: 'TvShowResults' } & {
    results: Array<
      { __typename?: 'TvShowOverview' } & TvShowOverviewFieldsFragment
    >;
    pageInfo: { __typename?: 'PageInfo' } & PageInfoFieldsFragment;
  };
};

export type TvShowDetailsQueryVariables = {
  tmdbId: Scalars['Int'];
  language?: Maybe<Scalars['String']>;
};

export type TvShowDetailsQuery = { __typename?: 'Query' } & {
  tvShowDetails: { __typename?: 'TvShow' } & Pick<
    TvShow,
    | 'tmdbId'
    | 'name'
    | 'originalName'
    | 'originalLanguage'
    | 'firstAirDate'
    | 'overview'
    | 'runtime'
    | 'type'
    | 'inProduction'
    | 'status'
  > & {
      images: { __typename?: 'TvShowImages' } & {
        logo?: Maybe<{ __typename?: 'LogoImage' } & Pick<LogoImage, 'url'>>;
        poster?: Maybe<
          { __typename?: 'PosterImage' } & Pick<PosterImage, 'url'>
        >;
        background?: Maybe<
          { __typename?: 'TvShowBackgroundImage' } & Pick<
            TvShowBackgroundImage,
            'url'
          >
        >;
      };
      genres: Array<{ __typename?: 'Genre' } & Pick<Genre, 'name'>>;
      rating: { __typename?: 'Rating' } & Pick<
        Rating,
        'voteAverage' | 'voteCount'
      >;
      createdBy: Array<{ __typename?: 'CreatedBy' } & Pick<CreatedBy, 'name'>>;
    };
};
