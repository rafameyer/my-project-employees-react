import * as React from 'react';
import { Button, Modal, Box } from '@mui/material';
import { ButtonWrapperLeft } from './Styles';
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

export default function DeleteModal(props: {
    open: boolean;
    employee: EmployeeRow;
    handleClose: () => void;
    remove: (el: EmployeeRow) => void;
}) {
    const { open, handleClose, remove, employee } = props;

    const handleRemove = () => {
        handleClose();
        remove(employee);
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
                    <h3>Delete Employee</h3>
                    <span>Are you sure want to delete this Employee?</span>
                    <ButtonWrapperLeft>
                        <Button variant="outlined" onClick={handleClose} style={{ marginLeft: 5 }}>
                            Cancel
                        </Button>
                        <Button variant="outlined" style={{ marginLeft: 5 }} onClick={handleRemove}>
                            Deletar
                        </Button>
                    </ButtonWrapperLeft>
                </Box>
            </Modal>
        </div>
    );
}
