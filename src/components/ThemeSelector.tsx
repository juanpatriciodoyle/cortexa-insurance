import React from 'react';
import styled from 'styled-components';

const SelectorWrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.subtleBackground};
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.sizing.borderRadius.buttons};
  border: 1px solid ${({ theme }) => theme.colors.borders};
  display: flex;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const ThemeButton = styled.button<{ $isActive: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.primary : 'transparent')};
  color: ${({ $isActive, theme }) => ($isActive ? '#FFFFFF' : theme.colors.textBody)};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.sizing.borderRadius.buttons};
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: ${({ theme }) => theme.font.weights.medium};
  font-size: ${({ theme }) => theme.font.sizes.button};
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.primary : theme.colors.borders)};
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

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ setTheme, currentThemeKey }) => {
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
};

export default ThemeSelector;