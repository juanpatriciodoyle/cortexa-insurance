import {englandData, irelandData, topProductsData} from "./dashboardSets";
import {Currency, Preferences} from "../utils/dx/preferences";
import {LeaderboardItemData} from "../components/ui/LeaderboardList";

type Location = 'Ireland' | 'England';

const CURRENCY_SYMBOLS: Record<Currency, string> = {
    EUR: '€',
    GBP: '£',
};

const getLocationData = (location: Location) => {
    return location === 'Ireland' ? irelandData : englandData;
};

export const getAdaptedData = (preferences: Preferences, currency: Currency) => {
    const locationData = getLocationData(preferences.location);
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
            { icon: 'AlertTriangle', text: locationData.aiInsight, action: 'View Details', type: 'warning' },
            { icon: 'TrendingUp', text: 'Life-Policy offer engagement is highest on mobile.', action: 'Optimize Campaign', type: 'success' },
            { icon: 'TrendingUp', text: 'A 45% increase in water damage claims in coastal regions.', action: 'Analyze Impact', type: 'primary' }
        ],
        liveMapData: {
            center: locationData.mapCenter,
            zoom: locationData.mapZoom,
            claimsHotspots: locationData.claimsHotspots
        },
        topProductsData: topProductsData as LeaderboardItemData[],
    };
};