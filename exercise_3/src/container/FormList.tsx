import { Button, Select, Table } from 'antd';
import { useContext } from 'react';
import { DataContext } from '../App';
import { IContext, ITodo, IUser } from '../data-models';

const FormList = ({ user_Id, todoList }: IUser) => {
  const { Option } = Select;
  const { handleChangeStatus, handleDelete }: IContext = useContext(DataContext);

  const onChangeStatus = (e: any, record: any, user_Id: any) => {
    handleChangeStatus(e.value, record.id, user_Id);
  };

  const onDelete = (id: string, user_Id: number | string) => {
    handleDelete(id, user_Id);
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
          <Select labelInValue defaultValue={{ value: status }} style={{ color }} onChange={(e) => onChangeStatus(e, record, user_Id)}>
            <Option value='notStart'>Not Start</Option>
            <Option value='inprogress'>Inprogress</Option>
            <Option value='completed'>Completed</Option>
          </Select>
        );
      },
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
        return <Button onClick={() => onDelete(id, user_Id)}>Delete</Button>;
      },
    },
  ];

  return (
    <div className='table-form'>
      <Table dataSource={todoList} columns={columns} pagination={false} rowKey='id' />
    </div>
  );
};

export default FormList;
