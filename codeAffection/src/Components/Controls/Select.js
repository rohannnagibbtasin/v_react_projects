import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import React from 'react';

export default function Select({ name, label, value, onChange, options }) {
    return (
        <FormControl variant="outlined">
            <InputLabel>{label}</InputLabel>
            <MuiSelect label={label} name={name} value={value} onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {options.map((item) => (
                    <MenuItem key={Math.random()} value={item.id}>
                        {item.title}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
}
