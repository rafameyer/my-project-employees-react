import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import { ButtonWrapper, ButtonStruct } from './Styles';
import EditModal from './Modal';
import DeleteModal from './DeleteModal';
import { EmployeeRow } from './Types';

export default function TableList(props: {
    employees: EmployeeRow[];
    remove: (el: EmployeeRow) => void;
    editEmployee: (employees: EmployeeRow) => void;
}) {
    const { employees, remove, editEmployee } = props;

    const [rowSelected, setRowSelected] = React.useState<EmployeeRow>();
    const [openEditModal, setOpenEditModal] = React.useState(false);
    const handleCloseEditModal = () => setOpenEditModal(false);
    const handleOpenEditModal = (employee: EmployeeRow) => {
        setRowSelected(employee);
        setOpenEditModal(true);
    };

    const [openRemoveModal, setOpenRemoveModal] = React.useState(false);
    const handleOpenRemoveModal = (employee: EmployeeRow) => {
        setRowSelected(employee);
        setOpenRemoveModal(true);
    };
    const handleCloseRemoveModal = () => setOpenRemoveModal(false);

    const handleEditEmployee = (employee: EmployeeRow) => {
        editEmployee(employee);
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Start Date</TableCell>
                            <TableCell align="right">Role</TableCell>
                            <TableCell align="right">Platoon</TableCell>
                            <TableCell align="right">
                                <a>Projects Associated</a>
                            </TableCell>
                            <TableCell align="center">Operations</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map((row) => (
                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right">{row.role}</TableCell>
                                <TableCell align="right">{row.platoon}</TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">
                                    <ButtonWrapper>
                                        <ButtonStruct>
                                            <Button
                                                variant="outlined"
                                                startIcon={<EditIcon />}
                                                onClick={() => handleOpenEditModal(row)}
                                            >
                                                Edit
                                            </Button>
                                        </ButtonStruct>
                                        <ButtonStruct>
                                            <Button
                                                variant="outlined"
                                                startIcon={<DeleteIcon />}
                                                onClick={() => handleOpenRemoveModal(row)}
                                            >
                                                Delete
                                            </Button>
                                        </ButtonStruct>
                                    </ButtonWrapper>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <DeleteModal
                employee={rowSelected as EmployeeRow}
                open={openRemoveModal}
                handleClose={handleCloseRemoveModal}
                remove={() => remove(rowSelected as EmployeeRow)}
            />
            <EditModal
                employee={rowSelected as EmployeeRow}
                open={openEditModal}
                handleClose={handleCloseEditModal}
                save={handleEditEmployee}
            />
        </>
    );
}
