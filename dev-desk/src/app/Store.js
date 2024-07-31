import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { chatsApi } from '../api/ChatsApi.js'
import { scriptsApi } from '../api/ScriptsApi'
import { messagesApi } from '../api/MessagesApi'
import { usersApi } from '../api/UsersApi'
import { authApi } from '../api/AuthApi'

const store = configureStore({
  reducer: {
    [chatsApi.reducerPath]: chatsApi.reducer,
    [scriptsApi.reducerPath]: scriptsApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat([chatsApi.middleware, scriptsApi.middleware, messagesApi.middleware, usersApi.middleware, authApi.middleware])
})

setupListeners(store.dispatch);

export default store