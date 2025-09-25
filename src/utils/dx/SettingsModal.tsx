import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {AnimatePresence, motion} from 'framer-motion';
import {X} from 'lucide-react';
import {Location, Preferences, Theme, usePreferences} from './preferences';
import {MODAL_SETTINGS} from './content';
import Text, {textStyles} from '../../styles/Text';
import Button from '../../components/ui/Button';
import ThemeSelector from '../../components/ThemeSelector';

const ModalBackdrop = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContent = styled(motion.div)`
    background: ${({theme}) => theme.colors.background};
    padding: 32px;
    border-radius: ${({theme}) => theme.sizing.borderRadius.cards};
    width: 100%;
    max-width: 400px;
    position: relative;
    border: 1px solid ${({theme}) => theme.colors.borders};
`;

const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({theme}) => theme.colors.textBody};
    box-sizing: border-box;
`;

const FormGroup = styled.div`
    margin-bottom: 24px;
`;

const FormLabel = styled.label`
    ${textStyles.label}
    display: block;
    margin-bottom: 8px;
`;

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

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({isOpen, onClose}) => {
    const {preferences, setPreferences} = usePreferences();
    const [currentSelection, setCurrentSelection] = useState<Preferences>(preferences);

    useEffect(() => {
        if (isOpen) {
            setCurrentSelection(preferences);
        }
    }, [preferences, isOpen]);

    const handleSave = () => {
        setPreferences(currentSelection);
        onClose();
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target;
        setCurrentSelection(prev => ({...prev, [name]: value as Location}));
    };

    const handleThemeChange = (theme: Theme) => {
        setCurrentSelection(prev => ({...prev, theme}));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <ModalBackdrop
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    <ModalContent
                        initial={{y: -50, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        exit={{y: 50, opacity: 0}}
                    >
                        <CloseButton onClick={onClose}><X/></CloseButton>
                        <Text as="h2" $variant="h2"
                              style={{marginBottom: '32px'}}>{MODAL_SETTINGS.title}</Text>

                        <FormGroup>
                            <FormLabel>{MODAL_SETTINGS.locationLabel}</FormLabel>
                            <Select name="location" value={currentSelection.location}
                                    onChange={handleLocationChange}>
                                <option value="Ireland">Ireland</option>
                                <option value="UK">United Kingdom</option>
                            </Select>
                        </FormGroup>

                        <FormGroup>
                            <FormLabel>{MODAL_SETTINGS.themeLabel}</FormLabel>
                            <ThemeSelector
                                setTheme={handleThemeChange}
                                currentThemeKey={currentSelection.theme}
                            />
                        </FormGroup>

                        <Button $variant="primary" onClick={handleSave} style={{width: '100%', marginTop: '16px'}}>
                            {MODAL_SETTINGS.saveButton}
                        </Button>
                    </ModalContent>
                </ModalBackdrop>
            )}
        </AnimatePresence>
    );
};

export default SettingsModal;