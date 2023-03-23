import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Digest, Event } from '@jsm/data-service';

export const jsmApi = createApi({
  reducerPath: 'jsmApi',
  keepUnusedDataFor: 300,
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
    getDigest: builder.query<Digest, string>({
      query: (id: string) => `digests/${id}`,
    }),
  }),
});

export const {
  useGetRecentEventsQuery,
  useGetEventsQuery,
  useGetDigestsQuery,
  useGetDigestQuery,
} = jsmApi;
