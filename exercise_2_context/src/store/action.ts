import { ITodo } from '../data-models';

export const addTodo = (payload: ITodo) => ({
  type: 'ADD_TODO',
  payload,
});

export const deleteTodo = (payload: string) => ({
  type: 'DELETE_TODO',
  payload,
});
