import { usePreferences } from '../utils/dx/preferences';
import { getAdaptedData } from '../data/dataAdapter';

export const useAdaptedData = () => {
    const { preferences, currency } = usePreferences();
    return getAdaptedData(preferences, currency);
};