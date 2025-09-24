import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Text from '../styles/Text';

const SelectorWrapper = styled.div`
    position: relative;
    width: fit-content;
    background-color: ${({theme}) => theme.colors.subtleBackground};
    border-radius: ${({theme}) => theme.sizing.borderRadius.buttons};
    padding: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    gap: 4px;
    border: 1px solid ${({theme}) => theme.colors.borders};
    height: 40px;
    box-sizing: border-box;
`;

const ActiveIndicator = styled(motion.div)`
    position: absolute;
    height: 32px;
    left: 0;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 4px;
    z-index: 1;
`;

const ThemeButton = styled.button<{ $isActive: boolean }>`
    border: none;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.75rem;
    font-weight: ${({theme}) => theme.font.weights.medium};
    font-family: ${({theme}) => theme.font.primary};
    transition: color 0.3s ease;
    background-color: transparent;
    position: relative;
    z-index: 2;
    color: ${({$isActive, theme}) => ($isActive ? '#FFFFFF' : theme.colors.textBody)};
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
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const activeIndex = themeOptions.findIndex(option => option.key === currentThemeKey);
        const activeButtonNode = buttonRefs.current[activeIndex];

        if (activeButtonNode) {
            setIndicatorStyle({
                x: activeButtonNode.offsetLeft,
                width: activeButtonNode.offsetWidth,
            });
        }
    }, [currentThemeKey]);

    return (
        <SelectorWrapper>
            <ActiveIndicator
                animate={indicatorStyle}
                transition={{type: 'spring', stiffness: 500, damping: 35}}
            />
            {themeOptions.map((option, index) => (
                <ThemeButton
                    key={option.key}
                    ref={(el) => {
                        buttonRefs.current[index] = el;
                    }}
                    $isActive={currentThemeKey === option.key}
                    onClick={() => setTheme(option.key)}
                >
                    <Text as="span" $variant="button">{option.name}</Text>
                </ThemeButton>
            ))}
        </SelectorWrapper>
    );
}

export default ThemeSelector;