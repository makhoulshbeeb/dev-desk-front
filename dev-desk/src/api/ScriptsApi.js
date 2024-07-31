import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const scriptsApi = createApi({
  reducerPath: 'scriptsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
    prepareHeaders: (headers) => {
      console.log("prepareHeaders is called");
      const token = localStorage.getItem('token');
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Script'],
  endpoints: (builder) => ({
    getAllScripts: builder.query({
      query: () => 'scripts/',
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Script', id })), 'Script']
          : ['Script'],
    }),
    getScript: builder.query({
      query: ({ id }) => `/scripts/id/${id}`,
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Script', id })), 'Script']
          : ['Script'],
    }),
    getScriptsByUsername: builder.query({
      query: ({ username }) => `/scripts/${username}`,
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Script', id })), 'Script']
          : ['Script'],
    }),
    getScriptsByName: builder.query({
      query: ({ name }) => `/scripts/search/${name}`,
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Script', id })), 'Script']
          : ['Script'],
    }),
    createScript: builder.mutation({
      query: (data) => ({
        url: 'scripts/',
        method: 'POST',
        body: data
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Script', id: arg.id }],
    }),
    updateScript: builder.mutation({
      query: (data) => ({
        url: `/scripts/${data.id}`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Script', id: arg.id }],
    }),
    deleteScript: builder.mutation({
      query: ({ id }) => ({
        url: `/scripts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Script', id: arg.id }],
    })
  }),
});

export const {
  useGetAllScriptsQuery,
  useGetScriptQuery,
  useGetScriptsByNameQuery,
  useGetScriptsByUsernameQuery,
  useCreateScriptMutation,
  useUpdateScriptMutation,
  useDeleteScriptMutation
} = scriptsApi;