import { FeatureCollection } from 'geojson';
import { LeaderboardItemData } from '../components/ui/LeaderboardList';

export const topProductsData: LeaderboardItemData[] = [
    { name: 'Momentum Auto', value: 1841 },
    { name: 'Aegis Home', value: 1237 },
    { name: 'Cortexa 360', value: 878 },
    { name: 'Guardian Pet', value: 270 },
    { name: 'Legacy Life', value: 210 },
];

export const englandData = {
    totalRevenue: { amount: "235,500", comparison: "5.2% vs. last month" },
    areaSales: [
        { name: 'London', value: 95320 },
        { name: 'Manchester', value: 42150 },
        { name: 'Birmingham', value: 28800 },
        { name: 'All Other England Areas', value: 69230 },
    ],
    aiInsight: 'Claim volume has spiked 30% in London this week.',
    mapCenter: [-2.5, 54.0] as [number, number],
    mapZoom: 5.5,
    claimsHotspots: {
        type: 'FeatureCollection',
        features: [
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-0.1278, 51.5074] }, properties: { id: 'london', magnitude: 250 } },
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-2.2426, 53.4808] }, properties: { id: 'manchester', magnitude: 180 } },
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-1.8904, 52.4862] }, properties: { id: 'birmingham', magnitude: 150 } },
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-1.549, 53.8008] }, properties: { id: 'leeds', magnitude: 90 } },
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-2.5879, 51.4545] }, properties: { id: 'bristol', magnitude: 75 } },
        ]
    } as FeatureCollection,
};

export const irelandData = {
    totalRevenue: { amount: "195,800", comparison: "4.8% vs. last month" },
    areaSales: [
        { name: 'Dublin', value: 95320 },
        { name: 'Kilkee', value: 42150 },
        { name: 'Wexford', value: 28800 },
        { name: 'All Other Ireland Areas', value: 69230 },
    ],
    aiInsight: 'Claim volume has spiked 30% in Dublin this week.',
    mapCenter: [-8, 53.5] as [number, number],
    mapZoom: 6.5,
    claimsHotspots: {
        type: 'FeatureCollection',
        features: [
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-6.2603, 53.3498] }, properties: { id: 'dublin', magnitude: 250 } },
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-9.647, 52.679] }, properties: { id: 'kilkee', magnitude: 180 } },
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-6.65, 52.32] }, properties: { id: 'taghmon', magnitude: 150 } },
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-6.46, 52.34] }, properties: { id: 'wexford', magnitude: 120 } },
            { type: 'Feature', geometry: { type: 'Point', coordinates: [-8.48, 51.9] }, properties: { id: 'cork', magnitude: 90 } }
        ]
    } as FeatureCollection,
};