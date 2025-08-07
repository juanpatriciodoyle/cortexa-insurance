import React, {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';
import Card from '../ui/Card';
import Text from '../../styles/Text';
import {CortexaTheme} from '../../styles/theme';
import {
    ChartPath,
    ChartSvg,
    LatencyChartContainer,
    ThresholdLabel,
    ThresholdLine,
    WidgetTitle
} from './Dashboard.styled';

function LatencyLineChart() {
    const theme = useTheme() as CortexaTheme;
    const [latencyData, setLatencyData] = useState(Array(20).fill(200));

    useEffect(() => {
        const interval = setInterval(() => {
            setLatencyData(prevData => [...prevData.slice(1), Math.random() * 300 + 100]);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const path = latencyData.map((d, i) => `${i * 10},${100 - (d / 10)}`).join(' L ');

    return (
        <Card $variant="widget">
            <WidgetTitle $variant="h3">Platform Performance</WidgetTitle>
            <LatencyChartContainer>
                <ChartSvg width="100%" height="100%" viewBox="0 0 200 100">
                    <ThresholdLine x1="0" y1="0" x2="200" y2="0" stroke={theme.colors.borders} strokeWidth="1"
                                   strokeDasharray="4"/>
                    <ThresholdLabel x="5" y="12" fill={theme.colors.textHeadings}
                                    fontSize="10">1000ms</ThresholdLabel>
                    <ChartPath
                        d={`M ${path}`}
                        fill="none"
                        stroke={theme.colors.primary}
                        strokeWidth="2"
                        transition={{duration: 0.5}}
                    />
                </ChartSvg>
            </LatencyChartContainer>
            <Text $variant="caption" style={{color: theme.colors.textHeadings, paddingTop: '8px'}}>DX→CDP Latency
                (ms)</Text>
        </Card>
    );
}

export default LatencyLineChart;