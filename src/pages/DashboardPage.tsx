import React, {useEffect, useRef, useState} from 'react';
import styled, {useTheme} from 'styled-components';
import {motion} from 'framer-motion';
import {Container} from '../components/ui/Container';
import Text from '../styles/Text';
import {CortexaTheme} from '../styles/theme';
import {AlertTriangle, Sparkles, TrendingDown, TrendingUp, Zap} from 'lucide-react';
import mapboxgl, {Map} from 'mapbox-gl';
import {claimsHotspots} from '../data/mockClaimsData';
import 'mapbox-gl/dist/mapbox-gl.css';
import Card from '../components/ui/Card';
import LeaderboardList, {LeaderboardItemData} from '../components/ui/LeaderboardList';
import TopUserJourneysWidget from '../components/dashboard/TopUserJourneysWidget';
import Button from '../components/ui/Button';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const DashboardWrapper = styled.div`
    padding: 60px 24px;
    background-color: ${({theme}) => theme.colors.subtleBackground};
    min-height: calc(100vh - 73px - 81px);
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
`;

const PageTitle = styled(Text)`
    font-size: 56px;
    margin-bottom: 48px;
    position: relative;
    z-index: 1;
    color: ${({theme}) => theme.colors.textHeadings};
`;

const MainLayout = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 32px;
    position: relative;
    z-index: 1;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

const MainContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-content: start;
`;

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

const FullWidthWrapper = styled.div`
    grid-column: 1 / -1;
`;

const WidgetTitle = styled(Text)`
    color: ${({theme}) => theme.colors.textHeadings};
    margin-bottom: 24px;
`;

const BigNumber = styled(Text)`
    font-size: 48px;
    font-weight: ${({theme}) => theme.font.weights.bold};
    color: ${({theme}) => theme.colors.textHeadings};
    line-height: 1.1;
`;

const ComparisonText = styled(Text)`
    color: ${({theme}) => theme.colors.success};
    display: flex;
    align-items: center;
    gap: 4px;
`;

const KpiContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const ChartSvg = styled.svg``;
const LatencyChartContainer = styled.div`
    height: 120px;
    position: relative;
`;

const ThresholdLine = styled.line``;
const ThresholdLabel = styled.text``;
const ChartPath = styled(motion.path)``;

const MapWrapper = styled.div`
    height: 350px;
    border-radius: ${({theme}) => theme.sizing.borderRadius.cards};
    overflow: hidden;
`;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const CoPilotItem = styled(motion.div)`
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.borders};

    &:first-of-type {
        padding-top: 0;
    }

    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
`;

const CoPilotText = styled(Text)`
    color: ${({theme}) => theme.colors.textHeadings};
`;

const CoPilotHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
`;

const CoPilotIcon = styled.div`
    background-color: ${({theme}) => theme.colors.primaryTint};
    border-radius: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PortfolioGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    flex: 1;
`;

const PortfolioGridFullRow = styled.div`
    grid-column: 1 / -1;
`;

const DonutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    flex: 1;
    padding-top: 16px;
`;

const DonutSvgWrapper = styled.div`
    position: relative;
    width: 160px;
    height: 160px;
`;

const DonutArc = styled(motion.circle)`
    transition: all 0.2s ease-out;
    transform-origin: 50% 50%;
`;

const LegendContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const LegendItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition: opacity 0.2s ease-out;
`;

const LegendIcon = styled.svg`
    width: 12px;
    height: 12px;
`;

function TotalRevenueWidget() {
    return (
        <Card $variant="widget">
            <WidgetTitle $variant="h3">Total Regional Revenue</WidgetTitle>
            <KpiContentWrapper>
                <BigNumber>$4.2M</BigNumber>
                <ComparisonText $variant="button">
                    <TrendingUp size={16}/> 5.2% vs. last month
                </ComparisonText>
            </KpiContentWrapper>
        </Card>
    );
}

function NewPoliciesWidget() {
    return (
        <Card $variant="widget">
            <WidgetTitle $variant="h3">New Policies Sold</WidgetTitle>
            <KpiContentWrapper>
                <BigNumber>1,820</BigNumber>
                <ComparisonText $variant="button">
                    <TrendingUp size={16}/> 8.1% vs. last month
                </ComparisonText>
            </KpiContentWrapper>
        </Card>
    );
}

const claimsData = [
    {type: 'Auto', value: 813, percentage: 65, color: '#0048DF', radius: 70, delay: 0, patternId: null},
    {
        type: 'Property',
        value: 312,
        percentage: 25,
        color: '#6385FF',
        radius: 50,
        delay: 0.2,
        patternId: 'pattern-stripes'
    },
    {type: 'Life', value: 125, percentage: 10, color: '#D1D1D6', radius: 30, delay: 0.4, patternId: 'pattern-dots'},
];

