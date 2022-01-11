import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Event } from './models';

export const jsmApi = createApi({
  reducerPath: 'jsmApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getRecentEvents: builder.query<Event[], string>({
      query: () => `events/recent`,
    }),
  }),
});

export const { useGetRecentEventsQuery } = jsmApi;
