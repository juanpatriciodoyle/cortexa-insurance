import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/ui/Container';
import Text from '../styles/Text';
import Button from '../components/ui/Button';

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

function HomePage() {
    return (
        <Container>
            <HeroSection>
                <HeroTitle as="h1" $variant="h1">
                    Insurance that's instant, simple, and reliable.
                </HeroTitle>
                <HeroSubtitle $variant="h3" as="p">
                    Forget everything you know about insurance. Get a policy in seconds with Cortexa.
                </HeroSubtitle>
                <Button>Check Our Prices</Button>
            </HeroSection>
        </Container>
    );
}

export default HomePage;