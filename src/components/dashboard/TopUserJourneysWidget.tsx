import React from 'react';
import styled, {useTheme} from 'styled-components';
import {FileText, Home, User, Video} from 'lucide-react';
import {CortexaTheme} from '../../styles/theme';
import Card from '../ui/Card';
import Text from '../../styles/Text';

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
    background-color: ${({theme}) => theme.colors.subtleBackground};
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

const IconWrapper = styled.div<{$color: string}>`
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

const journeys = [
    {
        Icon: FileText,
        bgColor: '#E5F0FF',
        iconColor: '#0048DF',
        title: 'Get an Auto Quote',
        metric: '1.2k users today',
    },
    {
        Icon: Home,
        bgColor: '#FFE5E9',
        iconColor: '#F93154',
        title: 'File a Home Claim',
        metric: '89 users today',
    },
    {
        Icon: User,
        bgColor: '#E5F8ED',
        iconColor: '#00B74A',
        title: 'Update Life Beneficiary',
        metric: '45 users today',
    },
    {
        Icon: Video,
        bgColor: '#FFF8E5',
        iconColor: '#FFA900',
        title: 'Find a Vet (Pet)',
        metric: '21 users today',
    },
];

function TopUserJourneysWidget() {
    const theme = useTheme() as CortexaTheme;

    return (
        <Card $variant="widget" $fullWidth>
            <WidgetTitle $variant="h3">Top User Journeys</WidgetTitle>
            <JourneysGrid>
                {journeys.map((journey) => (
                    <JourneyTile key={journey.title}>
                        <IconWrapper $color={journey.bgColor}>
                            <journey.Icon color={journey.iconColor} size={20}/>
                        </IconWrapper>
                        <JourneyInfo>
                            <Text as="h4" $variant="label"
                                  style={{fontWeight: theme.font.weights.bold, color: theme.colors.textHeadings}}>
                                {journey.title}
                            </Text>
                            <Text $variant="caption">{journey.metric}</Text>
                        </JourneyInfo>
                    </JourneyTile>
                ))}
            </JourneysGrid>
        </Card>
    );
}

export default TopUserJourneysWidget;