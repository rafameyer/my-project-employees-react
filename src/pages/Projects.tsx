import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import TableList from '../components/Projects/TableList';
import { ButtonStruct } from './Styles';
import Modal from '../components/Projects/Modal';

const Projects = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <ButtonStruct>
                <Button variant="outlined" startIcon={<AddIcon />} onClick={handleOpen}>
                    Add new Project
                </Button>
            </ButtonStruct>
            <TableList />
            <Modal open={open} handleClose={handleClose} />
        </div>
    );
};

export default Projects;
