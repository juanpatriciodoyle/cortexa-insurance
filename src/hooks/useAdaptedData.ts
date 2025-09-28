import {useSettings} from '../utils/dx/settingsContext';
import {getAdaptedData} from '../data/dataAdapter';

export const useAdaptedData = () => {
    const {settings, currency} = useSettings();
    return getAdaptedData(settings, currency);
};