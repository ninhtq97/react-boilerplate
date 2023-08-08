import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMe } from 'apis';
import { RootState } from 'store';
import { TMe, TStatus } from 'types';

type TState = { me?: TMe } & TStatus;

const initialState: TState = { me: undefined, status: 'IDLE' };

export const fetchMeAsync = createAsyncThunk('auth/me', async () => {
  const res = await fetchMe();
  return res;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth: () => initialState,
    setMe: (state, action: PayloadAction<typeof initialState.me>) => {
      state.me = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeAsync.pending, (state) => {
        state.status = 'LOADING';
      })
      .addCase(fetchMeAsync.fulfilled, (state, action) => {
        state.status = 'IDLE';
        state.me = action.payload;
      })
      .addCase(fetchMeAsync.rejected, (state) => {
        state.status = 'FAILED';
      });
  },
});

export const { resetAuth, setMe } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;
export const selectMe = (state: RootState) => state.auth.me;

export const authReducer = authSlice.reducer;
