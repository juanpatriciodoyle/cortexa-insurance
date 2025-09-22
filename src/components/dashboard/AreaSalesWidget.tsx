import React from 'react';
import Card from '../ui/Card';
import LeaderboardList from '../ui/LeaderboardList';
import {WidgetTitle} from './Dashboard.styled';
import {areaSalesData} from "../../data/dashboardData";

function AreaSalesWidget() {
    return (
        <Card $variant="widget">
            <WidgetTitle $variant="h3">Area-Wise Sales</WidgetTitle>
            <LeaderboardList
                items={areaSalesData}
                valueFormatter={(value: number) => `€${value.toLocaleString()}`}
            />
        </Card>
    );
}

export default AreaSalesWidget;