import {Currency, Location, Theme} from './types';

export const THEMES: { value: Theme; label: string }[] = [
    {value: 'light', label: 'Light'},
    {value: 'dark', label: 'Dark'},
];

export const LOCATIONS: { value: Location; label: string }[] = [
    {value: 'Ireland', label: 'Ireland'},
    {value: 'UK', label: 'United Kingdom'},
];

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
    EUR: '€',
    GBP: '£',
};

export const LOCATION_CURRENCY_MAP: Record<Location, Currency> = {
    Ireland: 'EUR',
    UK: 'GBP',
};

export const DEFAULT_LOCATION: Location = 'Ireland';
export const DEFAULT_THEME: Theme = 'light';

export const MODAL_DATA = {
    general: {
        title: 'Dashboard Preferences',
        saveButton: 'Save Changes',
        themeLabel: 'Theme',
    },
    specific: {
        labels: {
            locationLabel: 'Location',
        },
        settings: {
            locations: LOCATIONS,
        },
    }
};

export const DX_ATTRIBUTES = {
    rootName: '__SPNS__root' //If this changes, a manual change must be done in index.html
}