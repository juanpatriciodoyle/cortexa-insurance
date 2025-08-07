import React from 'react';
import {TrendingUp} from 'lucide-react';
import Card from '../ui/Card';
import {BigNumber, ComparisonText, KpiContentWrapper, WidgetTitle} from './Dashboard.styled';
import {newPoliciesData} from "../../data/dashboardData";

function NewPoliciesWidget() {
    return (
        <Card $variant="widget">
            <WidgetTitle $variant="h3">New Policies Sold</WidgetTitle>
            <KpiContentWrapper>
                <BigNumber>{newPoliciesData.amount}</BigNumber>
                <ComparisonText $variant="button">
                    <TrendingUp size={16}/> {newPoliciesData.comparison}
                </ComparisonText>
            </KpiContentWrapper>
        </Card>
    );
}

export default NewPoliciesWidget;