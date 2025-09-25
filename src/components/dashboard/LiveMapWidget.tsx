import React, {useEffect, useRef} from 'react';
import {useTheme} from 'styled-components';
import mapboxgl, {Map} from 'mapbox-gl';
import Card from '../ui/Card';
import {VivreTheme} from '../../styles/theme';
import {MapWrapper, WidgetTitle} from './Dashboard.styled';
import 'mapbox-gl/dist/mapbox-gl.css';
import {dashboardContent} from '../../data/content';
import {useAdaptedData} from "../../hooks/useAdaptedData";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

function LiveMapWidget() {
    const theme = useTheme() as VivreTheme;
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const map = useRef<Map | null>(null);
    const {liveMapData} = useAdaptedData();

    useEffect(() => {
        if (!mapContainer.current || !MAPBOX_TOKEN) return;

        mapboxgl.accessToken = MAPBOX_TOKEN;
        const newMap = new mapboxgl.Map({
            container: mapContainer.current,
            style: theme.colors.background === '#1D1D1F' ? "mapbox://styles/mapbox/dark-v11" : "mapbox://styles/mapbox/light-v11",
            center: liveMapData.center,
            zoom: liveMapData.zoom,
        });

        newMap.on('load', () => {
            newMap.addSource('claims', {
                type: 'geojson',
                data: liveMapData.claimsHotspots
            });
            newMap.addLayer({
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

        map.current = newMap;

        return () => {
            map.current?.remove();
            map.current = null;
        };
    }, [theme.colors.background, theme.colors.primary, liveMapData]);

    return (
        <Card $variant="widget" $fullWidth>
            <WidgetTitle $variant="h3">{dashboardContent.liveMapTitle}</WidgetTitle>
            <MapWrapper ref={mapContainer}/>
        </Card>
    );
}

export default LiveMapWidget;