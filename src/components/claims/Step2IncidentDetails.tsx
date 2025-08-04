import React, {useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Text from '../../styles/Text';
import Button from '../ui/Button';
import {Input} from '../ui/Input';
import {Textarea} from '../ui/Textarea';
import {ArrowLeft} from 'lucide-react';
import {ClaimData} from '../../pages/ThirdpartyClaimsPage';

const DetailsWrapper = styled(motion.div)`
    text-align: center;
`;

const FormGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 24px;
    justify-items: center;
`;

const FormField = styled.div`
    text-align: left;
    position: relative;
    width: 100%;
`;

const FormLabel = styled(Text)<{ $isValid?: boolean }>`
    margin-bottom: 8px;

    &::after {
        content: ' *';
        color: ${({theme, $isValid}) => ($isValid ? theme.colors.success : theme.colors.error)};
        transition: color 0.3s ease;
    }
`;

const FormButton = styled(Button)`
    width: 50%;
`;

const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({theme}) => theme.colors.textBody};
    margin-bottom: 24px;
    padding: 0;
    transition: color 0.2s ease;

    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }
`;

interface Step2IncidentDetailsProps {
    data: ClaimData;
    onComplete: (details: object) => void;
    onBack: () => void;
}

function Step2IncidentDetails({data, onComplete, onBack}: Step2IncidentDetailsProps) {
    const [incidentDate, setIncidentDate] = useState(data.incidentDate || '');
    const [location, setLocation] = useState(data.location || '');
    const [description, setDescription] = useState(data.description || '');
    const [yourPlate, setYourPlate] = useState(data.yourPlate || '');

    const handleSubmit = () => {
        onComplete({incidentDate, location, description, yourPlate});
    };

    const isFormValid = incidentDate && location && description && yourPlate;

    return (
        <DetailsWrapper
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -50}}
            transition={{duration: 0.5}}
        >
            <BackButton onClick={onBack}>
                <ArrowLeft size={16}/>
                <Text $variant="button">Back</Text>
            </BackButton>
            <Text as="h2" $variant="h2" style={{marginBottom: '32px'}}>Incident Details</Text>

            <FormGrid>
                <FormField>
                    <FormLabel as="label" $variant="label" $isValid={!!incidentDate}>When did the incident
                        happen?</FormLabel>
                    <Input
                        type="date"
                        value={incidentDate}
                        onChange={(e) => setIncidentDate(e.target.value)}
                    />
                </FormField>

                <FormField>
                    <FormLabel as="label" $variant="label" $isValid={!!location}>Where did it happen?</FormLabel>
                    <Input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter address"
                    />
                </FormField>

                <FormField>
                    <FormLabel as="label" $variant="label" $isValid={!!description}>Tell us, in a few words, what
                        happened.</FormLabel>
                    <Textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe the incident"
                    />
                </FormField>

                <FormField>
                    <FormLabel as="label" $variant="label" $isValid={!!yourPlate}>What is your vehicle's license
                        plate?</FormLabel>
                    <Input
                        type="text"
                        value={yourPlate}
                        onChange={(e) => setYourPlate(e.target.value)}
                        placeholder="e.g., ABC123"
                    />
                </FormField>

                <FormButton
                    $variant="primary"
                    onClick={handleSubmit}
                    disabled={!isFormValid}
                    disabledTooltip="Please fill out all fields"
                >
                    Continue
                </FormButton>
            </FormGrid>
        </DetailsWrapper>
    );
}

export default Step2IncidentDetails;