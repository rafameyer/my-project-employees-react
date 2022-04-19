import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Row = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin-bottom: 15px;
`;

export const NavItem = styled(Link)`
    margin-left: 5px;
    text-decoration: none;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;
export const Span = styled.span`
    margin-left: 5px;
`;
