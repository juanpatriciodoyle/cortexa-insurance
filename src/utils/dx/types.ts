export type Currency = 'EUR' | 'GBP';
export type Location = 'Ireland' | 'UK';
export type Theme = 'light' | 'dark';

export interface Settings {
    location: Location;
    theme: Theme;
}