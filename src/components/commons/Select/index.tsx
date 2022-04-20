import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Option {
    label: string;
    value: string;
}

export default function BasicSelect(props: {
    label: string;
    inputValue: string;
    setValue: (value: string) => void;
    options: Option[];
}) {
    const { label, inputValue, setValue, options } = props;
    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    };

    return (
        <Box>
            <FormControl fullWidth sx={{ minWidth: 200, width: 'auto' }}>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={inputValue}
                    label={label}
                    onChange={handleChange}
                >
                    {options.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                            {item.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
