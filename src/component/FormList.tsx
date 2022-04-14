import { Button, Select, Table } from 'antd';
import { ITodo } from '../data-models';
interface IProps {
  data: ITodo[];
  handleDelete: (value: string) => void;
  handleChangeStatus: (value: string, id: string) => void;
}
const FormList = ({ data, handleDelete, handleChangeStatus }: IProps) => {
  const { Option } = Select;

  const getId = (id: string) => {
    handleDelete(id);
  };

  function handleChange(e: any, record: ITodo) {
    const { id } = record;
    handleChangeStatus(e.value, id);
  }

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
          <Select
            labelInValue
            defaultValue={{
              value: status,
            }}
            style={{ color }}
            onChange={(e) => handleChange(e, record)}
          >
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
        return <Button onClick={() => getId(id)}>Delete</Button>;
      },
    },
  ];
  return (
    <div className='table-form'>
      <Table dataSource={data} columns={columns} pagination={false} />
    </div>
  );
};

export default FormList;
