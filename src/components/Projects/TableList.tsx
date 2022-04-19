import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonWrapper, ButtonStruct } from './Styles';

interface Data {
    name: string;
    type: string;
}

function createData(name: string, type: string): Data {
    return {
        name,
        type,
    };
}

const rows = [
    createData('Giacomo Guilizzani', 'Employees'),
    createData('Marco Botton', 'Employees'),
    createData('Mariah Maclachlan', 'Employees'),
];

export default function TableList() {
    return (
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
                    {rows.map((row) => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                            <TableCell align="right">
                                <ButtonWrapper>
                                    <ButtonStruct>
                                        <Button variant="outlined" startIcon={<DeleteIcon />}>
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
    );
}
