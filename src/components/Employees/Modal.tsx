import * as React from 'react';
import { TextField, Button, Modal, Box } from '@mui/material';
import { ButtonWrapperLeft, InputWrapper } from './Styles';
import Select from '../commons/Select';

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

export default function BasicModal(props: { open: boolean; handleClose: () => void }) {
    const { open, handleClose } = props;
    const [platoon, setPlatoon] = React.useState('');
    const platoons = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
    ];
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
                        <TextField id="outlined-basic" label="Name: " variant="outlined" fullWidth />
                    </InputWrapper>
                    <InputWrapper>
                        <TextField id="outlined-basic" label="Start Date: " variant="outlined" fullWidth />
                    </InputWrapper>
                    <InputWrapper>
                        <TextField id="outlined-basic" label="Role: " variant="outlined" fullWidth />
                    </InputWrapper>
                    <InputWrapper>
                        <Select label="Platoon" inputValue={platoon} setValue={setPlatoon} options={platoons} />
                    </InputWrapper>

                    <ButtonWrapperLeft>
                        <Button variant="outlined" onClick={handleClose} style={{ marginLeft: 5 }}>
                            Cancel
                        </Button>
                        <Button variant="outlined" style={{ marginLeft: 5 }}>
                            Save
                        </Button>
                    </ButtonWrapperLeft>
                </Box>
            </Modal>
        </div>
    );
}
