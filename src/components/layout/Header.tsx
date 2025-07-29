import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import Text from '../../styles/Text';
import useScrollPosition from '../../hooks/useScrollPosition';

const HeaderWrapper = styled.header<{ $isScrolled: boolean }>`
    padding: 20px 0;
    background-color: ${({ theme, $isScrolled }) => ($isScrolled ? theme.colors.background : 'transparent')};
    border-bottom: 1px solid ${({ theme, $isScrolled }) => ($isScrolled ? theme.colors.borders : 'transparent')};
    position: sticky;
    top: 0;
    z-index: 10;
    transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: ${({ $isScrolled }) => ($isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.05)' : 'none')};
`;

const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 24px;
`;

const CenteredLogo = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textHeadings};
    justify-self: center;
`;

const RightAlign = styled.div`
    justify-self: end;
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
    const isScrolled = useScrollPosition(50);

    return (
        <HeaderWrapper $isScrolled={isScrolled}>
            <Container>
                <Nav>
                    <NavLinks>
                        <StyledLink to="/claims">
                            <Text $variant="button">Claims</Text>
                        </StyledLink>
                        <StyledLink to="/about">
                            <Text $variant="button">About Us</Text>
                        </StyledLink>
                    </NavLinks>
                    <CenteredLogo to="/">
                        <Text $variant="h2">Cortexa</Text>
                    </CenteredLogo>
                    <RightAlign />
                </Nav>
            </Container>
        </HeaderWrapper>
    );
}

export default Header;