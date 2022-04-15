import { v4 as uuidv4 } from 'uuid';
import { ITodo } from '../data-models';
const today = new Date();
interface ITodoState {
  data: ITodo[];
  title: string;
}

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

const initialState: ITodoState = {
  data: initData,
  title: '',
};

const reducer = (state: ITodoState, action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newData = [...state.data, action.payload];
      return { ...state, data: newData };
    case 'DELETE_TODO':
      const deleteTODO = state.data.filter((data: any) => {
        return data.id !== action.payload;
      });
      return { ...state, data: deleteTODO };
    case 'DELETE_ALL_TODO':
      return { ...state, data: [] };
    case 'DELETE_ALL_TODO':
      return { ...state, data: [] };
    default:
      throw new Error(`Unhandled  action type ${action.type}`);
  }
};

export { reducer, initialState };
