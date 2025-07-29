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

const light = {
    ...baseTheme,
    colors: {
        primary: '#0052FF',
        background: '#FFFFFF',
        subtleBackground: '#F9F9F9',
        textHeadings: '#1D1D1F',
        textBody: '#545454',
        borders: '#D1D1D6',
        success: '#28A745',
        error: '#DC3545',
    },
};

const dark = {
    ...baseTheme,
    colors: {
        primary: '#0052FF',
        background: '#1D1D1F',
        subtleBackground: '#545454',
        textHeadings: '#FFFFFF',
        textBody: '#F9F9F9',
        borders: '#D1D1D6',
        success: '#28A745',
        error: '#DC3545',
    },
};

const glass = {
    ...baseTheme,
    colors: {
        primary: '#0052FF',
        background: 'rgba(30, 30, 31, 0.7)',
        subtleBackground: 'rgba(84, 84, 84, 0.5)',
        textHeadings: '#FFFFFF',
        textBody: '#F9F9F9',
        borders: 'rgba(209, 209, 214, 0.5)',
        success: '#28A745',
        error: '#DC3545',
    },
};

export const themes = {
    light,
    dark,
    glass,
}

export type ThemeType = typeof light;