import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    // eslint-disable-next-line prettier/prettier
    RadioGroup
} from '@material-ui/core';
import React from 'react';
import Controls from '../Components/Controls/Controls';
import { Form, useForm } from '../Components/useForm';
import getDepartmentCollection from '../Services/Service';

const initialFormValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: '',
    departmentId: '',
    hireDate: new Date(),
    isParmanent: false,
};
export default function EmployeeForm() {
    const { values, handleChange } = useForm(initialFormValues);

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        variant="outlined"
                        label="Full Name"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleChange}
                    />
                    <Controls.Input
                        variant="outlined"
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row name="gender" value={values.gender} onChange={handleChange}>
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>

                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleChange}
                        options={getDepartmentCollection()}
                    />

                    <Controls.Checkbox
                        name="isParmanent"
                        label="Permanent Employee"
                        valu={values.isParmanent}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
        </Form>
    );
}