function ConcentricDonutChart() {
    const theme = useTheme() as CortexaTheme;
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <DonutContainer>
            <DonutSvgWrapper
                onMouseLeave={() => setHovered(null)}
            >
                <ChartSvg width="160" height="160" viewBox="0 0 160 160" style={{transform: 'rotate(-90deg)'}}>
                    <defs>
                        <pattern id="pattern-stripes" patternUnits="userSpaceOnUse" width="8" height="8"
                                 patternTransform="rotate(45)">
                            <path d="M 0 0 L 0 8 M 4 0 L 4 8" stroke="#6385FF" strokeWidth="2"/>
                        </pattern>
                        <pattern id="pattern-dots" patternUnits="userSpaceOnUse" width="8" height="8">
                            <circle cx="4" cy="4" r="1.5" fill="#B9B9BE"/>
                        </pattern>
                    </defs>
                    {claimsData.map(claim => {
                        const circumference = 2 * Math.PI * claim.radius;
                        return (
                            <g key={claim.type} onMouseEnter={() => setHovered(claim.type)}>
                                <circle cx="80" cy="80" r={claim.radius} fill="transparent"
                                        stroke={theme.colors.borders} opacity="0.5" strokeWidth="12"/>
                                <DonutArc
                                    cx="80" cy="80" r={claim.radius} fill="transparent"
                                    stroke={claim.patternId ? `url(#${claim.patternId})` : claim.color} strokeWidth="12"
                                    strokeLinecap="round"
                                    strokeDasharray={circumference}
                                    initial={{strokeDashoffset: circumference}}
                                    animate={{
                                        strokeDashoffset: circumference * (1 - claim.percentage / 100),
                                        scale: hovered === claim.type ? 1.05 : 1,
                                        opacity: hovered === null || hovered === claim.type ? 1 : 0.5
                                    }}
                                    transition={{duration: 1.2, ease: 'easeOut', delay: claim.delay}}
                                />
                            </g>
                        )
                    })}
                </ChartSvg>
            </DonutSvgWrapper>
            <LegendContainer>
                {claimsData.map(claim => (
                    <LegendItem
                        key={claim.type}
                        onMouseEnter={() => setHovered(claim.type)}
                        onMouseLeave={() => setHovered(null)}
                        style={{opacity: hovered === null || hovered === claim.type ? 1 : 0.5}}
                    >
                        <LegendIcon>
                            <circle cx="6" cy="6" r="6"
                                    fill={claim.patternId ? `url(#${claim.patternId})` : claim.color}/>
                        </LegendIcon>
                        <div>
                            <Text $variant="label" style={{color: theme.colors.textHeadings}}>{claim.type}</Text>
                            <Text $variant="caption"
                                  style={{color: theme.colors.textHeadings, opacity: 0.8}}>{claim.value} claims
                                ({claim.percentage}%)</Text>
                        </div>
                    </LegendItem>
                ))}
            </LegendContainer>
        </DonutContainer>
    )
}

function ClaimsPortfolio() {
    return (
        <Card $variant="widget">
            <WidgetTitle $variant="h3">Claims Portfolio</WidgetTitle>
            <PortfolioGrid>
                <div>
                    <Text $variant="label" style={{opacity: 0.8, color: 'inherit'}}>Total Open
                        Claims</Text>
                    <BigNumber>1,250</BigNumber>
                </div>
                <div>
                    <Text $variant="label" style={{opacity: 0.8, color: 'inherit'}}>Avg. Time to
                        Settle</Text>
                    <ComparisonText>
                        <BigNumber>9.2</BigNumber>
                        <Text $variant="body" style={{paddingTop: '16px', color: 'inherit'}}>days</Text>
                        <TrendingDown size={24}/>
                    </ComparisonText>
                </div>
                <PortfolioGridFullRow>
                    <ConcentricDonutChart/>
                </PortfolioGridFullRow>
            </PortfolioGrid>
        </Card>
    );
}

function LiveMapWidget() {
    const theme = useTheme() as CortexaTheme;
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const map = useRef<Map | null>(null);

    useEffect(() => {
        if (map.current || !mapContainer.current) return;

        mapboxgl.accessToken = MAPBOX_TOKEN!;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: theme.colors.background === '#1D1D1F' ? "mapbox://styles/mapbox/dark-v11" : "mapbox://styles/mapbox/light-v11",
            center: [-2.5, 54.0],
            zoom: 5.5
        });

        map.current.on('load', () => {
            if (!map.current) return;
            map.current.addSource('claims', {
                type: 'geojson',
                data: claimsHotspots
            });
            map.current.addLayer({
                id: 'heatmap',
                source: 'claims',
                maxzoom: 9,
                type: 'heatmap',
                paint: {
                    'heatmap-weight': ['interpolate', ['linear'], ['get', 'magnitude'], 0, 0, 6, 1],
                    'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
                    'heatmap-color': [
                        'interpolate', ['linear'], ['heatmap-density'], 0, 'rgba(239, 246, 255, 0)',
                        0.2, 'rgb(191, 219, 254)', 0.4, 'rgb(147, 197, 253)',
                        0.6, 'rgb(96, 165, 250)', 0.8, theme.colors.primary,
                    ],
                    'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 9, 20],
                    'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0],
                }
            });
        });

        return () => {
            map.current?.remove();
            map.current = null;
        };
    }, [theme.colors.background, theme.colors.primary]);

    return (
        <Card $variant="widget" $fullWidth>
            <WidgetTitle $variant="h3">Live Claims Hotspot Map</WidgetTitle>
            <MapWrapper ref={mapContainer}/>
        </Card>
    );
}

