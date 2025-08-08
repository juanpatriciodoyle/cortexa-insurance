import {LeaderboardItemData} from "../components/ui/LeaderboardList";

export const totalRevenueData = {
    amount: "£235,500",
    comparison: "5.2% vs. last month"
};

export const newPoliciesData = {
    amount: "4,436",
    comparison: "8.1% vs. last month"
};

export const topProductsData: LeaderboardItemData[] = [
    {name: 'Momentum Auto', value: 1841},
    {name: 'Aegis Home', value: 1237},
    {name: 'Cortexa 360', value: 878},
    {name: 'Guardian Pet', value: 270},
    {name: 'Legacy Life', value: 210},
];

export const areaSalesData: LeaderboardItemData[] = [
    {name: 'London', value: 95320},
    {name: 'Manchester', value: 42150},
    {name: 'Birmingham', value: 28800},
    {name: 'All Other UK Areas', value: 69230},
];

export const claimsPortfolioData = {
    openClaims: "1,250",
    avgTimeToSettle: "9.2"
};

export const coPilotData = [
    {
        icon: 'AlertTriangle',
        text: 'Claim volume has spiked 30% in London this week.',
        action: 'View Details',
        type: 'warning',
    },
    {
        icon: 'TrendingUp',
        text: 'Life-Policy offer engagement is highest on mobile.',
        action: 'Optimize Campaign',
        type: 'success',
    },
    {
        icon: 'TrendingUp',
        text: 'A 45% increase in water damage claims in coastal regions.',
        action: 'Analyze Impact',
        type: 'primary',
    }
];

export const donutChartData = [
    {type: 'Auto', value: 813, percentage: 65, radius: 70, delay: 0},
    {type: 'Property', value: 312, percentage: 25, radius: 50, delay: 0.2},
    {type: 'Life', value: 125, percentage: 10, radius: 30, delay: 0.4},
];

export const topUserJourneysData = [
    {
        icon: 'FileText',
        title: 'Get an Auto Quote',
        metric: '1.2k users today',
        journeyType: 'primary',
    },
    {
        icon: 'Home',
        title: 'File a Home Claim',
        metric: '89 users today',
        journeyType: 'error',
    },
    {
        icon: 'User',
        title: 'Update Life Beneficiary',
        metric: '45 users today',
        journeyType: 'success',
    },
    {
        icon: 'Video',
        title: 'Find a Vet (Pet)',
        metric: '21 users today',
        journeyType: 'warning',
    },
];