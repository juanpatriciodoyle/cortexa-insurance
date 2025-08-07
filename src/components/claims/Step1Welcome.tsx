import React, {useEffect, useState} from 'react';
import styled, {useTheme} from 'styled-components';
import {motion} from 'framer-motion';
import Text, {textStyles} from '../../styles/Text';
import Button from '../ui/Button';
import {Input} from '../ui/Input';
import {ShieldCheck} from 'lucide-react';
import {CortexaTheme} from '../../styles/theme';
import {ClaimData} from '../../pages/ThirdpartyClaimsPage';

const WelcomeWrapper = styled(motion.div)`
    text-align: center;
`;

const FormGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 32px;
    justify-items: center;
`;

const FormField = styled.div`
    text-align: left;
    position: relative;
    width: 100%;
`;

const FormLabel = styled.label<{ $isValid?: boolean }>`
    ${textStyles.label}
    display: block;
    margin-bottom: 8px;

    &::after {
        content: ' *';
        color: ${({theme, $isValid}) => ($isValid ? theme.colors.success : theme.colors.error)};
        transition: color 0.3s ease;
    }
`;

const ValidationIcon = styled(motion.div)`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(calc(-50% + 14px));
`;

const MOCK_VALID_PLATES = ['FR1234', 'DE5678', 'US9012'];

interface Step1WelcomeProps {
    data: ClaimData;
    onComplete: (plate: string) => void;
}

function Step1Welcome({data, onComplete}: Step1WelcomeProps) {
    const theme = useTheme() as CortexaTheme;
    const [plate, setPlate] = useState(data.plate || '');
    const [isValid, setIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!plate) {
            setIsValid(false);
            return;
        }

        setIsLoading(true);
        const handler = setTimeout(() => {
            if (MOCK_VALID_PLATES.includes(plate.toUpperCase())) {
                setIsValid(true);
            } else {
                setIsValid(false);
            }
            setIsLoading(false);
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [plate]);

    const handleSubmit = () => {
        if (isValid) {
            onComplete(plate);
        }
    };

    return (
        <WelcomeWrapper
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -20}}
            transition={{duration: 0.5}}
        >
            <Text as="h2" $variant="h1">Let's resolve this quickly.</Text>
            <Text as="p" $variant="body" style={{marginTop: '16px'}}>
                Please enter the license plate of the Cortexa-insured vehicle involved in the incident.
            </Text>
            <FormGrid>
                <FormField>
                    <FormLabel $isValid={isValid}>Cortexa Customer's License Plate</FormLabel>
                    <Input
                        type="text"
                        value={plate}
                        onChange={(e) => setPlate(e.target.value)}
                        placeholder="e.g., FR1234"
                    />
                    {isValid && (
                        <ValidationIcon initial={{scale: 0}} animate={{scale: 1}}>
                            <ShieldCheck color={theme.colors.success}/>
                        </ValidationIcon>
                    )}
                </FormField>
                <Button
                    $variant="primary"
                    onClick={handleSubmit}
                    disabled={!isValid || isLoading}
                    disabledTooltip="Please enter a valid license plate"
                >
                    {isLoading ? 'Validating...' : 'Start Claim'}
                </Button>
            </FormGrid>
        </WelcomeWrapper>
    );
}

export default Step1Welcome;