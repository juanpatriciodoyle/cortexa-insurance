import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import { themes } from './styles/theme';
import DashboardPage from './pages/DashboardPage';
import { PreferenceProvider, usePreferences } from './utils/dx/preferences';

const SiteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const ContentWrapper = styled.main`
    flex: 1;
`;

function AppContent() {
    const { preferences } = usePreferences();
    const currentTheme = themes[preferences.theme];

    const isLocalhost = Boolean(
        window.location.hostname === 'localhost' ||
        window.location.hostname === '[::1]' ||
        window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
    );

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyle />
            <SiteWrapper>
                <ContentWrapper>
                    <DashboardPage isLocalhost={isLocalhost} />
                </ContentWrapper>
            </SiteWrapper>
        </ThemeProvider>
    );
}

function App() {
    return (
        <PreferenceProvider>
            <AppContent />
        </PreferenceProvider>
    );
}

export default App;