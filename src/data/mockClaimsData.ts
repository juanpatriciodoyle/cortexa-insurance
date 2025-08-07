import {FeatureCollection} from 'geojson';

export const claimsHotspots: FeatureCollection = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-0.1278, 51.5074]},
            properties: {id: 'london', magnitude: 250}
        },
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-2.2426, 53.4808]},
            properties: {id: 'manchester', magnitude: 180}
        },
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-1.8904, 52.4862]},
            properties: {id: 'birmingham', magnitude: 150}
        },
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-4.2518, 55.8642]},
            properties: {id: 'glasgow', magnitude: 120}
        },
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-1.549, 53.8008]},
            properties: {id: 'leeds', magnitude: 90}
        },
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-2.5879, 51.4545]},
            properties: {id: 'bristol', magnitude: 75}
        },
        {
            type: 'Feature',
            geometry: {type: 'Point', coordinates: [-3.1883, 55.9533]},
            properties: {id: 'edinburgh', magnitude: 60}
        }
    ]
};