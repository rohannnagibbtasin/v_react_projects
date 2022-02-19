import {
    Box,
    Button,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    // eslint-disable-next-line prettier/prettier
    Typography
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

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

export default function View() {
    const [students, setStudents] = useState([]);
    const history = useHistory();
    const { id } = useParams();
    const classes = useStyles();

    useEffect(() => {
        async function getStudents() {
            try {
                const r = await axios.get(`http://localhost:3300/students/${id}`);
                setStudents(r.data);
            } catch (err) {
                console.log(err);
            }
        }
        getStudents();
    }, [id]);
    const handleClick = () => {
        history.push('/');
    };
    return (
        <>
            <Box textAlign="center" p={2} className={classes.stuListColor}>
                <Typography variant="h4">Student Detail</Typography>
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">{students.id}</TableCell>
                            <TableCell align="center">{students.stuname}</TableCell>
                            <TableCell align="center">{students.email}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box m={3} textAlign="center">
                <Button variant="contained" color="primary" onClick={handleClick}>
                    Back to Home
                </Button>
            </Box>
        </>
    );
}
