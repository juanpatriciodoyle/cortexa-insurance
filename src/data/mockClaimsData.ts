import {FeatureCollection} from 'geojson';

export const claimsHotspots: FeatureCollection = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-118.2437, 34.0522]},
            properties: {id: 'la', magnitude: 150}
        },
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-117.1611, 32.7157]},
            properties: {id: 'sd', magnitude: 75}
        },
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-122.4194, 37.7749]},
            properties: {id: 'sf', magnitude: 120}
        },
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-119.7871, 36.7378]},
            properties: {id: 'fresno', magnitude: 250}
        },
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-121.4944, 38.5816]},
            properties: {id: 'sac', magnitude: 180}
        },
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-121.8863, 37.3382]},
            properties: {id: 'sj', magnitude: 90}
        },
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-117.9143, 33.8366]},
            properties: {id: 'anaheim', magnitude: 60}
        }
    ]
};