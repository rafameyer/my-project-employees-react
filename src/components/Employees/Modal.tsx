import * as React from 'react';
import { TextField, Button, Modal, Box } from '@mui/material';
import { ButtonWrapperLeft, InputWrapper } from './Styles';
import Select from '../commons/Select';
import RadioGroup from '../commons/RadioGroup';
import DatePicker from '../commons/DatePicker';
import { EmployeeRow } from './Types';

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid darkgray',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props: {
    open: boolean;
    handleClose: () => void;
    save: (item: EmployeeRow) => void;
    remove: () => void;
}) {
    const { open, handleClose, remove, save } = props;
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

    const handleAdd = () => {
        const employee: EmployeeRow = {
            name: '1',
            date: '2',
            role: '3',
            platoon: '4',
            type: '5',
        };
        save(employee);
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h3>Add Employee</h3>
                    <InputWrapper>
                        <TextField id="outlined-basic" label="Name: " variant="outlined" />
                        <DatePicker />
                    </InputWrapper>
                    <InputWrapper>
                        <RadioGroup label="Role" options={roles} />
                        <Select label="Platoon" inputValue={platoon} setValue={setPlatoon} options={platoons} />
                    </InputWrapper>
                    <ButtonWrapperLeft>
                        <Button variant="outlined" onClick={handleClose} style={{ marginLeft: 5 }}>
                            Cancel
                        </Button>
                        <Button variant="outlined" style={{ marginLeft: 5 }} onClick={handleAdd}>
                            Save
                        </Button>
                    </ButtonWrapperLeft>
                </Box>
            </Modal>
        </div>
    );
}
