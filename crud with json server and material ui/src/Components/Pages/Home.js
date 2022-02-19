import {
    Box,
    Button,
    Grid,
    makeStyles,
    TextField,
    // eslint-disable-next-line prettier/prettier
    Typography
} from '@material-ui/core';
import { deepPurple, green, orange } from '@material-ui/core/colors';
import axios from 'axios';
import { useState } from 'react';
import List from '../Student/List';

const useStyles = makeStyles({
    headingColor: {
        backgroundColor: deepPurple[300],
        color: 'white',
    },
    addStuColor: {
        backgroundColor: green[300],
        color: 'white',
    },
    stuListColor: {
        backgroundColor: orange[300],
        color: 'white',
    },
    tableHeadCell: {
        color: 'White',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default function Home() {
    const [student, setStudent] = useState({ stuname: '', email: '' });
    const [status, setStatus] = useState(false);
    const classes = useStyles();
    const onTextFieldChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };
    async function onFormSubmit(e) {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3300/students`, student);
            setStatus(true);
        } catch (err) {
            console.log(err);
        }
    }
    if (status) {
        return <Home />;
    }
    return (
        <>
            <Box textAlign="center" mb={2} className={classes.headingColor} p={2}>
                <Typography varient="h1">React Crud With Api Call</Typography>
            </Box>
            <Grid container spacing={4} justifyContent="center">
                <Grid item md={6} xs={12}>
                    <Box textAlign="center" className={classes.addStuColor} p={2} mb={2}>
                        <Typography varient="h4">Add Student</Typography>
                    </Box>
                    <form noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="stuname"
                                    name="stuname"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="stuname"
                                    label="Name"
                                    value={student.stuname}
                                    onChange={(e) => onTextFieldChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="email"
                                    name="email"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    value={student.email}
                                    onChange={(e) => onTextFieldChange(e)}
                                />
                            </Grid>
                        </Grid>
                        <Box m={3}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={(e) => onFormSubmit(e)}
                            >
                                Add
                            </Button>
                        </Box>
                    </form>
                </Grid>
                <Grid item md={6} xs={12}>
                    <List />
                </Grid>
            </Grid>
        </>
    );
}
