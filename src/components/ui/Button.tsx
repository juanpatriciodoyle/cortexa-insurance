import React from 'react';
import styled, {css} from 'styled-components';
import Text from '../../styles/Text';

const ButtonWrapper = styled.button<{ $variant: 'primary' | 'secondary' }>`
    border-radius: ${({theme}) => theme.sizing.borderRadius.buttons};
    padding: 16px 32px;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%;

    ${({$variant, theme}) => $variant === 'primary' && css`
        background-color: ${theme.colors.primary};
        color: #FFFFFF;
        border: 1px solid transparent;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 82, 255, 0.2);
        }
    `}

    ${({$variant, theme}) => $variant === 'secondary' && css`
        background-color: transparent;
        color: ${theme.colors.textBody};
        border: 1px solid ${theme.colors.borders};

        &:hover {
            transform: translateY(-2px);
            background-color: ${theme.colors.subtleBackground};
            border-color: ${theme.colors.textBody};
        }
    `}
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    $variant?: 'primary' | 'secondary';
}

function Button({children, $variant = 'primary', ...props}: ButtonProps) {
    return (
        <ButtonWrapper $variant={$variant} {...props}>
            <Text $variant="button">{children}</Text>
        </ButtonWrapper>
    );
}

export default Button;