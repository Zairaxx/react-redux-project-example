import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRandomUser = createAsyncThunk(
  "employees/getRandomUser",
  async () => {
    let response = await axios.get("https://randomuser.me/api");
    console.log(response);
    return response.data;
  }
);

const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [
      {
        name: {
          title: "Ms",
          first: "Elvira",
          last: "Solorzano",
        },
      },
    ],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
  extraReducers: {
    [getRandomUser.fulfilled]: (state, action) => {
      state.employees.push(action.payload.results[0]);
    },
  },
});

export default employeeSlice.reducer;

export const addEmployee = employeeSlice.actions.addEmployee;
