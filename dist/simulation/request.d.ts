import * as protos from '@google-cloud/optimization/build/protos/protos';
import { ISO8601DateString, LatLng } from '../common';
import { LengthUnit, Location } from '../storeShapes';
import { OptimizeToursRequestShipment, OptimizeToursRequestVehicle } from './optimizeToursRequest';

// ********************* fetch-location-data ************************
type AutoGenerateConfig = {
    readonly mapBounds: [number, number][],
    readonly sitesCount: number
};

export type WeatherEventsRequest = {
    readonly startTime: ISO8601DateString;
    readonly endTime: ISO8601DateString;
    readonly locations: Location[];
    readonly snowDepthTrigger: number;
    // auto-generated location config
    readonly autoGenerateConfig?: AutoGenerateConfig;
}

export type TimeWindowHTTPRequest = {
    startTime: ISO8601DateString;
    endTime: ISO8601DateString;

    // Soft end time requires cost as well
    softEndTime?: ISO8601DateString;
    costPerHour?: number;
    costPerTraveledHour?: number;
};

export type Optimizer = {
    displayName: string;
    modelSpec: {
        globalStartTime: ISO8601DateString;
        globalEndTime: ISO8601DateString;
    }
    optimizeToursSpec: {
        timeout: string;
        populatePolylines: boolean;
        populateTransitionPolylines: boolean;
        searchMode?: protos.google.cloud.optimization.v1.OptimizeToursRequest.SearchMode,
    }
};

export type SimulationRequest = {
    readonly userId: string;
    readonly isFastest: boolean;
    readonly simulationId: string;
    readonly snowDepthTrigger: number;
    optimizer: Optimizer;
    sites: OptimizeToursRequestShipment[];
    vehicles: OptimizeToursRequestVehicle[];

    readonly lengthUnit?: LengthUnit;
    readonly referenceLocation?: string;
};
