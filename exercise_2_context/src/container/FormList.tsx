import { Button, Select, Table } from 'antd';
import { useEffect, useState } from 'react';
import { ITodo } from '../data-models';
import { deleteTodo } from '../store/action';

const FormList = ({ dataInStore, dispatch }: { dataInStore: any; dispatch: any }) => {
  const { Option } = Select;

  const [data, setData] = useState<ITodo[]>();

  console.log(dataInStore);

  useEffect(() => {
    setData(dataInStore);
  }, [dataInStore]);

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleChangeStatus = (e: any, record: ITodo) => {
    // dispatch(changeStatus({ status: e.value, id: record.id }));
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
      <Table dataSource={data} columns={columns} pagination={false} rowKey='id' />
    </div>
  );
};

export default FormList;
