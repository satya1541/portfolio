import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    adminId: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { adminId, token } = action.payload;
      state.adminId = adminId;
      state.token = token;
    },
    clearCredentials: (state) => {
      state.adminId = null;
      state.token = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCredentials, clearCredentials, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
