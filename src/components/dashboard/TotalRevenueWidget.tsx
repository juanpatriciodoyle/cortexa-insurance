import React from 'react';
import {TrendingUp} from 'lucide-react';
import Card from '../ui/Card';
import {BigNumber, ComparisonText, KpiContentWrapper, WidgetTitle} from './Dashboard.styled';
import {dashboardContent} from '../../data/content';
import {useAdaptedData} from "../../hooks/useAdaptedData";

function TotalRevenueWidget() {
    const {totalRevenueData} = useAdaptedData();

    return (
        <Card $variant="widget">
            <WidgetTitle $variant="h3">{dashboardContent.totalRevenueTitle}</WidgetTitle>
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