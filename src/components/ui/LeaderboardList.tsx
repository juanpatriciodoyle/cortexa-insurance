import React from 'react';
import styled from 'styled-components';
import Text from '../../styles/Text';

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const ItemRow = styled.div`
    display: grid;
    grid-template-columns: 24px 1fr auto;
    align-items: center;
    gap: 16px;
`;

const Rank = styled.div<{ $isFirst: boolean }>`
    font-size: ${({theme}) => theme.font.sizes.subtext};
    font-weight: ${({theme}) => theme.font.weights.bold};
    color: ${({theme, $isFirst}) => ($isFirst ? '#FFFFFF' : theme.colors.textBody)};
    background-color: ${({theme, $isFirst}) => ($isFirst ? theme.colors.primary : 'transparent')};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    text-align: left;
`;

const BarContainer = styled.div`
    height: 8px;
    width: 100%;
    background-color: ${({theme}) => theme.colors.subtleBackground};
    border-radius: 4px;
    overflow: hidden;
`;

const ProportionalBar = styled.div<{ width: number }>`
    height: 100%;
    width: ${({width}) => width}%;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 4px;
    transition: width 0.5s ease-out;
`;

const ItemValue = styled(Text)`
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    font-weight: ${({theme}) => theme.font.weights.bold};
    color: ${({theme}) => theme.colors.textHeadings};
`;

export interface LeaderboardItemData {
    name: string;
    value: number;
}

interface LeaderboardListProps {
    items: LeaderboardItemData[];
    valueFormatter: (value: number) => string;
}

function LeaderboardList({items, valueFormatter}: LeaderboardListProps) {
    const topValue = items.length > 0 ? Math.max(...items.map(item => item.value)) : 1;

    return (
        <ListWrapper>
            {items.map((item, index) => {
                const barWidth = (item.value / topValue) * 100;
                return (
                    <ItemRow key={item.name}>
                        <Rank $isFirst={index === 0}>{index + 1}</Rank>
                        <ItemInfo>
                            <Text as="span" $variant="label"
                                  style={{fontWeight: 'bold', color: 'inherit'}}>{item.name}</Text>
                            <BarContainer>
                                <ProportionalBar width={barWidth}/>
                            </BarContainer>
                        </ItemInfo>
                        <ItemValue as="span" $variant="label">{valueFormatter(item.value)}</ItemValue>
                    </ItemRow>
                );
            })}
        </ListWrapper>
    );
}

export default LeaderboardList;