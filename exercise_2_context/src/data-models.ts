export interface ITodo {
  id: string;
  title: string;
  status: string;
  createdDay: string;
}
export interface IContext {
  data?: ITodo[];
  setData?: any;
  title?: string;
  setTitle?: any;
  dataSource?: any;
}