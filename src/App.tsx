import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Routes, Route, Outlet } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyles';
import { themes } from './styles/theme';
import ThemeSelector from './components/ThemeSelector';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ThirdPartyClaimsPage from "./pages/ThirdpartyClaimsPage";

const SiteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const ContentWrapper = styled.main`
    flex: 1;
`;

type ThemeKey = 'light' | 'dark';

function MainLayout() {
    return (
        <SiteWrapper>
            <Header />
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
            <Footer />
        </SiteWrapper>
    );
}

function App() {
    const [themeKey, setThemeKey] = useState<ThemeKey>('light');
    const currentTheme = themes[themeKey];

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyle />
            <ThemeSelector setTheme={setThemeKey} currentThemeKey={themeKey} />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/cortexa-insurance" element={<HomePage />} />
                    <Route path="claims" element={<ThirdPartyClaimsPage/>}/>
                    <Route path="about" element={<AboutPage />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;