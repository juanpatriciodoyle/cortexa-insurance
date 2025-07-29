import React from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import { Container } from '../components/ui/Container';
import Text from '../styles/Text';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Home, Car, Heart, Dog, Zap, ShieldCheck, Smile, ClipboardPen, SlidersHorizontal, FileCheck, ChevronDown } from 'lucide-react';
import { CortexaTheme } from '../styles/theme';
import heroGraphic from '../assets/hero-graphic.png';

const Section = styled.section`
    padding: 80px 0;

    &:nth-child(even) {
        background-color: ${({ theme }) => theme.colors.subtleBackground};
        border-top: 1px solid ${({ theme }) => theme.colors.borders};
        border-bottom: 1px solid ${({ theme }) => theme.colors.borders};
    }
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
    gap: 64px;
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
    max-width: 550px;
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
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    opacity: 0.7;
    color: ${({ theme }) => theme.colors.textBody};
`;

const BounceAnimation = styled.div`
    animation: ${bounce} 2s infinite;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 24px;
`;

const FeatureRow = styled.div`
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

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  > ${Text} {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

function HomePage() {
    const theme = useTheme() as CortexaTheme;

    const productIconProps = {
        color: theme.colors.primary,
        size: 64,
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
                            <Text as="h1" $variant="h1" style={{ fontSize: '52px', lineHeight: 1.2 }}>
                                Insurance like you always imagined.
                            </Text>
                            <Text $variant="h3" as="p" style={{ margin: '24px 0 0', maxWidth: '450px' }}>
                                Wireframe, animate, prototype, collaborate, and more — it’s all right here, all in one place.
                            </Text>
                            <ButtonGroup>
                                <Button $variant="secondary">Start for free</Button>
                                <Button $variant="primary">Buy now</Button>
                            </ButtonGroup>
                            <AvailabilityText $variant="subtext">
                                Available on Web, iOS, and Android
                            </AvailabilityText>
                        </HeroContent>
                        <HeroVisual>
                            <HeroImage src={heroGraphic} alt="Cortexa Insurance Abstract Graphic" />
                        </HeroVisual>
                    </TwoColumnLayout>
                </Container>
                <ScrollToContinue>
                    <Text $variant="button">SCROLL TO CONTINUE</Text>
                    <BounceAnimation>
                        <ChevronDown size={24} />
                    </BounceAnimation>
                </ScrollToContinue>
            </HeroSection>

            <Section>
                <Container>
                    <SectionTitle as="h2" $variant="h2">What we offer</SectionTitle>
                    <Grid>
                        <Card icon={<Home {...productIconProps} />} title="Home Insurance" description="Coverage for your home and belongings." />
                        <Card icon={<Car {...productIconProps} />} title="Auto Insurance" description="Protection for you and your vehicle." />
                        <Card icon={<Heart {...productIconProps} />} title="Life Insurance" description="Secure your family's future." />
                        <Card icon={<Dog {...productIconProps} />} title="Pet Insurance" description="Health coverage for your furry friends." />
                    </Grid>
                </Container>
            </Section>

            <Section>
                <Container>
                    <SectionTitle as="h2" $variant="h2">Why choose us?</SectionTitle>
                    <FeatureRow>
                        <Zap {...featureIconProps} />
                        <FeatureContent>
                            <Text as="h3" $variant="h3">Blazing Fast</Text>
                            <Text $variant="body">Get quotes in seconds and file claims in minutes.</Text>
                        </FeatureContent>
                    </FeatureRow>
                    <FeatureRow>
                        <ShieldCheck {...featureIconProps} />
                        <FeatureContent>
                            <Text as="h3" $variant="h3">Rock Solid</Text>
                            <Text $variant="body">We are backed by top-rated and financially stable insurers.</Text>
                        </FeatureContent>
                    </FeatureRow>
                    <FeatureRow>
                        <Smile {...featureIconProps} />
                        <FeatureContent>
                            <Text as="h3" $variant="h3">Loved by Many</Text>
                            <Text $variant="body">Join thousands of happy customers who trust Cortexa.</Text>
                        </FeatureContent>
                    </FeatureRow>
                </Container>
            </Section>

            <Section>
                <Container>
                    <SectionTitle as="h2" $variant="h2">How it works</SectionTitle>
                    <FeatureRow>
                        <StepNumber><Text $variant="h3">1</Text></StepNumber>
                        <FeatureContent>
                            <Text as="h3" $variant="h3">Get a Quote</Text>
                            <Text $variant="body">Answer a few simple questions to get a personalized quote.</Text>
                        </FeatureContent>
                    </FeatureRow>
                    <FeatureRow>
                        <StepNumber><Text $variant="h3">2</Text></StepNumber>
                        <FeatureContent>
                            <Text as="h3" $variant="h3">Customize</Text>
                            <Text $variant="body">Adjust your coverage and payment options to fit your needs.</Text>
                        </FeatureContent>
                    </FeatureRow>
                    <FeatureRow>
                        <StepNumber><Text $variant="h3">3</Text></StepNumber>
                        <FeatureContent>
                            <Text as="h3" $variant="h3">Get Insured</Text>
                            <Text $variant="body">Finalize your policy and get covered in just a few clicks.</Text>
                        </FeatureContent>
                    </FeatureRow>
                </Container>
            </Section>
        </>
    );
}

export default HomePage;