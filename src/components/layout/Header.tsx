import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import Text from '../../styles/Text';

const HeaderWrapper = styled.header`
    padding: 20px 0;
    background-color: ${({ theme }) => theme.colors.background};
    border-bottom: 1px solid ${({ theme }) => theme.colors.borders};
    position: sticky;
    top: 0;
    z-index: 10;
    transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 24px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textBody};
    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

function Header() {
    return (
        <HeaderWrapper>
            <Container>
                <Nav>
                    <StyledLink to="/">
                        <Text $variant="h3">Cortexa</Text>
                    </StyledLink>
                    <NavLinks>
                        <StyledLink to="/claims">
                            <Text $variant="button">Claims</Text>
                        </StyledLink>
                        <StyledLink to="/about">
                            <Text $variant="button">About Us</Text>
                        </StyledLink>
                    </NavLinks>
                </Nav>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;