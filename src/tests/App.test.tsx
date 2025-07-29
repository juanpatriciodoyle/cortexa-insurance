import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import App from "../App";
import {themes} from "../styles/theme";

test('renders the app title', () => {
    render(
        <ThemeProvider theme={themes.light}>
            <App />
        </ThemeProvider>
    );
    const titleElement = screen.getByText(/Cortexa Insurance/i);
    expect(titleElement).toBeInTheDocument();
});