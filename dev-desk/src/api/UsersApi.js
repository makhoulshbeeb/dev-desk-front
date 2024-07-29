import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
    endpoints: (builder) => ({
      getAllUsers: builder.query({
        query: () => 'users/',
      }),
      getUsersByUsername: builder.query({
        query:({username})=>`users/${username}`
      }),
      createUser: builder.mutation({
        query: (data)=>({
          url: 'users/',
            method: 'POST',
            body: data
        })
      }),
      updateUser: builder.mutation({
        query: (data)=>({
            url: `users/${data.id}`,
            method: 'PATCH',
            body: data
        })
      }), 
      deleteUser: builder.mutation({
        query: ({id})=>({
            url:'users/',
            method: 'DELETE',
            body: id
        })
      })
    }),
});

export const {
    useGetAllUsersQuery,
    useGetUsersByUsernameQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
} = usersApi;