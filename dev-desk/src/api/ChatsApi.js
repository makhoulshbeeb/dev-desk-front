import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatsApi = createApi({
  reducerPath: "chatsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
    prepareHeaders: (headers) => {
      console.log("prepareHeaders is called");
      // const token = localStorage.getItem('token');
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MjIzODAwNDgsImV4cCI6MTcyMjM4MzY0OCwibmJmIjoxNzIyMzgwMDQ4LCJqdGkiOiJxa1pEUzlpN1gySk1vbEg3Iiwic3ViIjoiMTUzIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.OeYphwAp4J-lOBksoIGX2yaXsI8LFQ8simvh6LIE82g";
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
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
