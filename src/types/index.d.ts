export interface TodoItem {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

export interface AppState {
  todos: TodoItem[];
}

export interface Action {
  type: 'ADD_TODO' | 'COMPLETE_TODO' | 'REMOVE_TODO';
  payload: any;
}

export type SubmittedTodoItem = Omit<TodoItem, 'id' | 'isCompleted'>;
export type ActionCreator<Type> = (payload: Type) => Action;
