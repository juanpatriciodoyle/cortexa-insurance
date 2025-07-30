import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Container} from '../ui/Container';
import Text from '../../styles/Text';
import Button from '../ui/Button';
import {ChevronDown} from 'lucide-react';
import heroGraphic from '../../assets/hero-graphic.png';
import {motion} from 'framer-motion';

const HeroSectionWrapper = styled.section`
    padding: 100px 0;
    min-height: calc(90vh - 160px);
    display: flex;
    align-items: center;
    position: relative;
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

const HeroButton = styled(Button)`
    margin-top: 32px;
    width: 50%;
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
    gap: 10px;
    opacity: 0.7;
    color: ${({theme}) => theme.colors.textBody};
`;

const BounceAnimation = styled(motion.div)`
    animation: ${bounce} 2s infinite;
`

function HeroSection() {
    return (
        <HeroSectionWrapper>
            <Container>
                <TwoColumnLayout>
                    <HeroContent>
                        <Text as="h1" $variant="h1" style={{fontSize: '52px', lineHeight: 1.2}}>
                            Insurance like you always imagined.
                        </Text>
                        <Text $variant="h3" as="p" style={{margin: '24px 0 0', maxWidth: '450px'}}>
                            Wireframe, animate, prototype, collaborate, and more — it’s all right here, all in one
                            place.
                        </Text>
                        <HeroButton $variant="primary" children={'Get My Quote'} />
                        <AvailabilityText $variant="subtext">
                            Available on Web, iOS, and Android
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
        </HeroSectionWrapper>
    );
}

export default HeroSection;