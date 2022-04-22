import * as React from 'react';
import { Button, Modal, Box } from '@mui/material';
import { ButtonWrapperLeft } from './Styles';
import { ProjectRow } from './Types';
import { modalStyle } from '../../styles/Styles';

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
                <Box sx={modalStyle}>
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
