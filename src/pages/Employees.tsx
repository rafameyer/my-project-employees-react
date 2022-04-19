import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import TableList from '../components/Employees/TableList';
import Modal from '../components/Employees/Modal';
import { ButtonStruct } from './Styles';

const Employees = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <ButtonStruct>
                <Button variant="outlined" startIcon={<AddIcon />} onClick={handleOpen}>
                    Add new Employee
                </Button>
            </ButtonStruct>
            <TableList />
            <Modal open={open} handleClose={handleClose} />
        </div>
    );
};

export default Employees;
