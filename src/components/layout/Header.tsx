import React from 'react';
import styled, {useTheme} from 'styled-components';
import {Link} from 'react-router-dom';
import {Container} from '../ui/Container';
import Text from '../../styles/Text';
import useScrollPosition from '../../hooks/useScrollPosition';
import {CortexaTheme} from '../../styles/theme';
import logoLight from '../../assets/logo-light.png';
import logoDark from '../../assets/logo-dark.png';
import ThemeSelector from '../ThemeSelector';

const HeaderWrapper = styled.header<{ $isScrolled: boolean }>`
    padding: 14px 0;
    background-color: ${({theme, $isScrolled}) => ($isScrolled ? theme.colors.background : 'transparent')};
    border-bottom: 1px solid ${({theme, $isScrolled}) => ($isScrolled ? theme.colors.borders : 'transparent')};
    position: sticky;
    top: 0;
    z-index: 10;
    transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
    box-shadow: ${({$isScrolled}) => ($isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.05)' : 'none')};
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 34px;
`;

const NavGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    flex: 1;

    &:last-child {
        justify-content: flex-end;
    }
`;

const CenteredLogoLink = styled(Link)<{ $isScrolled: boolean }>`
    text-decoration: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: ${({$isScrolled}) => ($isScrolled ? 'translate(-50%, -50%)' : 'translate(-50%, 100%)')};
    transition: transform 0.4s ease-out;
`;

const LogoImage = styled.img<{ $isScrolled: boolean }>`
    height: ${({$isScrolled}) => ($isScrolled ? '40px' : '80px')};
    transition: height 0.4s ease-out;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.colors.textBody};
    transition: color 0.2s ease;

    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }
`;

type ThemeKey = 'light' | 'dark';

interface HeaderProps {
    isHomePage: boolean;
    setTheme: (theme: ThemeKey) => void;
    currentThemeKey: ThemeKey;
}

function Header({isHomePage, setTheme, currentThemeKey}: HeaderProps) {
    const hasScrolled = useScrollPosition(50);
    const isScrolled = !isHomePage || hasScrolled;
    const theme = useTheme() as CortexaTheme;
    const isLightTheme = theme.colors.background === '#FFFFFF';

    return (
        <HeaderWrapper $isScrolled={isScrolled}>
            <Container>
                <Nav>
                    <NavGroup>
                        <StyledLink to="/dashboard">
                            <Text $variant="headerButton">Dashboard</Text>
                        </StyledLink>
                        <StyledLink to="/claims">
                            <Text $variant="headerButton">Claims</Text>
                        </StyledLink>
                        <StyledLink to="/about">
                            <Text $variant="headerButton">About Us</Text>
                        </StyledLink>
                    </NavGroup>

                    <CenteredLogoLink to="/" $isScrolled={isScrolled}>
                        <LogoImage
                            src={isLightTheme ? logoDark : logoLight}
                            alt="Cortexa Logo"
                            $isScrolled={isScrolled}
                        />
                    </CenteredLogoLink>

                    <NavGroup>
                        <ThemeSelector setTheme={setTheme} currentThemeKey={currentThemeKey}/>
                    </NavGroup>
                </Nav>
            </Container>
        </HeaderWrapper>
    );
}

export default Header;