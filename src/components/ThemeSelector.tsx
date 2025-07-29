import React from 'react';
import styled from 'styled-components';

const SelectorWrapper = styled.div`
    position: absolute;
    right: 0;
    z-index: 99;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    gap: 0.5rem;
`;

const ThemeButton = styled.button<{ $isActive: boolean }>`
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.borders};
    background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.primary : 'transparent')};
    color: ${({ $isActive, theme }) => ($isActive ? '#FFFFFF' : theme.colors.textBody)};
    cursor: pointer;
    border-radius: ${({ theme }) => theme.sizing.borderRadius.buttons};
    font-family: ${({ theme }) => theme.font.primary};
    font-weight: ${({ theme }) => theme.font.weights.medium};
    font-size: ${({ theme }) => theme.font.sizes.button};
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

type ThemeKey = 'light' | 'dark' | 'glass';

interface ThemeSelectorProps {
    setTheme: (theme: ThemeKey) => void;
    currentThemeKey: ThemeKey;
}

const themeOptions: { key: ThemeKey; name: string }[] = [
    { key: 'light', name: 'Light' },
    { key: 'dark', name: 'Dark' },
    { key: 'glass', name: 'Glass' },
];

function ThemeSelector({ setTheme, currentThemeKey }: ThemeSelectorProps) {
    return (
        <SelectorWrapper>
            {themeOptions.map((option) => (
                <ThemeButton
                    key={option.key}
                    $isActive={currentThemeKey === option.key}
                    onClick={() => setTheme(option.key)}
                >
                    {option.name}
                </ThemeButton>
            ))}
        </SelectorWrapper>
    );
}

export default ThemeSelector;