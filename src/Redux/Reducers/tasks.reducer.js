import { createSlice } from "@reduxjs/toolkit";


export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    Notes: [],
    Tasks: []
  },
  reducers: {
    addTodo: (state, action) => {
      if (action.payload) {
        state.tasks.push(action.payload);
      }
    },
    NotesTodo: (state, action) => {
      if (action.payload) {
        state.Notes.push(action.payload);
      }
    },
    TasksTodo: (state, action) => {
      if (action.payload) {
        state.Tasks.push(action.payload);
      }
    },
    deleteTodo: (state) => {
      state.tasks = []
      state.Notes = []
    },
  },
});


// Action creators are generated for each case reducer function
export const { addTodo, NotesTodo, TasksTodo, deleteTodo } = taskSlice.actions;
export default taskSlice.reducer;
