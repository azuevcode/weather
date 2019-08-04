import { PROXY_PREFIX } from 'constants.js';

export const getLocationSearchWeatherApi = () => `${PROXY_PREFIX}/api/location/search/`;
export const getLocationWeatherApi = woeid => `${PROXY_PREFIX}/api/location/${woeid}/`;
export const getLocationDayWeatherApi = (woeid, date) => `${PROXY_PREFIX}/api/location/${woeid}/${date}/`;
