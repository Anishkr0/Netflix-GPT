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
   addTopRated: (state, action) => {
            state.TopRated = action.payload;
        },
   addUpcoming: (state, action) => {
            state.Upcoming = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload; // Match case
        },
    addtrailerVideo:(state, action)=>{
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addtrailerVideo,addPopularMovies,addTopRated,addUpcoming} = moviesSlice.actions;
export default moviesSlice.reducer;
 