import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const scriptsApi = createApi({
    reducerPath: 'scriptsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:8000/api/scripts/' }),
    endpoints: (builder) => ({
      getAllScripts: builder.query({
        query: () => {},
      }),
      getScript: builder.query({
        query:({id})=>`/${id}`
      }),
      getScriptByName: builder.query({
        query:({name})=>`/${name}`
      }),
      getScriptsByUsername: builder.query({
        query:({username})=>`/${username}`
      }),
      createScript: builder.mutation({
        query: (data)=>({
            method: 'POST',
            body: data
        })
      }),
      updateScript: builder.mutation({
        query: (data)=>({
            url: `/${data.id}`,
            method: 'PATCH',
            body: data
        })
      }), 
      deleteScript: builder.mutation({
        query: ({id})=>({
            method: 'DELETE',
            body: id
        })
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