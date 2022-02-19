import { Box, Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { deepPurple, green } from '@material-ui/core/colors';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const useStyles = makeStyles({
    headingColor: {
        backgroundColor: deepPurple[400],
        color: 'white',
    },
    addStuColor: {
        backgroundColor: green[400],
        color: 'white',
    },
});

export default function Edit() {
    const [student, setStudents] = useState({ stuname: '', email: '' });
    const { id } = useParams();
    const classes = useStyles();
    const history = useHistory();
    const handleClick = () => {
        history.push('/');
    };
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

    async function onFormSubmit(e) {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3300/students/${id}`, student);
        } catch (err) {
            console.log(err);
        }
    }

    const onTextFieldChange = (e) => {
        setStudents({ ...student, [e.target.name]: e.target.value });
    };
    return (
        <>
            <Box textAlign="center" p={2} className={classes.headingColor} mb={2}>
                <Typography variant="h2">React CRUD with API Call</Typography>
            </Box>

            <Grid container justifyContent="center" spacing={4}>
                <Grid item md={6} xs={12}>
                    <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
                        <Typography variant="h4">Edit Student</Typography>
                    </Box>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="id"
                                    name="id"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="id"
                                    label="ID"
                                    autoFocus
                                    value={id}
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
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
                                type="button"
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={(e) => onFormSubmit(e)}
                            >
                                {' '}
                                Update{' '}
                            </Button>
                        </Box>
                    </form>
                    <Box m={3} textAlign="center">
                        <Button variant="contained" color="primary" onClick={handleClick}>
                            Back to Home
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
