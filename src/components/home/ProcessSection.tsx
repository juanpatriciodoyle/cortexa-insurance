import React from 'react';
import styled, {useTheme} from 'styled-components';
import {motion, Variants} from 'framer-motion';
import {Container} from '../ui/Container';
import Text from '../../styles/Text';
import {CortexaTheme} from '../../styles/theme';

const Section = styled.section`
    padding: 80px 0;
    position: relative;
    overflow: hidden;
`;

const SectionTitle = styled(Text)`
    text-align: center;
    margin-bottom: 8px;
`;

const SectionSubtitle = styled(Text)`
    text-align: center;
    margin-bottom: 64px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
`;

const ProcessGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 24px;
        left: 16.66%;
        right: 16.66%;
        height: 2px;
        background: ${({theme}) => `repeating-linear-gradient(90deg, ${theme.colors.borders}, ${theme.colors.borders} 4px, transparent 4px, transparent 10px)`};
        z-index: 0;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 40px;
        &::before {
            display: none;
        }
    }
`;

const ProcessStep = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    z-index: 1;
`;

const StepNumber = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.primary};
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${({theme}) => theme.font.weights.bold};
    font-size: ${({theme}) => theme.font.sizes.h3};
    margin-bottom: 24px;
    border: 4px solid ${({theme}) => theme.colors.background};
`;

const StepContent = styled.div`
    max-width: 300px;
`;

const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: {opacity: 0, y: 30},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: 'easeOut'}},
};

const processSteps = [
    {
        title: 'Get Your Quote',
        description: 'Answer a few simple questions to get a personalized quote in seconds.',
    },
    {
        title: 'Customize Coverage',
        description: 'Adjust your coverage options to find the perfect fit for your needs and budget.',
    },
    {
        title: 'Go Live!',
        description: 'Finalize your policy and get instant coverage. It’s that easy!',
    },
];

function ProcessSection() {
    const theme = useTheme() as CortexaTheme;

    return (
        <Section>
            <Container>
                <SectionTitle as="h2" $variant="h1">How it works</SectionTitle>
                <SectionSubtitle $variant="body">
                    Getting insured with Cortexa is as easy as one, two, three.
                </SectionSubtitle>
                <ProcessGrid
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.5}}
                >
                    {processSteps.map((step, index) => (
                        <ProcessStep key={index} variants={itemVariants}>
                            <StepNumber>{index + 1}</StepNumber>
                            <StepContent>
                                <Text as="h3" $variant="h3">{step.title}</Text>
                                <Text $variant="caption" style={{marginTop: '8px'}}>{step.description}</Text>
                            </StepContent>
                        </ProcessStep>
                    ))}
                </ProcessGrid>
            </Container>
        </Section>
    );
}

export default ProcessSection;