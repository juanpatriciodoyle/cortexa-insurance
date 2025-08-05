import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Text from '../styles/Text';

const SelectorWrapper = styled.div`
    position: relative;
    background-color: ${({theme}) => theme.colors.subtleBackground};
    border-radius: ${({theme}) => theme.sizing.borderRadius.buttons};
    padding: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    gap: 4px;
    border: 1px solid ${({theme}) => theme.colors.borders};
`;

const ActiveIndicator = styled(motion.div)`
    position: absolute;
    inset: 0;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 4px;
    z-index: 0;
`;

const ThemeButton = styled.button<{ $isActive: boolean }>`
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-weight: ${({theme}) => theme.font.weights.medium};
    font-family: ${({theme}) => theme.font.primary};
    transition: color 0.3s ease;
    background-color: transparent;
    position: relative;
    z-index: 1;
    color: ${({$isActive, theme}) => ($isActive ? '#FFFFFF' : theme.colors.textBody)};
`;

const ButtonText = styled(Text)`
    position: relative;
    z-index: 1;
`;

type ThemeKey = 'light' | 'dark';

interface ThemeSelectorProps {
    setTheme: (theme: ThemeKey) => void;
    currentThemeKey: ThemeKey;
}

const themeOptions: { key: ThemeKey; name: string }[] = [
    {key: 'light', name: 'Light'},
    {key: 'dark', name: 'Dark'},
];

function ThemeSelector({setTheme, currentThemeKey}: ThemeSelectorProps) {
    return (
        <SelectorWrapper>
            {themeOptions.map((option) => (
                <ThemeButton
                    key={option.key}
                    $isActive={currentThemeKey === option.key}
                    onClick={() => setTheme(option.key)}
                >
                    {currentThemeKey === option.key && (
                        <ActiveIndicator
                            layoutId="activeThemeIndicator"
                            transition={{type: 'spring', stiffness: 500, damping: 50}}
                        />
                    )}
                    <ButtonText as="span" $variant="button">{option.name}</ButtonText>
                </ThemeButton>
            ))}
        </SelectorWrapper>
    );
}

export default ThemeSelector;