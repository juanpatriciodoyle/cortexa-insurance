import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import { themes } from './styles/theme';
import DashboardPage from './pages/DashboardPage';
import { PreferenceProvider } from './utils/dx/preferences';

const SiteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const ContentWrapper = styled.main`
    flex: 1;
`;

type ThemeKey = 'light' | 'dark';

function App() {
    const [themeKey, setThemeKey] = useState<ThemeKey>('light');
    const currentTheme = themes[themeKey];

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyle />
            <SiteWrapper>
                <ContentWrapper>
                    <PreferenceProvider>
                        <DashboardPage />
                    </PreferenceProvider>
                </ContentWrapper>
            </SiteWrapper>
        </ThemeProvider>
    );
}

export default App;