import React from 'react';
import {useTheme} from 'styled-components';
import {motion} from 'framer-motion';
import {AlertTriangle, Sparkles, TrendingUp, Zap} from 'lucide-react';
import {CortexaTheme} from '../../styles/theme';
import Card from '../ui/Card';
import Button from '../ui/Button';
import {CoPilotHeader, CoPilotIcon, CoPilotItem, CoPilotText, ListWrapper, WidgetTitle} from './Dashboard.styled';
import {coPilotData} from "../../data/dashboardData";

const icons: { [key: string]: React.ElementType } = {
    AlertTriangle,
    TrendingUp,
    Zap,
};

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
                    {coPilotData.map((item, index) => {
                        const IconComponent = icons[item.icon];
                        return (
                            <CoPilotItem key={index} variants={itemVariants}>
                                <IconComponent size={24} color={theme.colors[item.color as keyof typeof theme.colors]}/>
                                <CoPilotText as="div" $variant="body">
                                    {item.text}
                                    <Button $variant="tertiary">{item.action}</Button>
                                </CoPilotText>
                            </CoPilotItem>
                        );
                    })}
                </ListWrapper>
            </motion.div>
        </Card>
    );
}

export default CoPilotWidget;