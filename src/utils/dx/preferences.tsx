import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo } from 'react';

export type Currency = 'EUR' | 'GBP';
export type Location = 'Ireland' | 'England';

const isValidLocation = (value: any): value is Location => {
    return value === 'Ireland' || value === 'England';
};

export interface Preferences {
    location: Location;
}

interface PreferenceContextType {
    preferences: Preferences;
    currency: Currency;
    setPreferences: (prefs: Partial<Preferences>) => void;
}

const defaultPreferences: Preferences = {
    location: 'Ireland',
};

const PreferenceContext = createContext<PreferenceContextType>({
    preferences: defaultPreferences,
    currency: 'EUR',
    setPreferences: () => {},
});

const getInitialPreferences = (): Preferences => {
    try {
        const item = window.localStorage.getItem('dashboardPreferences');
        const savedPrefs = item ? JSON.parse(item) : {};

        if (savedPrefs && isValidLocation(savedPrefs.location)) {
            return { ...defaultPreferences, location: savedPrefs.location };
        }

        return defaultPreferences;
    } catch (error) {
        console.error('Error reading preferences from localStorage', error);
        return defaultPreferences;
    }
};

export const PreferenceProvider = ({ children }: { children: ReactNode }) => {
    const [preferences, setPreferencesState] = useState<Preferences>(getInitialPreferences);

    const currency: Currency = useMemo(() => {
        return preferences.location === 'Ireland' ? 'EUR' : 'GBP';
    }, [preferences.location]);

    useEffect(() => {
        try {
            window.localStorage.setItem('dashboardPreferences', JSON.stringify({ location: preferences.location }));
        } catch (error) {
            console.error('Error saving preferences to localStorage', error);
        }
    }, [preferences]);

    const setPreferences = useCallback((newPrefs: Partial<Preferences>) => {
        setPreferencesState(prev => ({ ...prev, ...newPrefs }));
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

export const usePreferences = () => useContext(PreferenceContext);