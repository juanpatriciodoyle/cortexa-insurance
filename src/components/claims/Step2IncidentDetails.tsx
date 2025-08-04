import React, {useState} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Text from '../../styles/Text';
import Button from '../ui/Button';
import {Input} from '../ui/Input';
import {Textarea} from '../ui/Textarea';

const DetailsWrapper = styled(motion.div)`
    text-align: center;
`;

const FormField = styled.div`
    margin-top: 24px;
    text-align: left;
    position: relative;
`;

const FormLabel = styled(Text)`
    margin-bottom: 8px;
`;

interface Step2IncidentDetailsProps {
    onComplete: (details: object) => void;
}

function Step2IncidentDetails({onComplete}: Step2IncidentDetailsProps) {
    const [incidentDate, setIncidentDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [yourPlate, setYourPlate] = useState('');

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
            <Text as="h2" $variant="h2" style={{marginBottom: '32px'}}>Incident Details</Text>

            <FormField>
                <FormLabel as="label" $variant="label">When did the incident happen?</FormLabel>
                <Input
                    type="date"
                    value={incidentDate}
                    onChange={(e) => setIncidentDate(e.target.value)}
                />
            </FormField>

            <FormField>
                <FormLabel as="label" $variant="label">Where did it happen?</FormLabel>
                <Input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter address"
                />
            </FormField>

            <FormField>
                <FormLabel as="label" $variant="label">Tell us, in a few words, what happened.</FormLabel>
                <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe the incident"
                />
            </FormField>

            <FormField>
                <FormLabel as="label" $variant="label">What is your vehicle's license plate?</FormLabel>
                <Input
                    type="text"
                    value={yourPlate}
                    onChange={(e) => setYourPlate(e.target.value)}
                    placeholder="e.g., ABC123"
                />
            </FormField>

            <Button
                $variant="primary"
                onClick={handleSubmit}
                disabled={!isFormValid}
                style={{marginTop: '32px'}}
            >
                Continue
            </Button>
        </DetailsWrapper>
    );
}

export default Step2IncidentDetails;