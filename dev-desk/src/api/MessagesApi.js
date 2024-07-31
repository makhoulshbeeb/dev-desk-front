import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const messagesApi = createApi({
    reducerPath: 'messagesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
    tagTypes: ['Messages'],
    endpoints: (builder) => ({
      getMessages: builder.query({
        query:({chat_id})=>`messages/${chat_id}`,
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Messages', id })), 'Messages']
            : ['Messages'],
      }),
      createMessage: builder.mutation({
        query: (data)=>({
            url: 'messages/',
            method: 'POST',
            body: data
        }),
        invalidatesTags: (result, error, arg) => [{ type: 'Messages', id: arg.id }],
      }),
      updateMessage: builder.mutation({
        query: (data)=>({
            url: `messages/${data.id}`,
            method: 'PATCH',
            body: data
        }),
        invalidatesTags: (result, error, arg) => [{ type: 'Messages', id: arg.id }],
      }), 
      deleteMessage: builder.mutation({
        query: ({id})=>({
            url: `messages/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: (result, error, arg) => [{ type: 'Messages', id: arg.id }],
      })
    }),
});

export const {
    useGetMessagesQuery,
    useCreateMessageMutation,
    useUpdateMessageMutation,
    useDeleteMessageMutation
} = messagesApi;