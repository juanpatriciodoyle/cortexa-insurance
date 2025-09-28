import React, {createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {DEFAULT_LOCATION, DEFAULT_THEME, LOCATION_CURRENCY_MAP, LOCATIONS, THEMES} from './dx-data';
import {Currency, Settings} from './types';

interface SettingsContextType {
    settings: Settings;
    currency: Currency;
    setSettings: (settings: Partial<Settings>) => void;
}

const defaultSettings: Settings = {
    location: DEFAULT_LOCATION,
    theme: DEFAULT_THEME,
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

const getInitialSettings = (): Settings => {
    try {
        const item = window.localStorage.getItem('dashboardSettings');
        const savedSettings = item ? JSON.parse(item) : {};
        const initialSettings = {...defaultSettings};

        if (savedSettings) {
            const savedLocationIsValid = LOCATIONS.some(loc => loc.value === savedSettings.location);
            if (savedLocationIsValid) {
                initialSettings.location = savedSettings.location;
            }

            const savedThemeIsValid = THEMES.some(theme => theme.value === savedSettings.theme);
            if (savedThemeIsValid) {
                initialSettings.theme = savedSettings.theme;
            }
        }
        return initialSettings;
    } catch (error) {
        console.error('Error reading settings from localStorage', error);
        return defaultSettings;
    }
};

export const SettingsProvider = ({children}: { children: ReactNode }) => {
    const [settings, setSettingsState] = useState<Settings>(getInitialSettings);

    const currency: Currency = useMemo(() => {
        return LOCATION_CURRENCY_MAP[settings.location];
    }, [settings.location]);

    useEffect(() => {
        try {
            window.localStorage.setItem('dashboardSettings', JSON.stringify(settings));
        } catch (error) {
            console.error('Error saving settings to localStorage', error);
        }
    }, [settings]);

    const setSettings = useCallback((newSettings: Partial<Settings>) => {
        setSettingsState(prev => ({...prev, ...newSettings}));
    }, []);

    const value = useMemo(() => ({
        settings,
        currency,
        setSettings,
    }), [settings, currency, setSettings]);

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};