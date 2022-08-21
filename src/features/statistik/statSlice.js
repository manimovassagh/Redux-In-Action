import { createSlice } from "@reduxjs/toolkit";

export const statSlice = createSlice({
  name: "stat",
  initialState: {
    value: "H2%67530986Ü",
  },
  reducers: {
    changeStat: (state) => {
        if(state.value ==='H2%67530986Ü'){
            state.value = "The value is ok lkoä8768";
        }
        else {
            state.value='H2%67530986Ü'
        }
    },

  
  },
});

export const { changeStat } = statSlice.actions;

export default statSlice.reducer;
