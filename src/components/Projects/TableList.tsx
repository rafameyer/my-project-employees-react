import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { ButtonWrapper, ButtonStruct } from './Styles';
import DeleteModal from './DeleteModal';
import { ProjectRow } from './Types';

export default function TableList(props: {
    projects: ProjectRow[];
    remove: (el: ProjectRow) => void;
    editProject: (employee: ProjectRow) => void;
}) {
    const { projects, remove, editProject } = props;
    const [rowSelected, setRowSelected] = React.useState<ProjectRow>();
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
    const handleOpenDeleteModal = (project: ProjectRow) => {
        setRowSelected(project);
        setOpenDeleteModal(true);
    };
    const handleCloseDeleteModal = () => setOpenDeleteModal(false);

    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Employees Associated</TableCell>
                            <TableCell align="center">Operation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects.map((row) => (
                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">
                                    <ButtonWrapper>
                                        <ButtonStruct>
                                            <Button
                                                variant="outlined"
                                                startIcon={<DeleteIcon />}
                                                onClick={() => handleOpenDeleteModal(row)}
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
                open={openDeleteModal}
                project={rowSelected as ProjectRow}
                handleClose={handleCloseDeleteModal}
                remove={() => remove(rowSelected as ProjectRow)}
            />
        </>
    );
}
