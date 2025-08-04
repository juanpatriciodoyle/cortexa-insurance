import React from 'react';
import styled from 'styled-components';

const ClaimsWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.subtleBackground};
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 24px;
`;

const ContentBox = styled.div`
    width: 100%;
    max-width: 550px;
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.borders};
    border-radius: ${({ theme }) => theme.sizing.borderRadius.cards};
    padding: 48px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    margin: 0 auto;
`;

interface ClaimsLayoutProps {
    children: React.ReactNode;
}

function ClaimsLayout({ children }: ClaimsLayoutProps) {
    return (
        <ClaimsWrapper>
            <ContentBox>
                {children}
            </ContentBox>
        </ClaimsWrapper>
    );
}

export default ClaimsLayout;