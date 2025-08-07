import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DashboardCard = styled(motion.div)<{ $fullWidth?: boolean; $noPadding?: boolean }>`
    background: ${({ theme }) => theme.colors.background}b3;
    border-radius: ${({ theme }) => theme.sizing.borderRadius.cards};
    border: 1px solid ${({ theme }) => theme.colors.background}cc;
    padding: ${({ $noPadding }) => ($noPadding ? '0' : '24px 32px')};
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
    grid-column: ${({ $fullWidth }) => ($fullWidth ? '1 / -1' : 'span 1')};
    overflow: hidden;
`;