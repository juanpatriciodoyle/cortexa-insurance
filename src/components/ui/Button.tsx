import React from 'react';
import styled from 'styled-components';
import Text from '../../styles/Text';

const ButtonWrapper = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: #FFFFFF;
    border: none;
    border-radius: ${({ theme }) => theme.sizing.borderRadius.buttons};
    padding: 12px 24px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 82, 255, 0.2);
    }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
    return (
        <ButtonWrapper {...props}>
            <Text $variant="button">{children}</Text>
        </ButtonWrapper>
    );
}

export default Button;