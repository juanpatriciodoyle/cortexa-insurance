import React from 'react';
import Card from '../ui/Card';
import LeaderboardList from '../ui/LeaderboardList';
import { WidgetTitle } from './Dashboard.styled';
import { dashboardContent } from '../../data/content';
import {useAdaptedData} from "../../hooks/useAdaptedData";

function TopProductsWidget() {
    const { topProductsData } = useAdaptedData();
    return (
        <Card $variant="widget">
            <WidgetTitle $variant="h3">{dashboardContent.topProductsTitle}</WidgetTitle>
            <LeaderboardList
                items={topProductsData}
                valueFormatter={(value: number) => value.toLocaleString()}
            />
        </Card>
    );
}

export default TopProductsWidget;