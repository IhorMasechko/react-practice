import { createAction, createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      return [...state, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeTodo, (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, status: !todo.status } : todo
      );
    });
  },
});

export const { addTodo } = todosSlice.actions;

export const changeTodo = createAction("changeTodo");
export default todosSlice.reducer;
