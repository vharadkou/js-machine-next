import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Digest, Event } from './models';

export const jsmApi = createApi({
  reducerPath: 'jsmApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
  }),
  endpoints: (builder) => ({
    getEvents: builder.query<Event[], void>({
      query: () => 'events',
    }),
    getDigests: builder.query<{ [key: string]: Digest[] }, void>({
      query: () => 'digests',
      transformResponse: (response: Digest[]) =>
        response.reduce<{ [key: string]: Digest[] }>((prev, current) => {
          const year = new Date(current.date).getFullYear();
          const month = new Date(current.date)
            .toLocaleString('ru', { month: 'long' })
            .toUpperCase();

          const key = `${year} ${month}`;
          prev[key] = prev[key] ? [...prev[key], current] : [current];

          return prev;
        }, {}),
    }),
  }),
});

export const { useGetEventsQuery, useGetDigestsQuery } = jsmApi;
