import React from 'react';
import styled, {useTheme} from 'styled-components';
import {motion} from 'framer-motion';
import {AlertTriangle, Sparkles, TrendingUp, Zap} from 'lucide-react';
import {CortexaTheme} from '../../styles/theme';
import Card from '../ui/Card';
import Button from '../ui/Button';
import {CoPilotHeader, CoPilotIcon, CoPilotItem, CoPilotText, ListWrapper, WidgetTitle} from './Dashboard.styled';
import {coPilotData} from "../../data/dashboardData";

const ExploreButtonWrapper = styled.div`
    margin-left: auto;
`;

const CoPilotContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const icons: { [key: string]: React.ElementType } = {
    AlertTriangle,
    TrendingUp,
    Zap,
};

function AiWidget() {
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
                    <WidgetTitle as="h3" $variant="h3" style={{marginBottom: 0}}>Max AI</WidgetTitle>
                    <ExploreButtonWrapper>
                        <Button $variant="tertiary">View more insights →</Button>
                    </ExploreButtonWrapper>
                </CoPilotHeader>
                <ListWrapper>
                    {coPilotData.map((item, index) => {
                        const IconComponent = icons[item.icon];
                        return (
                            <CoPilotItem key={index} variants={itemVariants}>
                                <IconComponent size={24}
                                               color={theme.colors[item.type as keyof typeof theme.colors]}/>
                                <CoPilotContent>
                                    <CoPilotText as="p" $variant="body">
                                        {item.text}
                                    </CoPilotText>
                                    <Button $variant="tertiary" style={{marginTop: '4px'}}>
                                        {item.action}
                                    </Button>
                                </CoPilotContent>
                            </CoPilotItem>
                        );
                    })}
                </ListWrapper>
            </motion.div>
        </Card>
    );
}

export default AiWidget;