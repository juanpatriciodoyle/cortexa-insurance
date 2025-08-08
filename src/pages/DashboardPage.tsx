import React from 'react';
import styled from 'styled-components';
import {Container} from '../components/ui/Container';
import Text from '../styles/Text';
import TotalRevenueWidget from '../components/dashboard/TotalRevenueWidget';
import NewPoliciesWidget from '../components/dashboard/NewPoliciesWidget';
import LiveMapWidget from '../components/dashboard/LiveMapWidget';
import TopProductsWidget from '../components/dashboard/TopProductsWidget';
import AreaSalesWidget from '../components/dashboard/AreaSalesWidget';
import AiWidget from '../components/dashboard/AiWidget';
import TotalOpenClaimsChart from '../components/dashboard/ClaimsPortfolio';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import TopUserJourneysWidget from '../components/dashboard/TopUserJourneysWidget';

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
                        <AiWidget/>
                        <TotalOpenClaimsChart/>
                        <PerformanceChart/>
                    </Sidebar>
                    <FullWidthWrapper>
                        <TopUserJourneysWidget/>
                    </FullWidthWrapper>
                </MainLayout>
            </Container>
        </DashboardWrapper>
    );
}