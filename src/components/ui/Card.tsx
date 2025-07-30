import React from 'react';
import styled from 'styled-components';
import Text from '../../styles/Text';

const CardWrapper = styled.div`
    background-color: ${({theme}) => theme.colors.subtleBackground};
    border-radius: ${({theme}) => theme.sizing.borderRadius.cards};
    border: 1px solid ${({theme}) => theme.colors.borders};
    padding: 24px;
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
        border-color: ${({theme}) => theme.colors.primary};
    }
`;

const IconWrapper = styled.div`
    margin-bottom: 20px;
`;

interface CardProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
}

function Card({icon, title, description}: CardProps) {
    return (
        <CardWrapper>
            <IconWrapper>
                {icon}
            </IconWrapper>
            <Text as="h3" $variant="h3">{title}</Text>
            <Text $variant="subtext" style={{marginTop: '8px'}}>{description}</Text>
        </CardWrapper>
    );
}

export default Card;