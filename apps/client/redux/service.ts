import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Digest, Event } from './models';

export const jsmApi = createApi({
  reducerPath: 'jsmApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getRecentEvents: builder.query<Event[], string>({
      query: () => `events/recent`,
    }),
    getEvents: builder.query<Event[], string>({
      query: () => `events`,
    }),
    getDigests: builder.query<Digest[], string>({
      query: () => `digests`,
    }),
  }),
});

export const {
  useGetRecentEventsQuery,
  useGetEventsQuery,
  useGetDigestsQuery,
} = jsmApi;
