
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
     'x-bingapis-sdk': 'true',
     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
     'x-rapidapi-key': '76bb70a0b8mshe4356a9bcb4211bp177763jsne100735e70f0'
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
     reducerPath: 'cryptoNewsApi',
     baseQuery: fetchBaseQuery({ baseUrl: "https://bing-news-search1.p.rapidapi.com" }),
     endpoints: (builder) => ({
          getCryptoNews: builder.query({
               query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
          }),
     }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;