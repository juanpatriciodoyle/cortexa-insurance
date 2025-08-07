import React from 'react';
import Card from '../ui/Card';
import LeaderboardList from '../ui/LeaderboardList';
import {WidgetTitle} from './Dashboard.styled';
import {topProductsData} from "../../data/dashboardData";

function TopProductsWidget() {
    return (
        <Card $variant="widget">
            <WidgetTitle $variant="h3">Top Selling Products</WidgetTitle>
            <LeaderboardList
                items={topProductsData}
                valueFormatter={(value: number) => value.toLocaleString()}
            />
        </Card>
    );
}

export default TopProductsWidget;