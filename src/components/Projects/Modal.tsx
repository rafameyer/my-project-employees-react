import * as React from 'react';
import { TextField, Button, Modal, Box } from '@mui/material';
import { ButtonWrapperLeft, InputWrapper } from './Styles';

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
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h3>Add new Project</h3>
                    <InputWrapper>
                        <TextField id="outlined-basic" label="Name: " variant="outlined" fullWidth />
                    </InputWrapper>

                    <ButtonWrapperLeft>
                        <Button variant="outlined" style={{ marginLeft: 5 }}>
                            Save
                        </Button>
                        <Button variant="outlined" onClick={handleClose} style={{ marginLeft: 5 }}>
                            Cancel
                        </Button>
                    </ButtonWrapperLeft>
                </Box>
            </Modal>
        </div>
    );
}
