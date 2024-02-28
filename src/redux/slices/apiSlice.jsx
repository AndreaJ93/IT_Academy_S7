import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const starshipsApi = createApi({
  reducerPath: "starshipsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    getAllStarships: builder.query({
      query: (pag) => `starships/?page=${pag}`,
    }),
    getStarship: builder.query({
      query: (id) => `starships/${id}`,
    }),
  }),
});

export const { useGetAllStarshipsQuery, useGetStarshipQuery } = starshipsApi;
