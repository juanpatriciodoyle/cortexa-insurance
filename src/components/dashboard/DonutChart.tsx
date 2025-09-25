import React, {useState} from 'react';
import styled, {useTheme} from 'styled-components';
import {motion} from 'framer-motion';
import {VivreTheme} from '../../styles/theme';
import Text from '../../styles/Text';
import {ChartSvg, DonutContainer, DonutSvgWrapper, LegendContainer, LegendIcon, LegendItem} from './Dashboard.styled';
import {donutChartData} from "../../data/dashboardData";

type ClaimType = 'Health' | 'Life' | 'Auto';

const DonutSegment = styled(motion.circle)`
    transform-origin: 50% 50%;
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
    pointer-events: stroke;
`;

const CenterTextWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    pointer-events: none;
`;

interface DonutChartProps {
    totalClaims: string;
}

function DonutChart({totalClaims}: DonutChartProps) {
    const theme = useTheme() as VivreTheme;
    const [hovered, setHovered] = useState<ClaimType | null>(null);

    const colorMap: Record<ClaimType, string> = {
        Health: theme.colors.primary,
        Life: theme.colors.success,
        Auto: theme.colors.warning,
    };

    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    let accumulatedPercentage = 0;

    return (
        <DonutContainer>
            <DonutSvgWrapper>
                <ChartSvg width="200" height="200" viewBox="0 0 200 200">
                    <g style={{transform: 'rotate(-90deg)', transformOrigin: '100px 100px'}}>
                        {donutChartData.map((claim) => {
                            const claimType = claim.type as ClaimType;
                            const segmentLength = (claim.percentage / 100) * circumference;
                            const offset = (accumulatedPercentage / 100) * circumference;
                            accumulatedPercentage += claim.percentage;

                            return (
                                <DonutSegment
                                    key={claim.type}
                                    cx="100"
                                    cy="100"
                                    r={radius}
                                    fill="transparent"
                                    stroke={colorMap[claimType]}
                                    strokeWidth="20"
                                    strokeLinecap={"round"}
                                    strokeDasharray={`${segmentLength} ${circumference}`}
                                    strokeDashoffset={-offset}
                                    animate={{
                                        opacity: hovered === null || hovered === claimType ? 1 : 0.2,
                                    }}
                                    transition={{duration: 0.2, ease: 'easeOut'}}
                                    onMouseEnter={() => setHovered(claimType)}
                                    onMouseLeave={() => setHovered(null)}
                                />
                            );
                        })}
                    </g>
                </ChartSvg>
                <CenterTextWrapper>
                    <Text as="h1" $variant="h1" style={{lineHeight: 1}}>{totalClaims}</Text>
                    <Text $variant="caption" style={{marginTop: '4px'}}>Total Open Claims</Text>
                </CenterTextWrapper>
            </DonutSvgWrapper>
            <LegendContainer>
                {donutChartData.map(claim => {
                    const claimType = claim.type as ClaimType;
                    return (
                        <LegendItem
                            key={claim.type}
                            onMouseEnter={() => setHovered(claimType)}
                            onMouseLeave={() => setHovered(null)}
                            style={{opacity: hovered === null || hovered === claimType ? 1 : 0.4}}
                        >
                            <LegendIcon>
                                <circle cx="6" cy="6" r="6" fill={colorMap[claimType]}/>
                            </LegendIcon>
                            <div>
                                <Text $variant="label"
                                      style={{color: theme.colors.textHeadings}}>{claim.type}</Text>
                                <Text $variant="caption"
                                      style={{color: theme.colors.textHeadings, opacity: 0.8}}>{claim.value} claims
                                    ({claim.percentage}%)</Text>
                            </div>
                        </LegendItem>
                    )
                })}
            </LegendContainer>
        </DonutContainer>
    );
}

export default DonutChart;