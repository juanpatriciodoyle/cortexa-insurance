import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/ui/Container';
import Text from '../styles/Text';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Home, Car, Heart, Dog } from 'lucide-react';

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
    padding: 40px 0 80px;
`;

const SectionTitle = styled(Text)`
    text-align: center;
    margin-bottom: 40px;
`;

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
`;

function HomePage() {
    const iconProps = {
        color: '#0052FF',
        size: 48,
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
                    <ProductsGrid>
                        <Card icon={<Home {...iconProps} />} title="Home Insurance" />
                        <Card icon={<Car {...iconProps} />} title="Auto Insurance" />
                        <Card icon={<Heart {...iconProps} />} title="Life Insurance" />
                        <Card icon={<Dog {...iconProps} />} title="Pet Insurance" />
                    </ProductsGrid>
                </Container>
            </ProductsSection>
        </>
    );
}

export default HomePage;