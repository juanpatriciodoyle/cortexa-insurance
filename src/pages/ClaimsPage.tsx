import React from 'react';
import {Container} from '../components/ui/Container';
import Text from '../styles/Text';

function ClaimsPage() {
    return (
        <Container style={{padding: '80px 24px', textAlign: 'center'}}>
            <Text as="h1" $variant="h1">File a Claim</Text>
            <Text as="p" $variant="h3" style={{marginTop: '24px'}}>
                Our claims process is fast, easy, and hassle-free.
            </Text>
        </Container>
    );
}

export default ClaimsPage;