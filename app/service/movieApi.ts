import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie } from './types';

export const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({ baseUrl: "https://freetestapi.com/api/v1" }),
  endpoints: (builder) => ({
    getFiveMovies: builder.query<Movie[], void>({
      query: () => `movies?limit=5`,
    }),
  }),
});

export const { useGetFiveMoviesQuery } = moviesApi;