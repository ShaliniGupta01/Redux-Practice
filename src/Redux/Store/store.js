import {configureStore} from '@reduxjs/toolkit'

import counterReducer from "../Slices/States/counterslice.js"

import userReducer from "../Slices/States/userSllice.js"

import { postApi } from '../Slices/Api/postApiSlice.js';

 export const store = configureStore({
    reducer:{
  counter:counterReducer,
  user:userReducer,
  [postApi.reducerPath]:postApi.reducer
},
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});