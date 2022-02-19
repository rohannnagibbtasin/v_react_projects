import { FormControl, FormControlLabel, FormLabel, Radio } from '@material-ui/core';
import React from 'react';

export default function RadioGroup({ name, label, value, onChange, items }) {
    console.log(items);
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <RadioGroup row name={name} value={value} onChange={onChange}>
                {items.map((item) => (
                    <FormControlLabel
                        key={item.id}
                        value={item.id}
                        control={<Radio />}
                        label={item.title}
                    />
                ))}
                <FormControlLabel
                    key={items[0].id}
                    value={items[0].id}
                    control={<Radio />}
                    label={items[0].title}
                />
            </RadioGroup>
        </FormControl>
    );
}
