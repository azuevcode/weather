import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 400px;
  width: 100%;
`;

export const NavLink = styled(Link)`
  border-radius: 40px;
  border: none;
  border-radius: 40px;
  padding: 10px 20px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 1rem;
  color: #000;
  transition: .3s;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    box-shadow: 0 1px 4px 0 #949ea0;
    transition: .3s;
  }

  &.active {
    background-color: #949ea0;
    color: #fff;
  }
`;
