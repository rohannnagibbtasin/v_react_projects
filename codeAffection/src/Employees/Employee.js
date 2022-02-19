import { makeStyles, Paper, TableBody, TableCell, TableRow } from '@material-ui/core';
import { PeopleOutlineTwoTone } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import PageHeader from '../Components/PageHeader';
import useTable from '../Components/useTable';

const useStyles = makeStyles((theme) => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}));
export default function Employee() {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((reponse) => reponse.json())
            .then((data) => {
                console.log(data);
                setRecords(data);
            });
    }, []);

    const headCells = [
        { id: 'id', label: 'Employee Id' },
        { id: 'name', label: 'Name' },
        { id: 'email', label: 'Email' },
        { id: 'phone', label: 'Phone' },
    ];
    const classes = useStyles();
    const { TblContainer, TblHead, TablePagination } = useTable(records, headCells);
    return (
        <>
            <PageHeader
                title="New Employee"
                subTitle="Form design with validation"
                icon={<PeopleOutlineTwoTone fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                {/* <EmployeeForm /> */}{' '}
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {records.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TblContainer>{' '}
                <TablePagination />
            </Paper>
        </>
    );
}
