import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk (no error handling)
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    return await response.json();
  }
);

// Initial state
const initialState = {
  data: null
};

// Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export default userSlice.reducer;