import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface Option {
    label: string;
    value: string;
}

export default function RadioButtonsGroup(props: {
    label: string;
    options: Option[];
    value: string;
    handleChange: (value: string) => void;
}) {
    const { label, options, value, handleChange } = props;

    const updateSelection = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
        handleChange(value);
    };

    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
            <RadioGroup
                value={value}
                onChange={updateSelection}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                {options.map((item, index) => (
                    <FormControlLabel key={index} value={item.value} control={<Radio />} label={item.label} />
                ))}
            </RadioGroup>
        </FormControl>
    );
}
