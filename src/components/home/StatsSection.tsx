import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Text from '../../styles/Text';
import { Container } from '../ui/Container';
import Button from '../ui/Button';

const Section = styled.section`
    padding: 80px 0;
    background-color: ${({theme}) => theme.colors.subtleBackground};
    border-top: 1px solid ${({theme}) => theme.colors.borders};
    border-bottom: 1px solid ${({theme}) => theme.colors.borders};
}
`;

const SectionTitle = styled(Text)`
  text-align: center;
  margin-bottom: 8px;
`;

const SectionSubtitle = styled(Text)`
  text-align: center;
  margin-bottom: 48px;
`;

const StatsGrid = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 48px;
`;

const StatCircle = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.subtleBackground};
  border: 1px solid ${({ theme }) => theme.colors.borders};
  border-radius: 50%;
  width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
`;

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const stats = [
    { percentage: '31%', companies: 'Assurant, Farmers, Progressive' },
    { percentage: '19%', companies: 'Allstate' },
    { percentage: '10%', companies: 'Liberty Mutual' },
    { percentage: '16%', companies: 'State Farm' },
    { percentage: '14%', companies: 'Travelers' },
];

function StatsSection() {
    return (
        <Section>
            <Container style={{ textAlign: 'center' }}>
                <SectionTitle as="h2" $variant="h2">
                    Already insured? We'll help you switch!
                </SectionTitle>
                <SectionSubtitle $variant="body">
                    People left these insurance companies to join Cortexa.
                </SectionSubtitle>
                <StatsGrid
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {stats.map((stat) => (
                        <StatCircle key={stat.percentage} variants={itemVariants}>
                            <Text as="h2" $variant="h2" style={{ marginBottom: '8px' }}>
                                {stat.percentage}
                            </Text>
                            <Text $variant="subtext">{stat.companies}</Text>
                        </StatCircle>
                    ))}
                </StatsGrid>
                <Button>Check Prices and Switch</Button>
            </Container>
        </Section>
    );
}

export default StatsSection;