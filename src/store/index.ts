// src/store/index.ts (или store.ts)
import { configureStore } from '@reduxjs/toolkit';
import { bayutApi } from './api/bayutApi';
import userSlice from './apartmentsSlice'; // пример другого слайса

export const store = configureStore({
  reducer: {
    user: userSlice,
    [bayutApi.reducerPath]: bayutApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bayutApi.middleware), // если используешь RTK Query
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
