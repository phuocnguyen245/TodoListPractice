import { Button, Select, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ITodo } from '../data-models';
import { RootState } from '../redux/store';
import { changeStatus, deleteTodo } from '../redux/todoSlice';

const FormList = () => {
  const dispatch = useDispatch();
  const { Option } = Select;

  const dataInRedux = useSelector((state: RootState) => state.todo.data);

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleChangeStatus = (e: any, record: ITodo) => {
    dispatch(changeStatus({ status: e.value, id: record.id }));
  };

  const columns = [
    {
      title: 'Index',
      dataIndex: 'id',
      key: 'id',
      render: (item: number, record: ITodo, index: number) => <>{index + 1}</>,
    },
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string, record: ITodo) => {
        let color = '';
        status === 'completed' ? (color = 'green') : status === 'notStart' ? (color = 'gray') : (color = 'blue');
        return (
          <Select labelInValue defaultValue={{ value: status }} style={{ color }} onChange={(e) => handleChangeStatus(e, record)}>
            <Option value='notStart'>Not Start</Option>
            <Option value='inprogress'>Inprogress</Option>
            <Option value='completed'>Completed</Option>
          </Select>
        );
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDay',
      key: 'createdDay',
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'id',
      render: (id: string, record: ITodo, index: number) => {
        return <Button onClick={() => handleDelete(id)}>Delete</Button>;
      },
    },
  ];
  return (
    <div className='table-form'>
      <Table dataSource={dataInRedux} columns={columns} pagination={false} rowKey='id' />
    </div>
  );
};

export default FormList;
