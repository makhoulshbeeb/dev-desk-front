import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatsApi = createApi({
  reducerPath: "chatsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`,
      'Content-Type' : 'application/json'
    }
  }),
  tagTypes: ["Chat"],
  endpoints: (builder) => ({
    getAllChats: builder.query({
      query: () => "chats/",
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: "Chat", id })), "Chat"]
          : ["Chat"],
    }),
    getChatsByUsername: builder.query({
      query: ({ username }) => `chats/${username}`,
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: "Chat", id })), "Chat"]
          : ["Chat"],
    }),
    createChat: builder.mutation({
      query: (data) => ({
        url: "chats/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Chat", id: arg.id }],
    }),
    updateChat: builder.mutation({
      query: (data) => ({
        url: `chats/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Chat", id: arg.id }],
    }),
    deleteChat: builder.mutation({
      query: ({ id }) => ({
        url: `chats/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Chat", id: arg.id }],
    }),
  }),
});

export const {
  useGetAllChatsQuery,
  useGetChatsByUsernameQuery,
  useCreateChatMutation,
  useUpdateChatMutation,
  useDeleteChatMutation,
} = chatsApi;
