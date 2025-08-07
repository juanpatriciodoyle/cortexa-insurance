import React from 'react';
import styled, {useTheme} from 'styled-components';
import {FileText, Home, User, Video} from 'lucide-react';
import {CortexaTheme} from '../../styles/theme';
import Card from '../ui/Card';
import Text from '../../styles/Text';
import {topUserJourneysData} from "../../data/dashboardData";

const WidgetTitle = styled(Text)`
    color: ${({theme}) => theme.colors.textHeadings};
    margin-bottom: 24px;
`;

const JourneysGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
`;

const JourneyTile = styled.div`
    border-radius: ${({theme}) => theme.sizing.borderRadius.cards};
    padding: 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    border: 1px solid ${({theme}) => theme.colors.borders};
    transition: border-color 0.3s ease, transform 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        border-color: ${({theme}) => theme.colors.primary};
    }
`;

const IconWrapper = styled.div<{ $color: string }>`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({$color}) => $color};
    flex-shrink: 0;
`;

const JourneyInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const icons: { [key: string]: React.ElementType } = {
    FileText,
    Home,
    User,
    Video,
};

function TopUserJourneysWidget() {
    const theme = useTheme() as CortexaTheme;

    return (
        <Card $variant="widget" $fullWidth>
            <WidgetTitle $variant="h3">Top User Journeys</WidgetTitle>
            <JourneysGrid>
                {topUserJourneysData.map((journey) => {
                    const IconComponent = icons[journey.icon];
                    return (
                        <JourneyTile key={journey.title}>
                            <IconWrapper $color={journey.bgColor}>
                                <IconComponent color={journey.iconColor} size={20}/>
                            </IconWrapper>
                            <JourneyInfo>
                                <Text as="h4" $variant="label"
                                      style={{fontWeight: theme.font.weights.bold, color: theme.colors.textHeadings}}>
                                    {journey.title}
                                </Text>
                                <Text $variant="caption">{journey.metric}</Text>
                            </JourneyInfo>
                        </JourneyTile>
                    );
                })}
            </JourneysGrid>
        </Card>
    );
}

export default TopUserJourneysWidget;