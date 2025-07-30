import React from 'react';
import styled, {useTheme} from 'styled-components';
import {motion, Variants} from 'framer-motion';
import Text from '../../styles/Text';
import {Container} from '../ui/Container';
import {CortexaTheme} from '../../styles/theme';
import {stats} from '../../data/statsData';
import Button from "../ui/Button";

const Section = styled.section<{ $isLightTheme: boolean }>`
    padding: 80px 0;
    background-color: ${({ theme }) => (theme.colors.subtleBackground)};
    color: ${({ theme }) => (theme.colors.textHeadings)};
`;

const SectionTitle = styled(Text)`
    text-align: center;
    margin-bottom: 8px;
    color: inherit;
`;

const SectionSubtitle = styled(Text)`
    text-align: center;
    margin-bottom: 48px;
    color: inherit;
    opacity: 0.8;
`;

const StatsGrid = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    margin-bottom: 48px;
`;

const StatCircle = styled(motion.div)<{ $isLightTheme: boolean }>`
    background-color: transparent;
    border: 1px solid ${({ theme }) => (`${theme.colors.textHeadings}40`)};
    border-radius: 50%;
    width: 160px;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
        border-color: ${({theme}) => theme.colors.primary};
        box-shadow: 0 0 25px ${({theme}) => theme.colors.primary}80;
    }
`;

const StatPercentage = styled(Text)`
    margin-bottom: 8px;
    color: inherit;
`;

const StatCompanies = styled(Text)`
    color: inherit;
    opacity: 0.8;
`;

const StatsButton = styled(Button)`
    width: 25%;
`

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: {opacity: 0, scale: 0.5},
    visible: {opacity: 1, scale: 1, transition: {duration: 0.5, ease: "easeOut"}},
};

function StatsSection() {
    const theme = useTheme() as CortexaTheme;
    const isLightTheme = theme.colors.background === '#FFFFFF';

    return (
        <Section $isLightTheme={isLightTheme}>
            <Container style={{textAlign: 'center'}}>
                <SectionTitle as="h2" $variant="h1">
                    Already insured? We'll help you switch!
                </SectionTitle>
                <SectionSubtitle $variant="body">
                    People left these insurance companies to join Cortexa.
                </SectionSubtitle>
                <StatsGrid
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.3}}
                >
                    {stats.map((stat) => (
                        <StatCircle key={stat.percentage} variants={itemVariants} $isLightTheme={isLightTheme}>
                            <StatPercentage as="h2" $variant="h2">
                                {stat.percentage}
                            </StatPercentage>
                            <StatCompanies $variant="subtext">{stat.companies}</StatCompanies>
                        </StatCircle>
                    ))}
                </StatsGrid>
                <StatsButton $variant="primary" children={'Check Prices and Switch'}/>
            </Container>
        </Section>
    );
}

export default StatsSection;