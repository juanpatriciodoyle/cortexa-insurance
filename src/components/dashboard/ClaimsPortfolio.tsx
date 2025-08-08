import React from 'react';
import {useTheme} from 'styled-components';
import {TrendingDown} from 'lucide-react';
import {CortexaTheme} from '../../styles/theme';
import Card from '../ui/Card';
import Text from '../../styles/Text';
import {AvgSettleTimeValue, AvgSettleTimeWrapper, WidgetDivider, WidgetTitle} from './Dashboard.styled';
import {claimsPortfolioData} from "../../data/dashboardData";
import DonutChart from "./DonutChart";

function ClaimsPortfolio() {
    const theme = useTheme() as CortexaTheme;

    return (
        <Card $variant="widget">
            <WidgetTitle $variant="h3">Total Open Claims</WidgetTitle>
            <DonutChart totalClaims={claimsPortfolioData.openClaims}/>
            <WidgetDivider/>
            <AvgSettleTimeWrapper>
                <Text $variant="label">Avg. Time to Settle</Text>
                <AvgSettleTimeValue>
                    <Text $variant="h2"
                          style={{color: theme.colors.textHeadings}}>{claimsPortfolioData.avgTimeToSettle}</Text>
                    <Text $variant="label">days</Text>
                    <TrendingDown color={theme.colors.success} size={20}/>
                </AvgSettleTimeValue>
            </AvgSettleTimeWrapper>
        </Card>
    );
}

export default ClaimsPortfolio;