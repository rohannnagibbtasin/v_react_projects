import { Table } from 'antd';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((reponse) => reponse.json())
            .then((data) => {
                setDataSource(data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const columns = [
        {
            key: '1',
            title: 'Id',
            dataIndex: 'id',
        },
        {
            key: '2',
            title: 'User ID',
            dataIndex: 'userId',
        },
        {
            key: '3',
            title: 'Status',
            dataIndex: 'completed',
            render: (completed) => <p>{completed ? 'Complete' : 'In Progress'}</p>,
        },
    ];
    return (
        <div className="App">
            <header className="App-header">
                <Table loading={loading} columns={columns} dataSource={dataSource} />
            </header>
        </div>
    );
}

export default App;
