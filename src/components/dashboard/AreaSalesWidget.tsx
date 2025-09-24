import React from 'react';
import Card from '../ui/Card';
import LeaderboardList from '../ui/LeaderboardList';
import {WidgetTitle} from './Dashboard.styled';
import {dashboardContent} from '../../data/content';
import {useAdaptedData} from "../../hooks/useAdaptedData";

function AreaSalesWidget() {
    const {areaSalesData} = useAdaptedData();

    return (
        <Card $variant="widget">
            <WidgetTitle $variant="h3">{dashboardContent.areaSalesTitle}</WidgetTitle>
            <LeaderboardList
                items={areaSalesData.items}
                valueFormatter={areaSalesData.valueFormatter}
            />
        </Card>
    );
}

export default AreaSalesWidget;