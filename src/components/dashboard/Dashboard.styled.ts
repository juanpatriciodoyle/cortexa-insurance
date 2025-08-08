import styled from 'styled-components';
import {motion} from 'framer-motion';
import Text from '../../styles/Text';

export const WidgetTitle = styled(Text)`
    color: ${({theme}) => theme.colors.textHeadings};
    margin-bottom: 24px;
`;

export const BigNumber = styled(Text)`
    font-size: 48px;
    font-weight: ${({theme}) => theme.font.weights.bold};
    color: ${({theme}) => theme.colors.textHeadings};
    line-height: 1.1;
`;

export const ComparisonText = styled(Text)`
    color: ${({theme}) => theme.colors.success};
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const KpiContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ChartSvg = styled.svg``;

export const LatencyChartContainer = styled.div`
    height: 120px;
    position: relative;
`;

export const ThresholdLine = styled.line``;

export const ThresholdLabel = styled.text``;

export const ChartPath = styled(motion.path)``;

export const MapWrapper = styled.div`
    height: 350px;
    border-radius: ${({theme}) => theme.sizing.borderRadius.cards};
    overflow: hidden;
`;

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CoPilotItem = styled(motion.div)`
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.borders};

    &:first-of-type {
        padding-top: 0;
    }

    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
`;

export const CoPilotText = styled(Text)`
    color: ${({theme}) => theme.colors.textHeadings};
`;

export const CoPilotHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
`;

export const CoPilotIcon = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryAction};
    border-radius: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DonutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex: 1;
`;

export const DonutSvgWrapper = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
`;

export const DonutArc = styled(motion.circle)`
    transition: all 0.2s ease-out;
    transform-origin: 50% 50%;
`;

export const LegendContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const LegendItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition: opacity 0.2s ease-out;
`;

export const LegendIcon = styled.svg`
    width: 18px;
    height: 12px;
`;

export const WidgetDivider = styled.hr`
    width: 100%;
    border: none;
    border-top: 1px solid ${({theme}) => theme.colors.borders};
    margin: 15px 0;
`;

export const AvgSettleTimeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AvgSettleTimeValue = styled.div`
    display: flex;
    align-items: baseline;
    gap: 8px;
`;