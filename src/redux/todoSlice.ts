import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoInitialState, TodoType } from "../types/Types";

const loadTodosFromLocalStorage = (): TodoType[] =>{
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
}

const initialState: TodoInitialState = {
    todos: loadTodosFromLocalStorage(),
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>)=>{
            state.todos = [...state.todos,action.payload];
        },
        removeTodoById: (state: TodoInitialState,action:PayloadAction<number>)=>{
            state.todos = [...state.todos.filter((todo:TodoType) => todo.id !== action.payload)]
        },
        updateTodoById: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
             state.todos = [...state.todos.map((todo:TodoType) => todo.id !== action.payload.id ? todo : action.payload)]
        }
    }
});

export const {createTodo,removeTodoById,updateTodoById} = todoSlice.actions
export default todoSlice.reducer