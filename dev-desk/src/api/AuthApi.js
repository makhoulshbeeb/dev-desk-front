import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  endpoints: (builder) => ({
    register: builder.query({
      query: (data) => ({
        url: 'register/',
        method: 'POST',
        body: data
      })
    }),
    login: builder.query({
      query: (data) => ({
        url: 'login/',
        method: 'POST',
        body: data
      })
    }),
    logout: builder.query({
      query: (data) => ({
        url: 'logout/',
        method: 'POST',
        body: data
      })
    })
  })
});

export const {
  useRegisterQuery,
  useLoginQuery,
  useLogoutQuery
} = authApi;