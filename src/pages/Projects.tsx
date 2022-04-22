import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import TableList from '../components/Projects/TableList';
import { ButtonStruct } from './Styles';
import Modal from '../components/Projects/Modal';
import { ProjectRow } from '../components/Projects/Types';

function createData(id: string, name: string, type: string): ProjectRow {
    return {
        id,
        name,
        type,
    };
}

const rows = [
    createData('1', 'Giacomo Guilizzani', 'Employees'),
    createData('2', 'Marco Botton', 'Employees'),
    createData('3', 'Mariah Maclachlan', 'Employees'),
];

const Projects = () => {
    const [projects, setProjects] = React.useState<ProjectRow[]>([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        setProjects(rows);
    }, []);

    const addNewProject = (project: ProjectRow) => {
        projects.push(project);
    };

    const remove = (project: ProjectRow) => {
        const newArray = [...projects];
        const index = projects.findIndex((el) => el.name === project.name);
        newArray.splice(index, 1);
        setProjects(newArray);
    };

    const editProject = (project: ProjectRow) => {
        const newArray = [...projects];
        const index = projects.findIndex((el) => el.name === project.name);
        newArray[index] = project;
        setProjects(newArray);
    };

    return (
        <div>
            <ButtonStruct>
                <Button variant="outlined" startIcon={<AddIcon />} onClick={handleOpen}>
                    Add new Project
                </Button>
            </ButtonStruct>
            <TableList projects={projects} remove={remove} editProject={editProject} />
            <Modal open={open} handleClose={handleClose} save={addNewProject} />
        </div>
    );
};

export default Projects;
