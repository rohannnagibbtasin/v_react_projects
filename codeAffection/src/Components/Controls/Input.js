import { TextField } from '@material-ui/core';

export default function Input({ name, label, value, onChange }) {
    return (
        <TextField variant="outlined" label={label} name={name} value={value} onChange={onChange} />
    );
}
