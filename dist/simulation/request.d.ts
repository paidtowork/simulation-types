import * as protos from '@google-cloud/optimization/build/protos/protos';

export enum STATUS_ENUM {
    pending = 0,
    success = 1,
    failure = 2
}

type LatLng = {
    latitude: number;
    longitude: number;
}

type ISO8601DateString = string;

type TimeWindow = {
    startTime: ISO8601DateString;
    softEndTime?: ISO8601DateString;
    endTime: ISO8601DateString;
}

type VisitRequest = {
    arrivalLocation: LatLng;
    // currency?: string;
    duration: protos.google.protobuf.IDuration;
    penaltyCost?: number;
    timeWindows: TimeWindow[];
}

export type Site = {
    address: string;
    displayName: string;
    pickups: VisitRequest[];
    penaltyCost?: number;
    snowDepthThreshold?: number;

    // set upon creation in workspace
    shipmentId?: string;
};

export type Vehicle = {
    costPerHour?: number;
    costPerTraveledHour?: number;
    // currency?: string;
    displayName: string;
    startTime: ISO8601DateString;
    endTime: ISO8601DateString;
    startLocation: LatLng;
    startTimeWindows: TimeWindow[];
    travelMode?: protos.google.cloud.optimization.v1.Vehicle.TravelMode;

    // set upon creation in workspace
    vehicleId?: string;
};

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
    userId: string;
    resultId: string;
    sites: Site[];
    vehicles: Vehicle[];
};
