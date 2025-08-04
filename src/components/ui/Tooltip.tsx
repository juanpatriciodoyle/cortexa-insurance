import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Text from '../../styles/Text';

const TooltipWrapper = styled(motion.div)`
    position: absolute;
    bottom: 110%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.textHeadings};
    color: ${({ theme }) => theme.colors.background};
    padding: 8px 12px;
    border-radius: ${({ theme }) => theme.sizing.borderRadius.buttons};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    pointer-events: none;
`;

const tooltipVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
};

interface TooltipProps {
    text: string;
}

function Tooltip({ text }: TooltipProps) {
    return (
        <TooltipWrapper
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2, ease: 'easeOut' }}
        >
            <Text $variant="caption" style={{ color: 'inherit' }}>{text}</Text>
        </TooltipWrapper>
    );
}

export default Tooltip;