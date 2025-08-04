import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import Text from '../../styles/Text';
import useScrollPosition from '../../hooks/useScrollPosition';
import { CortexaTheme } from '../../styles/theme';
import logoLight from '../../assets/logo-light.png';
import logoDark from '../../assets/logo-dark.png';

const HeaderWrapper = styled.header<{ $isScrolled: boolean }>`
    padding: 14px 0;
    background-color: ${({ theme, $isScrolled }) => ($isScrolled ? theme.colors.background : 'transparent')};
    border-bottom: 1px solid ${({ theme, $isScrolled }) => ($isScrolled ? theme.colors.borders : 'transparent')};
    position: sticky;
    top: 0;
    z-index: 10;
    transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
    box-shadow: ${({ $isScrolled }) => ($isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.05)' : 'none')};
`;

const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    position: relative;
    height: 34px;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 24px;
`;

const CenteredLogoLink = styled(Link)<{ $isScrolled: boolean }>`
    text-decoration: none;
    justify-self: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: ${({ $isScrolled }) => ($isScrolled ? 'translate(-50%, -50%)' : 'translate(-50%, 100%)')};
    transition: transform 0.4s ease-out;
`;

const LogoImage = styled.img<{ $isScrolled: boolean }>`
    height: ${({ $isScrolled }) => ($isScrolled ? '40px' : '80px')};
    transition: height 0.4s ease-out;
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
    const theme = useTheme() as CortexaTheme;
    const isLightTheme = theme.colors.background === '#FFFFFF';

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
                    <CenteredLogoLink to="/" $isScrolled={isScrolled}>
                        <LogoImage
                            src={isLightTheme ? logoDark : logoLight}
                            alt="Cortexa Logo"
                            $isScrolled={isScrolled}
                        />
                    </CenteredLogoLink>
                    <RightAlign />
                </Nav>
            </Container>
        </HeaderWrapper>
    );
}

export default Header;