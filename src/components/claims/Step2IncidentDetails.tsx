import React, {useState} from 'react';
import styled, {useTheme} from 'styled-components';
import {motion} from 'framer-motion';
import Text, {textStyles} from '../../styles/Text';
import Button from '../ui/Button';
import {Input} from '../ui/Input';
import {Textarea} from '../ui/Textarea';
import {ArrowLeft, CalendarClock, CalendarDays, CalendarPlus, Undo2} from 'lucide-react';
import {ClaimData} from '../../pages/ThirdpartyClaimsPage';
import {CortexaTheme} from '../../styles/theme';

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

const DateOptionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
`;

const DateOptionCard = styled.div<{ $isSelected: boolean }>`
    background-color: ${({
                             theme,
                             $isSelected
                         }) => ($isSelected ? theme.colors.primaryTint : theme.colors.subtleBackground)};
    border-radius: ${({theme}) => theme.sizing.borderRadius.cards};
    border: 1px solid ${({theme, $isSelected}) => ($isSelected ? theme.colors.primary : theme.colors.borders)};
    padding: 24px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        border-color: ${({theme}) => theme.colors.primary};
    }
`;

interface Step2IncidentDetailsProps {
    data: ClaimData;
    onComplete: (details: object) => void;
    onBack: () => void;
}

type DateSelection = 'Today' | 'Yesterday' | 'Last Week' | 'More than a week ago';

function Step2IncidentDetails({data, onComplete, onBack}: Step2IncidentDetailsProps) {
    const theme = useTheme() as CortexaTheme;
    const [selectedDateOption, setSelectedDateOption] = useState<DateSelection | null>(null);
    const [incidentDate, setIncidentDate] = useState(data.incidentDate || '');
    const [location, setLocation] = useState(data.location || '');
    const [description, setDescription] = useState(data.description || '');
    const [yourPlate, setYourPlate] = useState(data.yourPlate || '');

    const handleSubmit = () => {
        const finalDate = selectedDateOption === 'More than a week ago' ? incidentDate : selectedDateOption;
        onComplete({incidentDate: finalDate, location, description, yourPlate});
    };

    const isFormValid = selectedDateOption && location && description && yourPlate && (selectedDateOption !== 'More than a week ago' || incidentDate);

    const iconProps = {
        color: theme.colors.primary,
        size: 32,
        strokeWidth: 1.5,
        style: {marginBottom: '16px'}
    };

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
                    <FormLabel $isValid={!!selectedDateOption}>When did the incident happen?</FormLabel>
                    <DateOptionsGrid>
                        <DateOptionCard $isSelected={selectedDateOption === 'Today'}
                                        onClick={() => setSelectedDateOption('Today')}>
                            <CalendarDays {...iconProps} />
                            <Text $variant="h3">Today</Text>
                        </DateOptionCard>
                        <DateOptionCard $isSelected={selectedDateOption === 'Yesterday'}
                                        onClick={() => setSelectedDateOption('Yesterday')}>
                            <Undo2 {...iconProps} />
                            <Text $variant="h3">Yesterday</Text>
                        </DateOptionCard>
                        <DateOptionCard $isSelected={selectedDateOption === 'Last Week'}
                                        onClick={() => setSelectedDateOption('Last Week')}>
                            <CalendarClock {...iconProps} />
                            <Text $variant="h3">Within the last week</Text>
                        </DateOptionCard>
                        <DateOptionCard $isSelected={selectedDateOption === 'More than a week ago'}
                                        onClick={() => setSelectedDateOption('More than a week ago')}>
                            <CalendarPlus {...iconProps} />
                            <Text $variant="h3">More than a week ago</Text>
                        </DateOptionCard>
                    </DateOptionsGrid>
                    {selectedDateOption === 'More than a week ago' && (
                        <motion.div initial={{opacity: 0, height: 0}} animate={{opacity: 1, height: 'auto'}}
                                    style={{marginTop: '16px'}}>
                            <Input
                                type="date"
                                value={incidentDate}
                                onChange={(e) => setIncidentDate(e.target.value)}
                            />
                        </motion.div>
                    )}
                </FormField>

                <FormField>
                    <FormLabel $isValid={!!location}>Where did it happen?</FormLabel>
                    <Input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter address"
                    />
                </FormField>

                <FormField>
                    <FormLabel $isValid={!!description}>Tell us, in a few words, what
                        happened.</FormLabel>
                    <Textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe the incident"
                    />
                </FormField>

                <FormField>
                    <FormLabel $isValid={!!yourPlate}>What is your vehicle's license
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