function TopProductsWidget() {
    const productData: LeaderboardItemData[] = [
        {name: 'Momentum Auto', value: 1841},
        {name: 'Cortexa 360', value: 1237},
        {name: 'Aegis Home', value: 878},
        {name: 'Guardian Pet', value: 270},
    ];

    return (
        <Card $variant="widget">
            <WidgetTitle $variant="h3">Top Selling Products</WidgetTitle>
            <LeaderboardList
                items={productData}
                valueFormatter={(value: number) => value.toLocaleString()}
            />
        </Card>
    );
}

function AreaSalesWidget() {
    const areaData: LeaderboardItemData[] = [
        {name: 'London', value: 85320},
        {name: 'Manchester', value: 62150},
        {name: 'Birmingham', value: 48800},
    ];

    return (
        <Card $variant="widget">
            <WidgetTitle $variant="h3">Area-Wise Sales</WidgetTitle>
            <LeaderboardList
                items={areaData}
                valueFormatter={(value: number) => `£${value.toLocaleString()}`}
            />
        </Card>
    );
}

function LatencyLineChart() {
    const theme = useTheme() as CortexaTheme;
    const [latencyData, setLatencyData] = useState(Array(20).fill(200));

    useEffect(() => {
        const interval = setInterval(() => {
            setLatencyData(prevData => [...prevData.slice(1), Math.random() * 300 + 100]);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const path = latencyData.map((d, i) => `${i * 10},${100 - (d / 10)}`).join(' L ');

    return (
        <Card $variant="widget">
            <WidgetTitle $variant="h3">Platform Performance</WidgetTitle>
            <LatencyChartContainer>
                <ChartSvg width="100%" height="100%" viewBox="0 0 200 100">
                    <ThresholdLine x1="0" y1="0" x2="200" y2="0" stroke={theme.colors.borders} strokeWidth="1"
                                   strokeDasharray="4"/>
                    <ThresholdLabel x="5" y="12" fill={theme.colors.textHeadings} fontSize="10">1000ms</ThresholdLabel>
                    <ChartPath
                        d={`M ${path}`}
                        fill="none"
                        stroke={theme.colors.primary}
                        strokeWidth="2"
                        transition={{duration: 0.5}}
                    />
                </ChartSvg>
            </LatencyChartContainer>
            <Text $variant="caption" style={{color: theme.colors.textHeadings, paddingTop: '8px'}}>DX→CDP Latency
                (ms)</Text>
        </Card>
    );
}

function CoPilotWidget() {
    const theme = useTheme() as CortexaTheme;
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {staggerChildren: 0.2}},
    };
    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0},
    };

    return (
        <Card $variant="widget">
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
                <CoPilotHeader>
                    <CoPilotIcon>
                        <Sparkles size={22} color={theme.colors.primary}/>
                    </CoPilotIcon>
                    <WidgetTitle as="h3" $variant="h3" style={{marginBottom: 0}}>Cortexa Co-Pilot</WidgetTitle>
                </CoPilotHeader>
                <ListWrapper>
                    <CoPilotItem variants={itemVariants}>
                        <AlertTriangle size={24} color={theme.colors.warning}/>
                        <CoPilotText as="div" $variant="body">
                            Claim volume has spiked 30% in Fresno this week.
                            <Button $variant="tertiary">View Details</Button>
                        </CoPilotText>
                    </CoPilotItem>
                    <CoPilotItem variants={itemVariants}>
                        <TrendingUp size={24} color={theme.colors.success}/>
                        <CoPilotText as="div" $variant="body">
                            Life-Policy offer engagement is highest on mobile.
                            <Button $variant="tertiary">Optimize Campaign</Button>
                        </CoPilotText>
                    </CoPilotItem>
                    <CoPilotItem variants={itemVariants}>
                        <Zap size={24} color={theme.colors.primary}/>
                        <CoPilotText as="div" $variant="body">
                            New AI model for damage assessment is ready for review.
                            <Button $variant="tertiary">Deploy</Button>
                        </CoPilotText>
                    </CoPilotItem>
                </ListWrapper>
            </motion.div>
        </Card>
    );
}

export default function DashboardPage() {
    return (
        <DashboardWrapper>
            <Container>
                <PageTitle as="h1">Regional Command Center</PageTitle>
                <MainLayout>
                    <MainContent>
                        <TotalRevenueWidget/>
                        <NewPoliciesWidget/>
                        <LiveMapWidget/>
                        <TopProductsWidget/>
                        <AreaSalesWidget/>
                    </MainContent>
                    <Sidebar>
                        <CoPilotWidget/>
                        <ClaimsPortfolio/>
                        <LatencyLineChart/>
                    </Sidebar>
                    <FullWidthWrapper>
                        <TopUserJourneysWidget/>
                    </FullWidthWrapper>
                </MainLayout>
            </Container>
        </DashboardWrapper>
    );
}