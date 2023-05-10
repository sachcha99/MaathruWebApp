import { createSlice } from "@reduxjs/toolkit";

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    value: {},
    userDetails: {},
  },
  reducers: {
    
    newAppointment: (state, action) => {
      // state.value = action.payload;
      state.value =  {...state.value, data:action.payload} 
    },
   
  },
});
export const {
  newAppointment,
} = appointmentSlice.actions;
export default appointmentSlice.reducer;
