import React from 'react';
import styled from 'styled-components';
import {Container} from '../ui/Container';
import Text from '../../styles/Text';

const FooterWrapper = styled.footer`
    padding: 40px 0;
    background-color: ${({theme}) => theme.colors.background};
    border-top: 1px solid ${({theme}) => theme.colors.borders};
    transition: background-color 0.3s ease, border-color 0.3s ease;
`;

const FooterContent = styled.div`
    text-align: center;
`;

function Footer() {
    return (
        <FooterWrapper>
            <Container>
                <FooterContent>
                    <Text $variant="caption">
                        © {new Date().getFullYear()} Cortexa Insurance. All Rights Reserved.
                    </Text>
                </FooterContent>
            </Container>
        </FooterWrapper>
    );
}

export default Footer;