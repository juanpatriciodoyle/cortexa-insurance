import React from 'react';
import {DEFAULT_LOCATION, DEFAULT_THEME, LOCATIONS, MODAL_DATA, THEMES} from './dx-data';
import {Settings} from './types';
import ThemeSelector from '../../components/ThemeSelector';

export interface SettingConfig<K extends keyof Settings> {
    key: K;
    label: string;
    defaultValue: Settings[K];
    options: ReadonlyArray<{ value: Settings[K]; label: string }>;
    component?: React.ElementType;
}

const locationConfig: SettingConfig<'location'> = {
    key: 'location',
    label: MODAL_DATA.specific.labels.locationLabel,
    defaultValue: DEFAULT_LOCATION,
    options: LOCATIONS,
};

const themeConfig: SettingConfig<'theme'> = {
    key: 'theme',
    label: MODAL_DATA.general.themeLabel,
    defaultValue: DEFAULT_THEME,
    options: THEMES,
    component: ThemeSelector,
};

export const settingsConfig = {
    location: locationConfig,
    theme: themeConfig,
};

export const settingsConfigArray = Object.values(settingsConfig);