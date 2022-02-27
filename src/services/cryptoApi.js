import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
     'x-rapidapi-key': '76bb70a0b8mshe4356a9bcb4211bp177763jsne100735e70f0'
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
     reducerPath: "createApi",
     baseQuery: fetchBaseQuery({ baseUrl }),
     endpoints: (builder) => ({
          getCryptos: builder.query({
               query: () => createRequest("/exchanges")
          })
     }),
});