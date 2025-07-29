import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/ui/Container';
import Text from '../styles/Text';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Home, Car, Heart, Dog, Zap, ShieldCheck, Smile, ClipboardPen, SlidersHorizontal, FileCheck } from 'lucide-react';

const HeroSection = styled.section`
    padding: 80px 0;
    text-align: center;
`;

const HeroTitle = styled(Text)`
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`;

const HeroSubtitle = styled(Text)`
    max-width: 500px;
    margin: 24px auto 32px;
`;

const ProductsSection = styled.section`
    padding: 80px 0;
    background-color: ${({ theme }) => theme.colors.subtleBackground};
    border-top: 1px solid ${({ theme }) => theme.colors.borders};
    border-bottom: 1px solid ${({ theme }) => theme.colors.borders};
`;

const FeaturesSection = styled.section`
    padding: 80px 0;
`;

const HowItWorksSection = styled.section`
    padding: 80px 0;
    background-color: ${({ theme }) => theme.colors.subtleBackground};
    border-top: 1px solid ${({ theme }) => theme.colors.borders};
`;

const SectionTitle = styled(Text)`
    text-align: center;
    margin-bottom: 48px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
`;

const FeatureItem = styled.div`
    text-align: center;
`;

const FeatureIcon = styled.div`
    margin-bottom: 16px;
`;

const StepItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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
    margin-bottom: 24px;

    > ${Text} {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

function HomePage() {
    const productIconProps = {
        color: '#0052FF',
        size: 48,
        strokeWidth: 1.5
    };

    const featureIconProps = {
        color: '#0052FF',
        size: 40,
        strokeWidth: 1.5
    };

    return (
        <>
            <HeroSection>
                <Container>
                    <HeroTitle as="h1" $variant="h1">
                        Insurance that's instant, simple, and reliable.
                    </HeroTitle>
                    <HeroSubtitle $variant="h3" as="p">
                        Forget everything you know about insurance. Get a policy in seconds with Cortexa.
                    </HeroSubtitle>
                    <Button>Check Our Prices</Button>
                </Container>
            </HeroSection>

            <ProductsSection>
                <Container>
                    <SectionTitle as="h2" $variant="h2">What we offer</SectionTitle>
                    <Grid>
                        <Card icon={<Home {...productIconProps} />} title="Home Insurance" />
                        <Card icon={<Car {...productIconProps} />} title="Auto Insurance" />
                        <Card icon={<Heart {...productIconProps} />} title="Life Insurance" />
                        <Card icon={<Dog {...productIconProps} />} title="Pet Insurance" />
                    </Grid>
                </Container>
            </ProductsSection>

            <FeaturesSection>
                <Container>
                    <SectionTitle as="h2" $variant="h2">Why choose us?</SectionTitle>
                    <Grid>
                        <FeatureItem>
                            <FeatureIcon><Zap {...featureIconProps} /></FeatureIcon>
                            <Text as="h3" $variant="h3">Blazing Fast</Text>
                            <Text $variant="body" style={{ marginTop: '8px' }}>Get quotes in seconds and file claims in minutes.</Text>
                        </FeatureItem>
                        <FeatureItem>
                            <FeatureIcon><ShieldCheck {...featureIconProps} /></FeatureIcon>
                            <Text as="h3" $variant="h3">Rock Solid</Text>
                            <Text $variant="body" style={{ marginTop: '8px' }}>We are backed by top-rated and financially stable insurers.</Text>
                        </FeatureItem>
                        <FeatureItem>
                            <FeatureIcon><Smile {...featureIconProps} /></FeatureIcon>
                            <Text as="h3" $variant="h3">Loved by Many</Text>
                            <Text $variant="body" style={{ marginTop: '8px' }}>Join thousands of happy customers who trust Cortexa.</Text>
                        </FeatureItem>
                    </Grid>
                </Container>
            </FeaturesSection>

            <HowItWorksSection>
                <Container>
                    <SectionTitle as="h2" $variant="h2">How it works</SectionTitle>
                    <Grid>
                        <StepItem>
                            <StepNumber><Text $variant="h3">1</Text></StepNumber>
                            <FeatureIcon><ClipboardPen {...featureIconProps} /></FeatureIcon>
                            <Text as="h3" $variant="h3">Get a Quote</Text>
                            <Text $variant="body" style={{ marginTop: '8px' }}>Answer a few simple questions to get a personalized quote.</Text>
                        </StepItem>
                        <StepItem>
                            <StepNumber><Text $variant="h3">2</Text></StepNumber>
                            <FeatureIcon><SlidersHorizontal {...featureIconProps} /></FeatureIcon>
                            <Text as="h3" $variant="h3">Customize</Text>
                            <Text $variant="body" style={{ marginTop: '8px' }}>Adjust your coverage and payment options to fit your needs.</Text>
                        </StepItem>
                        <StepItem>
                            <StepNumber><Text $variant="h3">3</Text></StepNumber>
                            <FeatureIcon><FileCheck {...featureIconProps} /></FeatureIcon>
                            <Text as="h3" $variant="h3">Get Insured</Text>
                            <Text $variant="body" style={{ marginTop: '8px' }}>Finalize your policy and get covered in just a few clicks.</Text>
                        </StepItem>
                    </Grid>
                </Container>
            </HowItWorksSection>
        </>
    );
}

export default HomePage;