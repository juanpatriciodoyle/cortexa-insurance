import React, {createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {LOCATION_CURRENCY_MAP} from './dx-data';
import {Currency, Settings} from './types';
import {settingsConfig} from './settingsConfig';

interface SettingsContextType {
    settings: Settings;
    currency: Currency;
    setSettings: (settings: Partial<Settings>) => void;
}

const defaultSettings: Settings = {
    location: settingsConfig.location.defaultValue,
    theme: settingsConfig.theme.defaultValue,
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

const getInitialSettings = (): Settings => {
    try {
        const item = window.localStorage.getItem('dashboardSettings');
        const savedSettings: Partial<Settings> = item ? JSON.parse(item) : {};
        const initialSettings: { [key: string]: any } = {...defaultSettings};

        (Object.keys(savedSettings) as Array<keyof Settings>).forEach(key => {
            const config = settingsConfig[key];
            const savedValue = savedSettings[key];

            if (config && savedValue) {
                const isValid = config.options.some(option => option.value === savedValue);
                if (isValid) {
                    initialSettings[key] = savedValue;
                }
            }
        });

        return initialSettings as Settings;
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