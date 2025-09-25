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

const commonColors = {
    primary: '#0048DF',
    primaryHover: '#003CBC',
    secondaryAction: '#E5F0FF',
    secondaryHover: '#C1CDDE',
    success: '#00B74A',
    warning: '#FFA900',
    error: '#F93154',
    successTint: '#E5F8ED',
    warningTint: '#FFF8E5',
    errorTint: '#FFE5E9',
};

export interface VivreTheme {
    font: typeof baseTheme.font;
    sizing: typeof baseTheme.sizing;
    colors: {
        primary: string;
        primaryHover: string;
        secondaryAction: string;
        secondaryHover: string;
        background: string;
        subtleBackground: string;
        textHeadings: string;
        textBody: string;
        borders: string;
        success: string;
        warning: string;
        error: string;
        successTint: string;
        warningTint: string;
        errorTint: string;
    };
}

const light: VivreTheme = {
    ...baseTheme,
    colors: {
        ...commonColors,
        background: '#FFFFFF',
        subtleBackground: '#F6F6F6',
        textHeadings: '#1D1D1F',
        textBody: '#545454',
        borders: '#D1D1D6',
    },
};

const dark: VivreTheme = {
    ...baseTheme,
    colors: {
        ...commonColors,
        background: '#1D1D1F',
        subtleBackground: '#2C2C2E',
        textHeadings: '#F5F5F7',
        textBody: '#B9B9BE',
        borders: '#6A6A6A',
    },
};

export const themes = {
    light,
    dark,
};

export type ThemeType = VivreTheme;