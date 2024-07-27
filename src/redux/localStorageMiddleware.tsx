import { Middleware } from "@reduxjs/toolkit";


export const localStorageMiddleware: Middleware = (store) => (next) => (action:any) => {
    const result = next(action);

    if(['todo/createTodo','todo/removeTodoById','todo/updateTodoById'].includes(action.type)){
        const todoState = store.getState().todo;
        localStorage.setItem('todos',JSON.stringify(todoState.todos));
    }
    return result;
}