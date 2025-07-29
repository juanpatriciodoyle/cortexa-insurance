import React from 'react';
import styled from 'styled-components';
import Text from '../../styles/Text';

const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.subtleBackground};
  border-radius: ${({ theme }) => theme.sizing.borderRadius.cards};
  border: 1px solid ${({ theme }) => theme.colors.borders};
  padding: 32px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`;

const CardTitle = styled(Text)`
  margin-top: 16px;
`;

interface CardProps {
    icon?: React.ReactNode;
    title: string;
}

function Card({ icon, title }: CardProps) {
    return (
        <CardWrapper>
            {icon}
            <CardTitle as="h3" $variant="h3">{title}</CardTitle>
        </CardWrapper>
    );
}

export default Card;