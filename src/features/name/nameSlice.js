import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "name",
  initialState: {
    value: "Yasin",
  },
  reducers: {
    changeName: (state) => {
        if(state.value ==='Yasin'){
            state.value = "Mani";
        }
        else {
            state.value='Yasin'
        }
    },

    showByGivenName: (state, action) => {
        state.value = action.payload
      },
  },
});

export const { changeName,showByGivenName } = nameSlice.actions;

export default nameSlice.reducer;
