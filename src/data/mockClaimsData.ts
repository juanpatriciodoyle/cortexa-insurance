import {FeatureCollection} from 'geojson';

export const claimsHotspots: FeatureCollection = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-6.2603, 53.3498]},
            properties: {id: 'dublin', magnitude: 250}
        },
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-9.647, 52.679]},
            properties: {id: 'kilkee', magnitude: 180}
        },
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-6.65, 52.32]},
            properties: {id: 'taghmon', magnitude: 150}
        },
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-6.46, 52.34]},
            properties: {id: 'wexford', magnitude: 120}
        },
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-8.48, 51.9]},
            properties: {id: 'cork', magnitude: 90}
        }
    ]
};