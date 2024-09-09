import * as protos from '@google-cloud/optimization/build/protos/protos';
import { Timestamp } from '@google-cloud/firestore';
import { ISO8601DateString, SimulationStatus } from '../common';
import { WeatherEvent } from '../weather';

// ********************* route: fetch-location-data ************************
export type LocationDataResponse = {
    readonly parkingSpacesCount: number;
    readonly streetAddress: string;
    readonly weatherEvents: WeatherEvent[];
}

export type WeatherEventsResponse = {
    weatherEvents: Map<LatLngStr, MMQueryResult[]>,
    contiguousWeatherEvents: Map<LatLngStr, WeatherEvent[]>
};

// ********************* collection: Result ************************
export type Simulation = {
    readonly simulationId: string;
    status: SimulationStatus;
    readonly created_at: ISO8601DateString | Timestamp;
    updated_at: ISO8601DateString | Timestamp;
    readonly userId: string;

    readonly imgUrl?: string;
    readonly title?: string;
    readonly solutionUrl?: string;
    readonly subtitle?: string;
};
