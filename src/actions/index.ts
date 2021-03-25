import { ActionCreator, SubmittedTodoItem } from '../types';

export const addTodo: ActionCreator<SubmittedTodoItem> = (payload) => ({
  type: 'ADD_TODO',
  payload,
});

export const completeTodoItem: ActionCreator<number> = (payload) => ({
  type: 'COMPLETE_TODO',
  payload,
});

export const removeTodo: ActionCreator<number> = (payload) => ({
  type: 'REMOVE_TODO',
  payload,
});
