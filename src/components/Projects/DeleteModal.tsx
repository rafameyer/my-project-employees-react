import * as React from 'react';
import { Button, Modal, Box } from '@mui/material';
import { ButtonWrapperLeft } from './Styles';
import { ProjectRow } from './Types';

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
    project: ProjectRow;
    handleClose: () => void;
    remove: (el: ProjectRow) => void;
}) {
    const { open, project, handleClose, remove } = props;

    const handleRemove = () => {
        handleClose();
        remove(project);
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
                    <span>Are you sure want to delete this Project?</span>
                    <ButtonWrapperLeft>
                        <Button variant="outlined" style={{ marginLeft: 5 }} onClick={handleClose}>
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
