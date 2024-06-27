import * as protos from '@google-cloud/optimization/build/protos/protos';
import { ISO8601DateString } from '../common';

// ********************* fetch-location-data ************************
type AutoGenerate = {
    readonly mapBounds: number[],
    readonly sitesCount: number
};
type LatLong = {
    readonly lat: number;
    readonly long: number;
};
export type locationDataRequest = {
    readonly start_time: ISO8601DateString;
    readonly end_time?: ISO8601DateString; // default 48h (most snowstorm durations)
    readonly locations: LatLong[];
    // auto-generated location config
    readonly autoGenerate?: AutoGenerate;
}

// ********************* Cloud Fleet Routing API ************************
type TimeWindow = {
    startTime: ISO8601DateString;
    endTime: ISO8601DateString;

    // Soft end time requires cost as well
    costPerHourAfterSoftEndTime?: number;
    softEndTime?: ISO8601DateString;
}

export type VisitRequest = Pick<protos.google.cloud.optimization.v1.Shipment.IVisitRequest, 'arrivalLocation' | 'duration' | 'label' | 'timeWindows'>;
export type Site = Pick<protos.google.cloud.optimization.v1.IShipment, 'pickups' | 'penaltyCost' | 'label'>;
export type Vehicle = Pick<protos.google.cloud.optimization.v1.IVehicle, 'costPerHour' | 'costPerTraveledHour' | 'label' | 'startLocation' | 'startTimeWindows' | 'endTimeWindows' | 'travelMode'>;

export type Optimizer = {
    displayName: string;
    modelSpec: {
        globalStartTime: ISO8601DateString;
        globalEndTime: ISO8601DateString;
    }
    optimizeToursSpec: {
        timeout: string;
        searchMode?: protos.google.cloud.optimization.v1.OptimizeToursRequest.SearchMode,
    }
};

export type RequestData = {
    readonly userId: string;
    readonly isFastest: boolean;
    readonly simulationId: string;
    readonly snowDepthTrigger: number;
    optimizer: Optimizer;
    sites: Site[];
    vehicles: Vehicle[];
};
