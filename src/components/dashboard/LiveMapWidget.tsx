import React, {useEffect, useRef} from 'react';
import {useTheme} from 'styled-components';
import mapboxgl, {Map} from 'mapbox-gl';
import {claimsHotspots} from '../../data/mockClaimsData';
import Card from '../ui/Card';
import {CortexaTheme} from '../../styles/theme';
import {MapWrapper, WidgetTitle} from './Dashboard.styled';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

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

export default LiveMapWidget;