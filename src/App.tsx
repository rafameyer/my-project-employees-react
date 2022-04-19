import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/commons/Header';
import Navbar from './components/commons/Navbar';
import Employees from './pages/Employees';
import Projects from './pages/Projects';

const App = () => (
    <div>
        <Header />
        <div className="Content">
            <Navbar />
            <Routes>
                <Route path="/" element={<Employees />} />
                <Route path="employees" element={<Employees />} />
                <Route path="projects" element={<Projects />} />
            </Routes>
        </div>
    </div>
);

export default App;
