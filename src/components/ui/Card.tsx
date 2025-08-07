import React from 'react';
import styled, {css} from 'styled-components';

type CardVariant = 'default' | 'widget';

interface CardWrapperProps {
    $variant: CardVariant;
    $fullWidth?: boolean;
}

const CardWrapper = styled.div<CardWrapperProps>`
    ${({theme, $variant, $fullWidth}) => {
        if ($variant === 'widget') {
            return css`
                background: ${theme.colors.background};
                border-radius: ${theme.sizing.borderRadius.cards};
                border: 1px solid ${theme.colors.borders};
                padding: 24px 32px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                grid-column: ${$fullWidth ? '1 / -1' : 'span 1'};
            `;
        }
        return css`
            background-color: ${theme.colors.subtleBackground};
            border-radius: ${theme.sizing.borderRadius.cards};
            border: 1px solid ${theme.colors.borders};
            padding: 24px;
            text-align: left;
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
                border-color: ${theme.colors.primary};
            }
        `;
    }}
`;

interface CardProps {
    children: React.ReactNode;
    $variant?: CardVariant;
    $fullWidth?: boolean;
    className?: string;
}

function Card({children, $variant = 'default', $fullWidth = false, className}: CardProps) {
    return (
        <CardWrapper $variant={$variant} $fullWidth={$fullWidth} className={className}>
            {children}
        </CardWrapper>
    );
}

export default Card;