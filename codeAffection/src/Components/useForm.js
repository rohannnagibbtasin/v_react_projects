import { makeStyles } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1),
        },
    },
}));
export function useForm(initialFormValues) {
    const [values, setValues] = useState(initialFormValues);
    const handleChange = (e) => {
        const [name, value] = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    return {
        values,
        handleChange,
    };
}

export function Form({ children }) {
    const classes = useStyles();
    return (
        <form className={classes.root} autoComplete="off">
            {children}
        </form>
    );
}
