import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const chatsApi = createApi({
    reducerPath: 'chatsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:8000/api/chats/' }),
    endpoints: (builder) => ({
      getAllChats: builder.query({
        query: () => {},
      }),
      getChatsByUsername: builder.query({
        query:({username})=>`/${username}`
      }),
      createChat: builder.mutation({
        query: (data)=>({
            method: 'POST',
            body: data
        })
      }),
      updateChat: builder.mutation({
        query: (data)=>({
            url: `/${data.id}`,
            method: 'PATCH',
            body: data
        })
      }), 
      deleteChat: builder.mutation({
        query: ({id})=>({
            method: 'DELETE',
            body: id
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