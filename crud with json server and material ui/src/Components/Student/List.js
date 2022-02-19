import {
    Box,
    IconButton,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    // eslint-disable-next-line prettier/prettier
    Typography
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    stuListColor: {
        backgroundColor: orange[400],
        color: 'white',
    },
    tableHeadCell: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
function List() {
    const [students, setStudents] = useState([]);

    async function getAllStudents() {
        try {
            const r = await axios.get('http://localhost:3300/students');
            setStudents(r.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getAllStudents();
    }, []);
    const classes = useStyles();
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3300/students/${id}`);
        const newStudent = students.filter((item) => item.id !== id);
        setStudents(newStudent);
    };
    return (
        <>
            <Box textAlign="center" className={classes.stuListColor} p={2} mb={2}>
                <Typography varient="h4">Student List</Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#616161' }}>
                            <TableCell align="center" className={classes.tableHeadCell}>
                                No
                            </TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>
                                Name
                            </TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>
                                Email
                            </TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student, i) => (
                            <TableRow key={Math.random()}>
                                <TableCell align="center">{i + 1}</TableCell>
                                <TableCell align="center">{student.stuname}</TableCell>
                                <TableCell align="center">{student.email}</TableCell>
                                <TableCell align="center">
                                    <Tooltip title="View">
                                        <IconButton>
                                            <Link to={`view/${i + 1}`}>
                                                <VisibilityIcon color="primary" />
                                            </Link>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Edit">
                                        <IconButton>
                                            <Link to={`edit/${i + 1}`}>
                                                <EditIcon />
                                            </Link>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton onClick={() => handleDelete(student.id)}>
                                            <DeleteIcon color="secondary" />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default List;
