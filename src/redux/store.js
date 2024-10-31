import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { newsReducer } from './news/newsSlice';
import { friendsReducer } from './friends/friendsSlice';
import { noticesReducer } from './notices/noticesSlice';
import { favoritesReducer } from './favorites/favoritesSlice';
import { userProfileReducer } from './userProfile/userProfileSlice';

const authPersist = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const favoritesPersist = {
  key: 'favorites',
  storage,
  whitelist: ['viewedNotices'],
};

const userAvatarPersist = {
  key: 'userProfile',
  storage,
  whitelist: ['userAvatar'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersist, authReducer),
    news: newsReducer,
    friends: friendsReducer,
    notices: noticesReducer,
    favorites: persistReducer(favoritesPersist, favoritesReducer),
    userProfile: persistReducer(userAvatarPersist, userProfileReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
