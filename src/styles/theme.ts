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
            display: '100px',
            h1: '34px',
            h2: '26px',
            h3: '19px',
            body: '16px',
            label: '16px',
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
        primaryHover: string;
        primaryTint: string;
        background: string;
        subtleBackground: string;
        textHeadings: string;
        textBody: string;
        borders: string;
        success: string;
        warning: string;
        error: string;
    };
}

const light: CortexaTheme = {
    ...baseTheme,
    colors: {
        primary: '#0052FF',
        primaryHover: '#0048E0',
        primaryTint: '#E5F0FF',
        background: '#FFFFFF',
        subtleBackground: '#F6F6F6',
        textHeadings: '#1D1D1F',
        textBody: '#545454',
        borders: '#D1D1D6',
        success: '#28A745',
        warning: '#FFC107',
        error: '#DC3545',
    },
};

const dark: CortexaTheme = {
    ...baseTheme,
    colors: {
        primary: '#0052FF',
        primaryHover: '#0048E0',
        primaryTint: '#001a52',
        background: '#1D1D1F',
        subtleBackground: '#2C2C2E',
        textHeadings: '#F5F5F7',
        textBody: '#B9B9BE',
        borders: '#3A3A3C',
        success: '#28A745',
        warning: '#FFC107',
        error: '#DC3545',
    },
};

export const themes = {
    light,
    dark,
};

export type ThemeType = CortexaTheme;