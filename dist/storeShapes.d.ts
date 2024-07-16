import { ISO8601DateString, LatLng, SimulationStatus } from './common';
import { EncodedPolyline, OptimizeToursResponse } from './simulation/response'
import { OptimizeToursRequest } from './simulation/optimizeToursRequest';
import { WeatherEvent } from './weather';

// datetime
export type DatetimeStore = {
    selectedTimeInISO8601: string;
};

// location
export type Location = LatLng & {
    isContinuousOp?: boolean; // clear everytime snow depth threshold is crossed
    parkingSpaceCount?: number;
    streetAddress?: string;
};
export type LocationStore = {
    // Show only one route's polylines at a time
    // Polylines is handled by RouteGrid
    locations?: Location[],
    route?: {
        locationList: LocationListRow[];
        encodedPolylineForRoute?: EncodedPolyline;
        encodedPolylineForRouteTransitions?: EncodedPolyline[];
        polylineHexColor?: string;
    },
    weather?: {
        weatherEvents: Map<LatLngStr, MMQueryResult[]>,
        contiguousWeatherEvents: Map<LatLngStr, WeatherEvent[]>,
    }
};

// simulation
export type SimulationStore = {
    readonly simulationId: (string | null);
    readonly request?: OptimizeToursRequest;
    readonly result?: OptimizeToursResponse;
    status: SimulationStatus,
    readonly snowDepthTrigger?: number,
};

// user
export type DistanceUnitType = 'mi' | 'km';
export type LocaleUnitType = 'en' | 'fr';
export type TemperatureUnitType = 'C' | 'F';
export type TimeFormatType = 'MMM DD hh:mm A' | 'DD MMM HH:mm';
export type UserStore = {
    distanceUnit: DistanceUnitType;
    locale: LocaleUnitType;
    temperatureUnit: TemperatureUnitType;
    timeFormat: TimeFormatType;
};
