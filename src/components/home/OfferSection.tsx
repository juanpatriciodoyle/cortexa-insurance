import React from 'react';
import styled, {useTheme} from 'styled-components';
import {Container} from '../ui/Container';
import Text from '../../styles/Text';
import Card from '../ui/Card';
import {Car, Dog, Heart, Home} from 'lucide-react';
import {CortexaTheme} from '../../styles/theme';

const Section = styled.section`
    padding: 80px 0;
    background-color: ${({theme}) => theme.colors.subtleBackground};
    border-top: 1px solid ${({theme}) => theme.colors.borders};
    border-bottom: 1px solid ${({theme}) => theme.colors.borders};
`;

const SectionTitle = styled(Text)`
    text-align: center;
    margin-bottom: 48px;
`;

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

const IconWrapper = styled.div`
    margin-bottom: 20px;
`;

const offerData = [
    {
        icon: Home,
        title: "Home Insurance",
        description: "Coverage for your home and belongings."
    },
    {
        icon: Car,
        title: "Auto Insurance",
        description: "Protection for you and your vehicle."
    },
    {
        icon: Heart,
        title: "Life Insurance",
        description: "Secure your family's future."
    },
    {
        icon: Dog,
        title: "Pet Insurance",
        description: "Health coverage for your furry friends."
    }
];

function OfferSection() {
    const theme = useTheme() as CortexaTheme;
    const productIconProps = {
        color: theme.colors.primary,
        size: 48,
        strokeWidth: 1.5
    };

    return (
        <Section>
            <Container>
                <SectionTitle as="h2" $variant="h1">What we offer</SectionTitle>
                <ProductsGrid>
                    {offerData.map((offer) => (
                        <Card key={offer.title}>
                            <IconWrapper>
                                <offer.icon {...productIconProps} />
                            </IconWrapper>
                            <Text as="h3" $variant="h3">{offer.title}</Text>
                            <Text $variant="caption" style={{marginTop: '8px'}}>{offer.description}</Text>
                        </Card>
                    ))}
                </ProductsGrid>
            </Container>
        </Section>
    );
}

export default OfferSection;