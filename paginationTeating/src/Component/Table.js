/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
export default function Table() {
    const [records, setRecords] = useState([]);
    const [range, setRange] = useState();
    const classes = useStyles();
    useEffect(() => {
        fetch('http://localhost:3004/students')
            .then((response) => response.json())
            .then((data) => setRecords(data))
            .catch((err) => console.log(err));
    });
    const handleRange = (e) => {
        setRange(e.target.value);
    };
    return (
        <>
            <div>
                <center>
                    <table>
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
                    <div>
                        <select name="" value={range} onBlur={handleRange}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </div>
                    <div>
                        <Pagination count={10} color="primary" />
                    </div>
                </center>
            </div>
        </>
    );
}
