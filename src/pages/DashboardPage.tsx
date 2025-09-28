import React, {useState} from 'react';
import styled from 'styled-components';
import {Container} from '../components/ui/Container';
import Text from '../styles/Text';
import TotalRevenueWidget from '../components/dashboard/TotalRevenueWidget';
import NewPoliciesWidget from '../components/dashboard/NewPoliciesWidget';
import LiveMapWidget from '../components/dashboard/LiveMapWidget';
import TopProductsWidget from '../components/dashboard/TopProductsWidget';
import AreaSalesWidget from '../components/dashboard/AreaSalesWidget';
import AiWidget from '../components/dashboard/AiWidget';
import ClaimsPortfolio from '../components/dashboard/ClaimsPortfolio';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import TopUserJourneysWidget from '../components/dashboard/TopUserJourneysWidget';
import SettingsModal from '../utils/dx/SettingsModal';
import {dashboardContent} from '../data/content';
import SettingsButton from "../utils/dx/SettingsButton";

const DashboardWrapper = styled.div`
    padding: 60px 24px;
    background-color: ${({theme}) => theme.colors.subtleBackground};
    min-height: 100vh;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;
`;

const PageTitle = styled(Text)`
    font-size: 56px;
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

interface DashboardPageProps {
    isLocalhost: boolean;
}

function DashboardPage({isLocalhost}: DashboardPageProps) {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <DashboardWrapper>
            <Container>
                <TitleWrapper>
                    <PageTitle as="h1">{dashboardContent.pageTitle}</PageTitle>
                    <SettingsButton
                        isLocalhost={isLocalhost}
                        onClick={() => setModalOpen(true)}
                        isActive={isModalOpen}
                    />
                </TitleWrapper>

                <SettingsModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>

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
                        <ClaimsPortfolio/>
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

export default DashboardPage;