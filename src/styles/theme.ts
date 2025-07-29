export const baseTheme = {
    font: {
        primary: 'Inter, sans-serif',
        weights: {
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
        },
        sizes: {
            h1: '34px',
            h2: '26px',
            h3: '19px',
            body: '16px',
            subtext: '13px',
            button: '15px',
        },
    },
    sizing: {
        borderRadius: {
            cards: '12px',
            buttons: '6px',
        },
    },
};

export interface CortexaTheme {
    font: typeof baseTheme.font;
    sizing: typeof baseTheme.sizing;
    colors: {
        primary: string;
        accent: string;
        background: string;
        subtleBackground: string;
        textHeadings: string;
        textBody: string;
        textPrimary: string;
        textSecondary: string;
        borders: string;
        success: string;
        error: string;
    };
    blur?: string;
}

const light: CortexaTheme = {
    ...baseTheme,
    colors: {
        primary: '#0052FF',
        accent: '#0052FF',
        background: '#FFFFFF',
        subtleBackground: '#F9F9F9',
        textHeadings: '#1D1D1F',
        textBody: '#545454',
        textPrimary: '#1D1D1F',
        textSecondary: '#545454',
        borders: '#D1D1D6',
        success: '#28A745',
        error: '#DC3545',
    },
};

const dark: CortexaTheme = {
    ...baseTheme,
    colors: {
        primary: '#0052FF',
        accent: '#409cff',
        background: '#1D1D1F',
        subtleBackground: '#2c2c2e',
        textHeadings: '#F5F5F7',
        textBody: '#A1A1A6',
        textPrimary: '#F5F5F7',
        textSecondary: '#A1A1A6',
        borders: '#3a3a3c',
        success: '#28A745',
        error: '#DC3545',
    },
};

const glass: CortexaTheme = {
    ...dark,
    colors: {
        ...dark.colors,
        background: 'rgba(30, 30, 31, 0.7)',
        subtleBackground: 'rgba(255, 255, 255, 0.1)',
        borders: 'rgba(255, 255, 255, 0.2)',
    },
    blur: '8px',
};

export const themes = {
    light,
    dark,
    glass,
};

export type ThemeType = CortexaTheme;