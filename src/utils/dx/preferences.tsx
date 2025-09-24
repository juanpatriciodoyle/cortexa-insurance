import React, {createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState} from 'react';

export type Currency = 'EUR' | 'GBP';
export type Location = 'Ireland' | 'England';
export type Theme = 'light' | 'dark';

const isValidLocation = (value: any): value is Location => {
    return value === 'Ireland' || value === 'England';
};

const isValidTheme = (value: any): value is Theme => {
    return value === 'light' || value === 'dark';
}

export interface Preferences {
    location: Location;
    theme: Theme;
}

interface PreferenceContextType {
    preferences: Preferences;
    currency: Currency;
    setPreferences: (prefs: Partial<Preferences>) => void;
}

const defaultPreferences: Preferences = {
    location: 'Ireland',
    theme: 'light',
};

const PreferenceContext = createContext<PreferenceContextType | undefined>(undefined);

const getInitialPreferences = (): Preferences => {
    try {
        const item = window.localStorage.getItem('dashboardPreferences');
        const savedPrefs = item ? JSON.parse(item) : {};
        const initialPrefs = {...defaultPreferences};

        if (savedPrefs) {
            if (isValidLocation(savedPrefs.location)) {
                initialPrefs.location = savedPrefs.location;
            }
            if (isValidTheme(savedPrefs.theme)) {
                initialPrefs.theme = savedPrefs.theme;
            }
        }
        return initialPrefs;
    } catch (error) {
        console.error('Error reading preferences from localStorage', error);
        return defaultPreferences;
    }
};

export const PreferenceProvider = ({children}: { children: ReactNode }) => {
    const [preferences, setPreferencesState] = useState<Preferences>(getInitialPreferences);

    const currency: Currency = useMemo(() => {
        return preferences.location === 'Ireland' ? 'EUR' : 'GBP';
    }, [preferences.location]);

    useEffect(() => {
        try {
            window.localStorage.setItem('dashboardPreferences', JSON.stringify(preferences));
        } catch (error) {
            console.error('Error saving preferences to localStorage', error);
        }
    }, [preferences]);

    const setPreferences = useCallback((newPrefs: Partial<Preferences>) => {
        setPreferencesState(prev => ({...prev, ...newPrefs}));
    }, []);

    const value = useMemo(() => ({
        preferences,
        currency,
        setPreferences,
    }), [preferences, currency, setPreferences]);

    return (
        <PreferenceContext.Provider value={value}>
            {children}
        </PreferenceContext.Provider>
    );
};

export const usePreferences = () => {
    const context = useContext(PreferenceContext);
    if (context === undefined) {
        throw new Error('usePreferences must be used within a PreferenceProvider');
    }
    return context;
};