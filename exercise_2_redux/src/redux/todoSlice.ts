import { createSlice } from '@reduxjs/toolkit';
import { ITodo } from '../data-models';
import { v4 as uuidv4 } from 'uuid';
export interface TodoState {
  data: ITodo[];
  isClick: boolean;
  title: string
}

const today = new Date();

const initData = [
  {
    id: uuidv4(),
    title: 'Cooking meal',
    status: 'completed',
    createdDay: today.getDate() - 1 + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
  },
  {
    id: uuidv4(),
    title: 'Wash the dishes',
    status: 'inprogress',
    createdDay: today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
  },
  {
    id: uuidv4(),
    title: 'Clean the floor',
    status: 'notStart',
    createdDay: today.getDate() + 1 + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(),
  },
];

const initialState: TodoState = {
  data: initData,
  title: '',
  isClick: false,
};

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    clearAllTodo: (state) => {
      state.data = [];
    },
    deleteTodo: (state, action) => {
      const newData = state.data.filter((d: ITodo) => {
        return d.id !== action.payload;
      });
      state.data = newData;
    },
    changeStatus: (state, action) => {
      const { status, id } = action.payload;
      const findAndUpdate = state.data.map((item: ITodo) => {
        if (item.id === id) {
          return { ...item, status };
        }
        return { ...item };
      });
      state.data = findAndUpdate;
    },
    filterTodo: (state, action) => {
      state.title = action.payload
    }
  },
});

export const { addTodo, clearAllTodo, deleteTodo, changeStatus, filterTodo } = todoSlice.actions;

export default todoSlice.reducer;
