import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
    endpoints: (builder) => ({
      getAllAuth: builder.query({
        query: () => 'auth/',
      }),
      getAuthByUsername: builder.query({
        query:({username})=>`auth/${username}`
      }),
      createAuth: builder.mutation({
        query: (data)=>({
          url: 'auth/',
            method: 'POST',
            body: data
        })
      }),
      updateAuth: builder.mutation({
        query: (data)=>({
            url: `auth/${data.id}`,
            method: 'PATCH',
            body: data
        })
      }), 
      deleteAuth: builder.mutation({
        query: ({id})=>({
            url:'auth/',
            method: 'DELETE',
            body: id
        })
      })
    }),
});

export const {
    useGetAllAuthQuery,
    useGetAuthByUsernameQuery,
    useCreateAuthMutation,
    useUpdateAuthMutation,
    useDeleteAuthMutation
} = authApi;