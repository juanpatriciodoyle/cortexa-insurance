import React from 'react';
import {TrendingUp} from 'lucide-react';
import Card from '../ui/Card';
import {BigNumber, ComparisonText, KpiContentWrapper, WidgetTitle} from './Dashboard.styled';
import {totalRevenueData} from "../../data/dashboardData";

function TotalRevenueWidget() {
    return (
        <Card $variant="widget">
            <WidgetTitle $variant="h3">Total Regional Revenue</WidgetTitle>
            <KpiContentWrapper>
                <BigNumber>{totalRevenueData.amount}</BigNumber>
                <ComparisonText $variant="label">
                    <TrendingUp size={16}/> {totalRevenueData.comparison}
                </ComparisonText>
            </KpiContentWrapper>
        </Card>
    );
}

export default TotalRevenueWidget;