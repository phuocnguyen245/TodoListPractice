import { Button, Select, Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../App';
import { IContext, ITodo } from '../data-models';

const today = new Date();

const FormList = () => {
  const { Option } = Select;
  const { data, setData, title: btnTitle }: IContext = useContext(DataContext);

  const [dataSource, setDataSource] = useState(data);

  useEffect(() => {
    if (btnTitle === 'today') {
      const filter = data?.filter((d: ITodo) => {
        return d?.createdDay === today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
      });
      setDataSource(filter);
    } else if (btnTitle === 'nextDay') {
      const filter = data?.filter((d: ITodo) => {
        return d.createdDay > today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
      });
      setDataSource(filter);
    } else if (btnTitle === 'lastDay') {
      const filter = data?.filter((d: ITodo) => {
        return d.createdDay < today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
      });
      setDataSource(filter);
    } else {
      setDataSource(data);
    }
  }, [btnTitle, data]);

  const handleDelete = (id: string) => {
    const newData = data?.filter((d: ITodo) => d.id !== id);
    setData(newData);
  };

  const handleChangeStatus = (e: any, record: ITodo) => {
    const updateStatus = data?.map((d: ITodo) => {
      if (d.id === record.id) {
        return { ...d, status: e.value };
      }
      return { ...d };
    });
    setData(updateStatus);
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
      <Table dataSource={dataSource} columns={columns} pagination={false} rowKey='id' />
    </div>
  );
};

export default FormList;
