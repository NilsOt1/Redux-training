import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const foodsApi = createApi({
  reducerPath: "foodsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openbrewerydb.org/v1/breweries",
  }),
  endpoints: (builder) => ({
    getAllFoods: builder.query({
      query: (page = 1, perPage = 5) => ({
        url: "/",
        params: {
          page,
          per_page: perPage,
        },
      }),
    }),
  }),
});
export const { useGetAllFoodsQuery } = foodsApi;
