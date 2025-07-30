import React from 'react';
import {Container} from '../components/ui/Container';
import Text from '../styles/Text';

function AboutPage() {
    return (
        <Container style={{padding: '80px 24px', textAlign: 'center'}}>
            <Text as="h1" $variant="h1">About Cortexa</Text>
            <Text as="p" $variant="h3" style={{marginTop: '24px'}}>
                We're rebuilding insurance from the ground up.
            </Text>
        </Container>
    );
}

export default AboutPage;