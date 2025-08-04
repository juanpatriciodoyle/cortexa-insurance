import styled from 'styled-components';

export const Textarea = styled.textarea`
    width: 100%;
    padding: 12px 16px;
    border-radius: ${({theme}) => theme.sizing.borderRadius.buttons};
    border: 1px solid ${({theme}) => theme.colors.borders};
    background-color: ${({theme}) => theme.colors.subtleBackground};
    color: ${({theme}) => theme.colors.textBody};
    font-family: ${({theme}) => theme.font.primary};
    font-size: ${({theme}) => theme.font.sizes.body};
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    min-height: 100px;
    resize: vertical;

    &:focus {
        outline: none;
        border-color: ${({theme}) => theme.colors.primary};
        box-shadow: 0 0 0 3px ${({theme}) => theme.colors.primary}40;
    }
`;