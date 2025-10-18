import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
     
name:"gpt",
initialState:{
    showGptSearch:false,
},
reducers:{
    toogleGptSerchView:(state)=>{
        state.showGptSearch = !state.showGptSearch;
    }
}
})
export const{ toogleGptSerchView}=gptSlice.actions;
export default gptSlice.reducer;


