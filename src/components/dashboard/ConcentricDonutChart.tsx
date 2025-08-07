import React, {useState} from 'react';
import {useTheme} from 'styled-components';
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

function ConcentricDonutChart() {
    const theme = useTheme() as CortexaTheme;
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <DonutContainer>
            <DonutSvgWrapper onMouseLeave={() => setHovered(null)}>
                <ChartSvg width="160" height="160" viewBox="0 0 160 160" style={{transform: 'rotate(-90deg)'}}>
                    <defs>
                        <pattern id="pattern-stripes" patternUnits="userSpaceOnUse" width="8" height="8"
                                 patternTransform="rotate(45)">
                            <path d="M 0 0 L 0 8 M 4 0 L 4 8" stroke="#6385FF" strokeWidth="2"/>
                        </pattern>
                        <pattern id="pattern-dots" patternUnits="userSpaceOnUse" width="8" height="8">
                            <circle cx="4" cy="4" r="1.5" fill="#B9B9BE"/>
                        </pattern>
                    </defs>
                    {donutChartData.map(claim => {
                        const circumference = 2 * Math.PI * claim.radius;
                        return (
                            <g key={claim.type} onMouseEnter={() => setHovered(claim.type)}>
                                <circle cx="80" cy="80" r={claim.radius} fill="transparent"
                                        stroke={theme.colors.borders} opacity="0.5" strokeWidth="12"/>
                                <DonutArc
                                    cx="80" cy="80" r={claim.radius} fill="transparent"
                                    stroke={claim.patternId ? `url(#${claim.patternId})` : claim.color} strokeWidth="12"
                                    strokeLinecap="round"
                                    strokeDasharray={circumference}
                                    initial={{strokeDashoffset: circumference}}
                                    animate={{
                                        strokeDashoffset: circumference * (1 - claim.percentage / 100),
                                        scale: hovered === claim.type ? 1.05 : 1,
                                        opacity: hovered === null || hovered === claim.type ? 1 : 0.5
                                    }}
                                    transition={{duration: 1.2, ease: 'easeOut', delay: claim.delay}}
                                />
                            </g>
                        )
                    })}
                </ChartSvg>
            </DonutSvgWrapper>
            <LegendContainer>
                {donutChartData.map(claim => (
                    <LegendItem
                        key={claim.type}
                        onMouseEnter={() => setHovered(claim.type)}
                        onMouseLeave={() => setHovered(null)}
                        style={{opacity: hovered === null || hovered === claim.type ? 1 : 0.5}}
                    >
                        <LegendIcon>
                            <circle cx="6" cy="6" r="6"
                                    fill={claim.patternId ? `url(#${claim.patternId})` : claim.color}/>
                        </LegendIcon>
                        <div>
                            <Text $variant="label" style={{color: theme.colors.textHeadings}}>{claim.type}</Text>
                            <Text $variant="caption"
                                  style={{color: theme.colors.textHeadings, opacity: 0.8}}>{claim.value} claims
                                ({claim.percentage}%)</Text>
                        </div>
                    </LegendItem>
                ))}
            </LegendContainer>
        </DonutContainer>
    );
}

export default ConcentricDonutChart;