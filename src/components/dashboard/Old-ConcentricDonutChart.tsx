import React, {useState} from 'react';
import {useTheme} from 'styled-components';
import {motion} from 'framer-motion';
import {CortexaTheme} from '../../styles/theme';
import Text from '../../styles/Text';
import {
    ChartSvg,
    DonutArc,
    DonutContainer,
    DonutSvgWrapper,
    LegendContainer,
    LegendIcon,
    LegendItem
} from './Dashboard.styled';
import {donutChartData} from "../../data/dashboardData";

type ClaimType = 'Auto' | 'Property' | 'Life';

function DonutChart() {
    const theme = useTheme() as CortexaTheme;
    const [hovered, setHovered] = useState<ClaimType | null>(null);

    const colorMap: Record<ClaimType, string> = {
        Auto: theme.colors.primary,
        Property: theme.colors.secondaryAction,
        Life: theme.colors.borders,
    };

    const arcsData = donutChartData.filter(d => d.type !== 'Life');
    const markerData = donutChartData.find(d => d.type === 'Life');

    let markerPosition = {cx: 0, cy: 0};
    if (markerData) {
        const cumulativePercentage = arcsData.reduce((sum, item) => sum + item.percentage, 0);
        const angle = (cumulativePercentage / 100) * 360 - 90;
        const angleInRadians = angle * (Math.PI / 180);
        markerPosition = {
            cx: 80 + markerData.radius * Math.cos(angleInRadians),
            cy: 80 + markerData.radius * Math.sin(angleInRadians),
        };
    }

    return (
        <DonutContainer>
            <DonutSvgWrapper onMouseLeave={() => setHovered(null)}>
                <ChartSvg width="160" height="160" viewBox="0 0 160 160" style={{transform: 'rotate(-90deg)'}}>
                    {arcsData.map(claim => {
                        const circumference = 2 * Math.PI * claim.radius;
                        const claimType = claim.type as ClaimType;
                        return (
                            <g key={claim.type} onMouseEnter={() => setHovered(claimType)}>
                                <circle cx="80" cy="80" r={claim.radius} fill="transparent"
                                        stroke={theme.colors.borders} opacity="0.5" strokeWidth="12"/>
                                <DonutArc
                                    cx="80" cy="80" r={claim.radius} fill="transparent"
                                    stroke={colorMap[claimType]} strokeWidth="12"
                                    strokeLinecap="round"
                                    strokeDasharray={circumference}
                                    initial={{strokeDashoffset: circumference}}
                                    animate={{
                                        strokeDashoffset: circumference * (1 - claim.percentage / 100),
                                        scale: hovered === claimType ? 1.05 : 1,
                                        opacity: hovered === null || hovered === claimType ? 1 : 0.5
                                    }}
                                    transition={{duration: 1.2, ease: 'easeOut', delay: claim.delay}}
                                />
                            </g>
                        )
                    })}
                    {markerData && (
                        <motion.g onMouseEnter={() => setHovered(markerData.type as ClaimType)}>
                            <circle
                                cx={markerPosition.cx}
                                cy={markerPosition.cy}
                                r={6}
                                fill={theme.colors.background}
                                stroke={theme.colors.primary}
                                strokeWidth="1"
                            />
                        </motion.g>
                    )}
                </ChartSvg>
            </DonutSvgWrapper>
            <LegendContainer>
                {donutChartData.map(claim => {
                    const claimType = claim.type as ClaimType;
                    return (
                        <LegendItem
                            key={claim.type}
                            onMouseEnter={() => setHovered(claimType)}
                            onMouseLeave={() => setHovered(null)}
                            style={{opacity: hovered === null || hovered === claimType ? 1 : 0.5}}
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