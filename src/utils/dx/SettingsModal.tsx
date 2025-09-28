import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {AnimatePresence, motion} from 'framer-motion';
import {X} from 'lucide-react';
import {useSettings} from './settingsContext';
import {Location, Settings, Theme} from './types';
import {MODAL_DATA} from './dx-data';
import Text, {textStyles} from '../../styles/Text';
import Button from '../../components/ui/Button';
import {getFormGroups} from './formGroups';

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

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({isOpen, onClose}) => {
    const {settings, setSettings} = useSettings();
    const [currentSelection, setCurrentSelection] = useState<Settings>(settings);

    useEffect(() => {
        if (isOpen) {
            setCurrentSelection(settings);
        }
    }, [settings, isOpen]);

    const handleSave = () => {
        setSettings(currentSelection);
        onClose();
    };

    const handleSettingChange = (key: keyof Settings, value: Location | Theme) => {
        setCurrentSelection((prev: Settings) => ({...prev, [key]: value}));
    };

    const formGroups = getFormGroups({currentSelection, handleSettingChange});

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
                        <Text as="h2" $variant="h2" style={{marginBottom: '32px'}}>
                            {MODAL_DATA.general.title}
                        </Text>

                        {formGroups.map((group) => (
                            <FormGroup key={group.id}>
                                <FormLabel>{group.label}</FormLabel>
                                {group.component}
                            </FormGroup>
                        ))}

                        <Button $variant="primary" onClick={handleSave} style={{width: '100%', marginTop: '16px'}}>
                            {MODAL_DATA.general.saveButton}
                        </Button>
                    </ModalContent>
                </ModalBackdrop>
            )}
        </AnimatePresence>
    );
};

export default SettingsModal;