import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    //for Custom hook of PopularMovies
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addtrailerVideo:(state, action)=>{
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addtrailerVideo,addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
 