import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'store';
import { TAppSize, TStatus } from 'types';
import { toFixedNumber } from 'utils';

type TState = {
  refreshDOM: number;
} & TStatus &
  TAppSize;

const initialState: TState = {
  refreshDOM: 0,
  status: 'IDLE',
  width: window.innerWidth,
  height: window.innerHeight,
};

export const refreshDOM = createAsyncThunk(
  'app/refreshDOM',
  (num?: number) => num ?? toFixedNumber(Math.random()),
);

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    resetApp: () => initialState,
    setStatus: (state, action: PayloadAction<typeof initialState.status>) => {
      state.status = action.payload;
    },
    setSize: (state, action: PayloadAction<TAppSize>) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(refreshDOM.pending, (state) => {
        state.status = 'LOADING';
      })
      .addCase(refreshDOM.fulfilled, (state, action) => {
        state.status = 'IDLE';
        state.refreshDOM = action.payload;
      })
      .addCase(refreshDOM.rejected, (state) => {
        state.status = 'FAILED';
      });
  },
});

export const { setStatus, setSize, resetApp } = appSlice.actions;

export const selectApp = (state: RootState) => state.app;
export const selectAppStatus = (state: RootState) => state.app.status;

export const setAppStatus =
  (status: typeof initialState.status): AppThunk =>
  (dispatch, getState) => {
    const currentStatus = selectAppStatus(getState());
    if (currentStatus !== status) {
      dispatch(setStatus(status));
    }
  };

export const setAppSize =
  (size: TAppSize): AppThunk =>
  (dispatch, getState) => {
    const app = selectApp(getState());

    if (app.width !== size.width || app.height !== size.height) {
      dispatch(setSize(size));
    }
  };

export const appReducer = appSlice.reducer;
