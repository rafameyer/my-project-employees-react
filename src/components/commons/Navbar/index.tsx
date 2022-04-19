import { Row, NavItem, Span } from './Styles';

const Navbar = () => (
    <Row>
        <NavItem to="/employees">Employees</NavItem>
        <Span>|</Span>
        <NavItem to="/projects">Projects</NavItem>
    </Row>
);

export default Navbar;
