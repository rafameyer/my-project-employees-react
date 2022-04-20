import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import TableList from '../components/Employees/TableList';
import Modal from '../components/Employees/Modal';
import { ButtonStruct } from './Styles';
import { EmployeeRow } from '../components/Employees/Types';

const Employees = () => {
    const [employees, setEmployees] = React.useState<EmployeeRow[]>([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        const createData = (name: string, date: string, role: string, platoon: string, type: string): EmployeeRow => ({
            name,
            date,
            role,
            platoon,
            type,
        });

        const rows = [
            createData('Giacomo Guilizzani', '28-02-2010', 'SE', 'Alchemists', 'Projects'),
            createData('Marco Botton', '31-12-1999', 'TM', 'Spartans', 'Projects'),
            createData('Mariah Maclachlan', '25-09-2107', 'JE', 'BigBang', 'Projects'),
        ];

        setEmployees(rows);
    }, []);

    const addNewEmployee = (employee: EmployeeRow) => {
        employees.push(employee);
    };

    const remove = () => {};

    return (
        <div>
            <ButtonStruct>
                <Button variant="outlined" startIcon={<AddIcon />} onClick={handleOpen}>
                    Add new Employee
                </Button>
            </ButtonStruct>
            <TableList employees={employees} />
            <Modal open={open} handleClose={handleClose} save={addNewEmployee} remove={remove} />
        </div>
    );
};

export default Employees;
