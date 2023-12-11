import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import taskReducer from "./Reducers/tasks.reducer";

const store = configureStore({

    reducer: {
        tasksReducer: taskReducer,
    },
});

export default store