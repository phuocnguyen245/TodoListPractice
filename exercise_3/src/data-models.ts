export interface ITodo {
  id: string;
  title: string;
  status: string;
  createdDay: string;
}

export interface IUser {
  user_Id: number;
  todoList: ITodo[];
}

export interface IContext {
  data?: IUser[];
  todoList?: IUser[];
  setData?: any;
  handleFilter?: (id: number, title: string) => void;
  btnDetail?: {
    id: number;
    title: string;
  };
  handleAdd?: (id: number, title: string) => void;
  handleClear?: (user_Id: number) => void;
  handleChangeStatus?: (status: string, id: string, user_Id: number) => void;
  handleDelete?: (id: string, user_Id: number) => void;
}

