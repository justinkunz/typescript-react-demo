import { AppState, TodoItem, Action } from '../types';

const initialState: AppState = {
  todos: [],
};

const reducer = (state: AppState = initialState, action: Action) => {
  const todosCopy: TodoItem[] = [...state.todos];
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        ...action.payload,
        id: state.todos.length + 1,
        isCompleted: false,
      } as TodoItem;

      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case 'COMPLETE_TODO':
      const completedIndex = state.todos.findIndex((todo) => todo.id === action.payload);

      if (completedIndex > -1) {
        todosCopy[completedIndex] = { ...todosCopy[completedIndex], isCompleted: true };
      }

      return {
        ...state,
        todos: todosCopy,
      };

    case 'REMOVE_TODO':
      const todoToRemoveIndex = todosCopy.findIndex((todo) => todo.id === action.payload);
      todosCopy.splice(todoToRemoveIndex, 1);

      return {
        ...state,
        todos: todosCopy,
      };

    default:
      return state;
  }
};

export default reducer;
