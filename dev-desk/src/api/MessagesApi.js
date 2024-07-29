import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const messagesApi = createApi({
    reducerPath: 'messagesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:8000/api/messages/' }),
    endpoints: (builder) => ({
      getMessages: builder.query({
        query:({chat_id})=>`/${chat_id}`
      }),
      createMessage: builder.mutation({
        query: (data)=>({
            method: 'POST',
            body: data
        })
      }),
      updateMessage: builder.mutation({
        query: (data)=>({
            url: `/${data.id}`,
            method: 'PATCH',
            body: data
        })
      }), 
      deleteMessage: builder.mutation({
        query: ({id})=>({
            method: 'DELETE',
            body: id
        })
      })
    }),
});

export const {
    useGetMessagesQuery,
    useCreateMessageMutation,
    useUpdateMessageMutation,
    useDeleteMessageMutation
} = messagesApi;