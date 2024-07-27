import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { localStorageMiddleware } from "./localStorageMiddleware";

export const store = configureStore({
    reducer:{
        todo: todoReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(localStorageMiddleware)    
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch