import * as protos from '@google-cloud/optimization/build/protos/protos';
import { Timestamp } from '@google-cloud/firestore';
import { ISO8601DateString, STATUS_ENUM } from '../common';
import { WeatherEvent } from '../weather';

// ********************* fetch-location-data ************************
export type LocationDataResponse = {
    parkingSpacesCount: number,
    streetAddress: string,
    weatherEvents: WeatherEvent[]
}

export type Simulation = {
    readonly simulationId: string;
    solutionUrl?: string;
    status: STATUS_ENUM;
    readonly created_at: ISO8601DateString | Timestamp;
    updated_at: ISO8601DateString | Timestamp;
    readonly userId: string;
};
