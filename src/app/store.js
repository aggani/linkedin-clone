import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

// userReducer 
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
  // user gonna have a userSlice core which it'll pull from userReducer