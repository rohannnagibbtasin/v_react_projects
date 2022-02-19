import { FormControl, FormControlLabel } from '@material-ui/core';
import React from 'react';

export default function Checkbox({ name, label, value, onChange }) {
    return (
        <FormControl>
            <FormControlLabel
                control={
                    <Checkbox name={name} color="primary" checked={value} onChange={onChange} />
                }
                label={label}
            />
        </FormControl>
    );
}
