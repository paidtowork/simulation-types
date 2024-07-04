import { ISO8601DateString, SimulationStatusType } from './common';
import { OptimizeToursResponse } from './simulation/response'

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

export type LocationListRow = {
    streetAddress: string;
    time: {
        arrivalTime: ISO8601DateString;
        departureTime: ISO8601DateString;
    };
    index?: number;
};

export type LocationStore = {
    center: LatLng,
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
    readonly result?: OptimizeToursResponse;

    status: SimulationStatusType,
    readonly snowDepthTrigger?: number,
};

