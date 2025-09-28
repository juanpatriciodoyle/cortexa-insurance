import {irelandData, topProductsData, ukData} from "./dashboardSets";
import {Currency, Location, Settings} from "../utils/dx/types";
import {LeaderboardItemData} from "../components/ui/LeaderboardList";
import {CURRENCY_SYMBOLS} from "../utils/dx/dx-data";

const getLocationData = (location: Location) => {
    return location === 'Ireland' ? irelandData : ukData;
};

export const getAdaptedData = (settings: Settings, currency: Currency) => {
    const locationData = getLocationData(settings.location);
    const currencySymbol = CURRENCY_SYMBOLS[currency];

    return {
        totalRevenueData: {
            ...locationData.totalRevenue,
            amount: `${currencySymbol}${locationData.totalRevenue.amount}`
        },
        areaSalesData: {
            items: locationData.areaSales,
            valueFormatter: (value: number) => `${currencySymbol}${value.toLocaleString()}`
        },
        coPilotData: [
            {icon: 'AlertTriangle', text: locationData.aiInsight, action: 'View Details', type: 'warning'},
            {
                icon: 'TrendingUp',
                text: 'Life-Policy offer engagement is highest on mobile.',
                action: 'Optimize Campaign',
                type: 'success'
            },
            {
                icon: 'TrendingUp',
                text: 'A 45% increase in water damage claims in coastal regions.',
                action: 'Analyze Impact',
                type: 'primary'
            }
        ],
        liveMapData: {
            center: locationData.mapCenter,
            zoom: locationData.mapZoom,
            claimsHotspots: locationData.claimsHotspots
        },
        topProductsData: topProductsData as LeaderboardItemData[],
    };
};