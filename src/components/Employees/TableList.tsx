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
import { ButtonWrapper, ButtonStruct } from './Styles';

interface Data {
    name: string;
    date: string;
    role: string;
    platoon: string;
    type: string;
}

function createData(name: string, date: string, role: string, platoon: string, type: string): Data {
    return {
        name,
        date,
        role,
        platoon,
        type,
    };
}

const rows = [
    createData('Giacomo Guilizzani', '28-02-2010', 'SE', 'Alchemists', 'Projects'),
    createData('Marco Botton', '31-12-1999', 'TM', 'Spartans', 'Projects'),
    createData('Mariah Maclachlan', '25-09-2107', 'JE', 'BigBang', 'Projects'),
];

export default function TableList() {
    return (
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
                    {rows.map((row) => (
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
                                        <Button variant="outlined" startIcon={<EditIcon />}>
                                            Edit
                                        </Button>
                                    </ButtonStruct>
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
