import React from 'react';
import styled, {useTheme} from 'styled-components';
import {Container} from '../ui/Container';
import Text from '../../styles/Text';
import {ShieldCheck, Smile, Zap} from 'lucide-react';
import {CortexaTheme} from '../../styles/theme';
import whyImg from '../../assets/why-img.png';
import {motion, Variants} from 'framer-motion';

const Section = styled.section`
    padding: 80px 0;
`;

const SectionTitle = styled(Text)`
    text-align: left;
    margin-bottom: 40px;
`;

const TwoColumnLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 48px;
    }
`;

const VisualPlaceholder = styled.img`
    width: 100%;
    height: auto;
    max-width: 550px;
    justify-self: center;
`;

const FeatureRow = styled(motion.div)`
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 24px;
    align-items: flex-start;

    & + & {
        margin-top: 40px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 16px;
        justify-items: center;
    }
`;

const FeatureContent = styled.div`
    text-align: left;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

const featureContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const featureItemVariants: Variants = {
    hidden: {opacity: 0, x: -20},
    visible: {opacity: 1, x: 0, transition: {duration: 0.5, ease: 'easeOut'}},
};

function PerksSection() {
    const theme = useTheme() as CortexaTheme;
    const featureIconProps = {
        color: theme.colors.primary,
        size: 40,
        strokeWidth: 1.5
    };

    return (
        <Section>
            <Container>
                <TwoColumnLayout>
                    <motion.div
                        variants={featureContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.6}}
                    >
                        <SectionTitle as="h2" $variant="h1">Why choose us?</SectionTitle>
                        <FeatureRow variants={featureItemVariants}>
                            <Zap {...featureIconProps} />
                            <FeatureContent>
                                <Text as="h3" $variant="h3">Blazing Fast</Text>
                                <Text $variant="body">Get quotes in seconds and file claims in minutes.</Text>
                            </FeatureContent>
                        </FeatureRow>
                        <FeatureRow variants={featureItemVariants}>
                            <ShieldCheck {...featureIconProps} />
                            <FeatureContent>
                                <Text as="h3" $variant="h3">Rock Solid</Text>
                                <Text $variant="body">We are backed by top-rated and financially stable insurers.</Text>
                            </FeatureContent>
                        </FeatureRow>
                        <FeatureRow variants={featureItemVariants}>
                            <Smile {...featureIconProps} />
                            <FeatureContent>
                                <Text as="h3" $variant="h3">Loved by Many</Text>
                                <Text $variant="body">Join thousands of happy customers who trust Cortexa.</Text>
                            </FeatureContent>
                        </FeatureRow>
                    </motion.div>
                    <VisualPlaceholder src={whyImg} alt="Why choose Cortexa"/>
                </TwoColumnLayout>
            </Container>
        </Section>
    );
}

export default PerksSection;