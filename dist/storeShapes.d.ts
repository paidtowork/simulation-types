import { ISO8601DateString, SimulationStatus } from './common';
import { EncodedPolyline, OptimizeToursResponse } from './simulation/response'
import { OptimizeToursRequest } from './simulation/optimizeToursRequest';

// datetime
export type DatetimeStore = {
    selectedTimeInISO8601: string;
};

// location
// TODO: Clarify defintion for site (location + realty info + weather) v. location
// TODO: Consolidate LatLng and LatLong
export type LatLng = {
    lat: number;
    lng: number;
}

export type Location = LatLng & {
    // TODO: Consolidate street_address and streetAddress
    street_address: string;
};

export type VisitListRow = {
    readonly streetAddress: string;
    readonly time: {
        arrivalTime: ISO8601DateString;
        departureTime: ISO8601DateString;
    };
    readonly type: 'visit';
    readonly index?: number;
    readonly routeId?: number;
    readonly shipmentId?: number; // TODO: useless?
};

export type TransitionListRow = {
    readonly distance: number;
    readonly distanceUnit: 'mi' | 'km';
    readonly duration: {
        days?: number;
        hours: number;
        minutes: number;
    };
    readonly time?: {
        arrivalTime: ISO8601DateString;
        departureTime: ISO8601DateString;
    };
    readonly type: 'transition';
    readonly index?: number;
    readonly routeId?: number;
};

export type LocationListRow = (VisitListRow | TransitionListRow);
export type EncodedPolylineForRoute = {
    [routeId: number]: EncodedPolyline;
};
export type EncodedPolylineForRouteTransitions = {
    [routeId: number]: EncodedPolyline[];
};

export type LocationStore = {
    center: LatLng,
    encodedPolylineForRoute?: EncodedPolylineForRoute;
    encodedPolylineForRouteTransitions?: EncodedPolylineForRouteTransitions;
    globalInfoWindowOpen: boolean,
    locations: Location[],
    DEPRECATEDLocations: LocationListRow[],
    requestedLocationsCount: number,
}

// simulation
export type SimulationStore = {
    // TODO: this should always be a string because this shouldn't even be initialized
    // unless there is a pending(last step in UserJourney) or already completed simulation.
    readonly simulationId: (string | null);
    readonly mapBounds?: [number, number][];
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
