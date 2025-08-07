import React from 'react';
import {TrendingDown} from 'lucide-react';
import Card from '../ui/Card';
import Text from '../../styles/Text';
import {BigNumber, ComparisonText, PortfolioGrid, PortfolioGridFullRow, WidgetTitle} from './Dashboard.styled';
import ConcentricDonutChart from './ConcentricDonutChart';
import {claimsPortfolioData} from "../../data/dashboardData";

function ClaimsPortfolio() {
    return (
        <Card $variant="widget">
            <WidgetTitle $variant="h3">Claims Portfolio</WidgetTitle>
            <PortfolioGrid>
                <div>
                    <Text $variant="label" style={{opacity: 0.8, color: 'inherit'}}>Total Open Claims</Text>
                    <BigNumber>{claimsPortfolioData.openClaims}</BigNumber>
                </div>
                <div>
                    <Text $variant="label" style={{opacity: 0.8, color: 'inherit'}}>Avg. Time to Settle</Text>
                    <ComparisonText>
                        <BigNumber>{claimsPortfolioData.avgTimeToSettle}</BigNumber>
                        <Text $variant="body" style={{paddingTop: '16px', color: 'inherit'}}>days</Text>
                        <TrendingDown size={24}/>
                    </ComparisonText>
                </div>
                <PortfolioGridFullRow>
                    <ConcentricDonutChart/>
                </PortfolioGridFullRow>
            </PortfolioGrid>
        </Card>
    );
}

export default ClaimsPortfolio;