import { useEffect, useState } from 'react';

export default function Posts() {
    const [records, setRecords] = useState([]);
    const pageSize = 10;
    useEffect(() => {
        fetch('http://localhost:3004/students')
            .then((response) => response.json())
            .then((data) => setRecords(data))
            .catch((err) => console.log(err));
    });
    const pageCount = records ? Math.ceil(records.length / pageSize) : 0;
    return (
        <div>
            <center>
                <table className="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>First Name</td>
                            <td>City</td>
                            <td>Gender</td>
                            <td>Country</td>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record) => (
                            <tr key={Math.random()}>
                                <td>{record.ID}</td>
                                <td>{record.FirstName}</td>
                                <td>{record.City}</td>
                                <td>{record.Gender}</td>
                                <td>{record.Country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
            <nav className="d-flex justify-content-center">
                <ul className="pagination">
                    <li className="page-link">1</li>
                    <li className="page-link">2</li>
                    <li className="page-link">3</li>
                </ul>
            </nav>
        </div>
    );
}
