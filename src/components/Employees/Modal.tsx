import * as React from 'react';
import { TextField, Button, Modal, Box } from '@mui/material';
import { nanoid } from 'nanoid';
import { ButtonWrapperLeft, InputWrapper } from './Styles';
import Select from '../commons/Select';
import RadioGroup from '../commons/RadioGroup';
import DatePicker from '../commons/DatePicker';
import { EmployeeRow } from './Types';
import { modalStyle } from '../../styles/Styles';

interface IProps {
    employee?: EmployeeRow;
    open: boolean;
    handleClose: () => void;
    save: (item: EmployeeRow) => void;
}

export default function BasicModal(props: IProps) {
    const { open, handleClose, save, employee } = props;
    // add all state in one element
    const [name, setName] = React.useState('');
    const [role, setRole] = React.useState('');
    const [date, setDate] = React.useState<Date | null>(new Date(''));
    const [platoon, setPlatoon] = React.useState('');

    const platoons = [
        { label: 'Alchemists', value: 'Alchemists' },
        { label: 'Spartans', value: 'Spartans' },
        { label: 'BigBang', value: 'BigBang' },
    ];
    const roles = [
        { label: 'none selected', value: 'none' },
        { label: 'JE', value: 'JE' },
        { label: 'PE', value: 'PE' },
        { label: 'SE', value: 'SE' },
        { label: 'TM', value: 'TM' },
    ];

    const handleSave = () => {
        const newEmployee: EmployeeRow = {
            id: nanoid(),
            name,
            date: String(date?.toLocaleDateString()),
            role,
            platoon,
            type: 'Projects',
        };
        save(newEmployee);
        handleClose();
    };

    const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setName(value);
    };

    const handleChangeDate = (newValue: Date | null) => {
        setDate(newValue);
    };

    const handleChangeRole = (value: string) => {
        setRole(value);
    };

    React.useEffect(() => {
        setName(employee?.name ?? name);
        setRole(employee?.role ?? role);
        setDate(new Date(employee?.date as string) ?? date);
        setPlatoon(employee?.platoon ?? platoon);
    }, [employee]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <h3>Add Employee</h3>
                <InputWrapper>
                    <TextField
                        id="outlined-basic"
                        label="Name: "
                        variant="outlined"
                        value={name}
                        onChange={handleOnChangeName}
                    />
                    <DatePicker value={date} handleChange={(value) => handleChangeDate(value)} />
                </InputWrapper>
                <InputWrapper>
                    <RadioGroup label="Role" value={role} handleChange={handleChangeRole} options={roles} />
                    <Select label="Platoon" inputValue={platoon} setValue={setPlatoon} options={platoons} />
                </InputWrapper>
                <ButtonWrapperLeft>
                    <Button variant="outlined" style={{ marginLeft: 5 }} onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="outlined" style={{ marginLeft: 5 }} onClick={handleSave}>
                        Save
                    </Button>
                </ButtonWrapperLeft>
            </Box>
        </Modal>
    );
}
