import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const chatsApi = createApi({
    reducerPath: 'chatsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
    endpoints: (builder) => ({
      getAllChats: builder.query({
        query: () => 'chats/',
      }),
      getChatsByUsername: builder.query({
        query:({username})=>`chats/${username}`
      }),
      createChat: builder.mutation({
        query: (data)=>({
          url: 'chats/',
            method: 'POST',
            body: data
        })
      }),
      updateChat: builder.mutation({
        query: (data)=>({
            url: `chats/${data.id}`,
            method: 'PATCH',
            body: data
        })
      }), 
      deleteChat: builder.mutation({
        query: ({id})=>({
            url: `chats/${id}`,
            method: 'DELETE',
        })
      })
    }),
});

export const {
    useGetAllChatsQuery,
    useGetChatsByUsernameQuery,
    useCreateChatMutation,
    useUpdateChatMutation,
    useDeleteChatMutation
} = chatsApi;
