import * as React from 'react';
import { TextField, Button, Modal, Box } from '@mui/material';
import { nanoid } from 'nanoid';
import { ButtonWrapperLeft, InputWrapper } from './Styles';
import { ProjectRow } from './Types';
import { modalStyle } from '../../styles/Styles';

export default function BasicModal(props: {
    project?: ProjectRow;
    open: boolean;
    handleClose: () => void;
    save: (item: ProjectRow) => void;
}) {
    const { open, handleClose, project, save } = props;

    const [name, setName] = React.useState('');

    React.useEffect(() => {
        setName(project?.name ?? name);
    }, [project]);

    const handleSave = () => {
        const newProject: ProjectRow = {
            id: nanoid(),
            name,
            type: 'Employees',
        };
        save(newProject);
        handleClose();
    };

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setName(value);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <h3>Add new Project</h3>
                <InputWrapper>
                    <TextField
                        id="outlined-basic"
                        label="Name: "
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={handleChangeName}
                    />
                </InputWrapper>

                <ButtonWrapperLeft>
                    <Button variant="outlined" onClick={handleClose} style={{ marginLeft: 5 }}>
                        Cancel
                    </Button>
                    <Button variant="outlined" onClick={handleSave} style={{ marginLeft: 5 }}>
                        Save
                    </Button>
                </ButtonWrapperLeft>
            </Box>
        </Modal>
    );
}
