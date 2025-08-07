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
        color: 'warning',
        text: 'Claim volume has spiked 30% in London this week.',
        action: 'View Details'
    },
    {
        icon: 'TrendingUp',
        color: 'success',
        text: 'Life-Policy offer engagement is highest on mobile.',
        action: 'Optimize Campaign'
    },
    {
        icon: 'Zap',
        color: 'primary',
        text: 'New AI model for damage assessment is ready for review.',
        action: 'Deploy'
    }
];

export const donutChartData = [
    {type: 'Auto', value: 813, percentage: 65, color: '#0048DF', radius: 70, delay: 0, patternId: null},
    {type: 'Property', value: 312, percentage: 25, color: '#6385FF', radius: 50, delay: 0.2, patternId: 'pattern-stripes'},
    {type: 'Life', value: 125, percentage: 10, color: '#D1D1D6', radius: 30, delay: 0.4, patternId: 'pattern-dots'},
];

export const topUserJourneysData = [
    {
        icon: 'FileText',
        bgColor: '#E5F0FF',
        iconColor: '#0048DF',
        title: 'Get an Auto Quote',
        metric: '1.2k users today',
    },
    {
        icon: 'Home',
        bgColor: '#FFE5E9',
        iconColor: '#F93154',
        title: 'File a Home Claim',
        metric: '89 users today',
    },
    {
        icon: 'User',
        bgColor: '#E5F8ED',
        iconColor: '#00B74A',
        title: 'Update Life Beneficiary',
        metric: '45 users today',
    },
    {
        icon: 'Video',
        bgColor: '#FFF8E5',
        iconColor: '#FFA900',
        title: 'Find a Vet (Pet)',
        metric: '21 users today',
    },
];