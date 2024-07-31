import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const scriptsApi = createApi({
    reducerPath: 'scriptsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
    tagTypes:['Script'],
    endpoints: (builder) => ({
      getAllScripts: builder.query({
        query: () => 'scripts/',
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Script', id })), 'Script']
            : ['Script'],
      }),
      getScript: builder.query({
        query:({id})=>`/scripts/${id}`,
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Script', id })), 'Script']
            : ['Script'],
      }),
      getScriptsByUsername: builder.query({
        query:({username})=>`/scripts/${username}`,
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Script', id })), 'Script']
            : ['Script'],
      }),
      getScriptsByName: builder.query({
        query:({name})=>`/scripts/search/${name}`,
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Script', id })), 'Script']
            : ['Script'],
      }),
      createScript: builder.mutation({
        query: (data)=>({
            url: 'scripts/',
            method: 'POST',
            body: data
        }),
        invalidatesTags: (result, error, arg) => [{ type: 'Script', id: arg.id }],
      }),
      updateScript: builder.mutation({
        query: (data)=>({
            url: `/scripts/${data.id}`,
            method: 'PATCH',
            body: data
        }),
        invalidatesTags: (result, error, arg) => [{ type: 'Script', id: arg.id }],
      }), 
      deleteScript: builder.mutation({
        query: ({id})=>({
            method: 'DELETE',
            body: id
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