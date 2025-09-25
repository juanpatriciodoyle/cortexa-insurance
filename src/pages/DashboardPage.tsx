import React, {useState} from 'react';
import styled from 'styled-components';
import {Settings} from 'lucide-react';
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

const DashboardWrapper = styled.div.attrs({
    className: 'dx-protection'
})`
    padding: 60px 24px;
    background-color: ${({theme}) => theme.colors.subtleBackground};
    min-height: 100vh;
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

const SettingsButton = styled.button`
    box-sizing: border-box !important;

    background-color: ${({theme}) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 100;
    transition: transform 0.2s ease-out;
    box-sizing: border-box;

    &:hover {
        transform: scale(1.1);
    }
`;

interface DashboardPageProps {
    isLocalhost: boolean;
}

function DashboardPage({isLocalhost}: DashboardPageProps) {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <>
            <DashboardWrapper>
                <Container>
                    <TitleWrapper>
                        <PageTitle as="h1">{dashboardContent.pageTitle}</PageTitle>
                        <SettingsButton className={isLocalhost ? '' : 'hide_in_view_mode'} onClick={() => setModalOpen(true)}>
                            <Settings size={28}/>
                        </SettingsButton>
                    </TitleWrapper>

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

            <SettingsModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
        </>
    );
}

export default DashboardPage;