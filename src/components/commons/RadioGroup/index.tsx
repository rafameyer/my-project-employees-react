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

export default function RadioButtonsGroup(props: { label: string; options: Option[] }) {
    const { label, options } = props;
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
            <RadioGroup
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
