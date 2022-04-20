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
import DeleteModal from './DeleteModal';
import EditModal from './Modal';
import { EmployeeRow } from './Types';

export default function TableList(props: { employees: EmployeeRow[] }) {
    const { employees } = props;

    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
    const [openEditModal, setOpenEditModal] = React.useState(false);
    const handleOpenDeleteModal = () => setOpenDeleteModal(true);
    const handleCloseDeleteModal = () => setOpenDeleteModal(false);
    const handleOpenEditModal = () => setOpenEditModal(true);
    const handleCloseEditModal = () => setOpenEditModal(false);

    const editEmployee = (employee: EmployeeRow) => {
        //
    };

    const remove = () => {};

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
                                                onClick={handleOpenEditModal}
                                            >
                                                Edit
                                            </Button>
                                        </ButtonStruct>
                                        <ButtonStruct>
                                            <Button
                                                variant="outlined"
                                                startIcon={<DeleteIcon />}
                                                onClick={handleOpenDeleteModal}
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
            <DeleteModal open={openDeleteModal} handleClose={handleCloseDeleteModal} />
            <EditModal open={openEditModal} handleClose={handleCloseEditModal} save={editEmployee} remove={remove} />
        </>
    );
}
