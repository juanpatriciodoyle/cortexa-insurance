import styled, {css} from 'styled-components';
import React from "react";

type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'subtext' | 'button';

interface TextProps {
    $variant?: TextVariant;
    as?: React.ElementType;
}

const textStyles = {
    h1: css`
        font-size: ${({theme}) => theme.font.sizes.h1};
        font-weight: ${({theme}) => theme.font.weights.bold};
        color: ${({theme}) => theme.colors.textHeadings};
        margin: 0;
    `,
    h2: css`
        font-size: ${({theme}) => theme.font.sizes.h2};
        font-weight: ${({theme}) => theme.font.weights.bold};
        color: ${({theme}) => theme.colors.textHeadings};
        margin: 0;
    `,
    h3: css`
        font-size: ${({theme}) => theme.font.sizes.h3};
        font-weight: ${({theme}) => theme.font.weights.semiBold};
        color: ${({theme}) => theme.colors.textHeadings};
        margin: 0;
    `,
    body: css`
        font-size: ${({theme}) => theme.font.sizes.body};
        font-weight: ${({theme}) => theme.font.weights.regular};
        color: ${({theme}) => theme.colors.textBody};
        margin: 0;
    `,
    subtext: css`
        font-size: ${({theme}) => theme.font.sizes.subtext};
        font-weight: ${({theme}) => theme.font.weights.regular};
        color: ${({theme}) => theme.colors.textBody};
        margin: 0;
    `,
    button: css`
        font-size: ${({theme}) => theme.font.sizes.button};
        font-weight: ${({theme}) => theme.font.weights.medium};
        color: inherit;
        margin: 0;
    `,
};

const Text = styled.p<TextProps>`
    font-family: ${({theme}) => theme.font.primary};
    ${({$variant = 'body'}) => textStyles[$variant]}
`;

export default Text;