import React from 'react';
import styled, {keyframes, useTheme} from 'styled-components';
import {Container} from '../components/ui/Container';
import Text from '../styles/Text';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import {Car, ChevronDown, Dog, Heart, Home, ShieldCheck, Smile, Zap} from 'lucide-react';
import {CortexaTheme} from '../styles/theme';
import whyImg from '../assets/why-img.png';
import heroGraphic from '../assets/hero-graphic.png';
import StatsSection from '../components/home/StatsSection';
import {motion, Variants} from 'framer-motion';

const Section = styled.section`
    padding: 80px 0;
`;

const OfferSection = styled(Section)`
    background-color: ${({theme}) => theme.colors.subtleBackground};
`;

const PerksSection = styled(Section)`
    background-color: ${({theme}) => theme.colors.background};
`;

const HeroSection = styled(Section)`
    padding: 100px 0;
    min-height: calc(90vh - 160px);
    display: flex;
    align-items: center;
    position: relative;
`;

const SectionTitle = styled(Text)`
    text-align: center;
    margin-bottom: 48px;
`;

const TwoColumnLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 48px;
    }
`;

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        align-items: center;
        order: 2;
    }
`;

const HeroVisual = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeroImage = styled.img`
    width: 100%;
    height: auto;
`;

const StatsImage = styled.img`
    width: 100%;
    height: auto;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 32px;
`;

const AvailabilityText = styled(Text)`
    margin-top: 24px;
    opacity: 0.7;
`;

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
`;

const ScrollToContinue = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    opacity: 0.7;
    color: ${({theme}) => theme.colors.textBody};
`;

const BounceAnimation = styled(motion.div)`
    animation: ${bounce} 2s infinite;
`

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
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

function HomePage() {
    const theme = useTheme() as CortexaTheme;

    const productIconProps = {
        color: theme.colors.primary,
        size: 48,
        strokeWidth: 1.5
    };

    const featureIconProps = {
        color: theme.colors.primary,
        size: 40,
        strokeWidth: 1.5
    };

    return (
        <>
            <HeroSection>
                <Container>
                    <TwoColumnLayout>
                        <HeroContent>
                            <Text as="h1" $variant="h1" style={{fontSize: '100px', lineHeight: 1.2}}>
                                Insurance, instantly.
                            </Text>
                            <Text $variant="h3" as="p" style={{margin: '24px 0 0', maxWidth: '450px'}}>
                                Get AI-powered coverage in minutes. No paperwork, no phone calls, no waiting.
                            </Text>
                            <ButtonGroup>
                                <Button $variant="secondary">Start for free</Button>
                                <Button $variant="primary">Get My Quote</Button>
                            </ButtonGroup>
                            <AvailabilityText $variant="subtext">
                                Available on Web, iOS, and Android.
                            </AvailabilityText>
                        </HeroContent>
                        <HeroVisual>
                            <HeroImage src={heroGraphic} alt="Cortexa Insurance Abstract Graphic"/>
                        </HeroVisual>
                    </TwoColumnLayout>
                </Container>
                <ScrollToContinue>
                    <Text $variant="button">SCROLL TO CONTINUE</Text>
                    <BounceAnimation>
                        <ChevronDown size={24}/>
                    </BounceAnimation>
                </ScrollToContinue>
            </HeroSection>

            <OfferSection>
                <Container>
                    <SectionTitle as="h2" $variant="h1">What we offer</SectionTitle>
                    <ProductsGrid>
                        <Card icon={<Home {...productIconProps} />} title="Home Insurance"
                              description="Coverage for your home and belongings."/>
                        <Card icon={<Car {...productIconProps} />} title="Auto Insurance"
                              description="Protection for you and your vehicle."/>
                        <Card icon={<Heart {...productIconProps} />} title="Life Insurance"
                              description="Secure your family's future."/>
                        <Card icon={<Dog {...productIconProps} />} title="Pet Insurance"
                              description="Health coverage for your furry friends."/>
                    </ProductsGrid>
                </Container>
            </OfferSection>

            <PerksSection>
                <Container>
                    <TwoColumnLayout>
                        <motion.div
                            variants={featureContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false, amount: 0.4}}
                        >
                            <SectionTitle as="h2" $variant="h1" style={{textAlign: 'left', marginBottom: '40px'}}>
                                Why choose us?
                            </SectionTitle>
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
                                    <Text $variant="body">We are backed by top-rated and financially stable
                                        insurers.</Text>
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
                        <StatsImage src={whyImg} alt="Cortexa Insurance Abstract Graphic"/>
                    </TwoColumnLayout>
                </Container>
            </PerksSection>

            <StatsSection/>
        </>
    );
}

export default HomePage;