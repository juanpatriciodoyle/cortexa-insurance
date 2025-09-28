import React from 'react';
import {MODAL_DATA} from './dx-data';
import {Location, Settings, Theme} from './types';
import ThemeSelector from '../../components/ThemeSelector';
import styled from 'styled-components';

const Select = styled.select`
    width: 100%;
    padding: 12px 16px;
    box-sizing: border-box;
    border-radius: ${({theme}) => theme.sizing.borderRadius.buttons};
    border: 1px solid ${({theme}) => theme.colors.borders};
    background-color: ${({theme}) => theme.colors.subtleBackground};
    color: ${({theme}) => theme.colors.textBody};
    font-family: ${({theme}) => theme.font.primary};
    font-size: ${({theme}) => theme.font.sizes.body};
`;

interface FormGroupRenderProps {
    currentSelection: Settings;
    handleLocationChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleThemeChange: (theme: Theme) => void;
}

export const getFormGroups = ({currentSelection, handleLocationChange, handleThemeChange}: FormGroupRenderProps) => [
    {
        id: 'location',
        label: MODAL_DATA.specific.labels.locationLabel,
        component: (
            <Select name="location" value={currentSelection.location} onChange={handleLocationChange}>
                {MODAL_DATA.specific.settings.locations.map((location) => (
                    <option key={location.value} value={location.value as Location}>{location.label}</option>
                ))}
            </Select>
        ),
    },
    {
        id: 'theme',
        label: MODAL_DATA.general.themeLabel,
        component: (
            <ThemeSelector
                setTheme={handleThemeChange}
                currentThemeKey={currentSelection.theme}
            />
        ),
    },
];