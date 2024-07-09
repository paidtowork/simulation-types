import { ISO8601DateString } from "../common";

type LatitudeLongitude = {
    latitude: number;
    longitude: number;
};

type TimeWindow = {
    startTime: string;
    endTime: string;
    softEndTime?: string;
    costPerHourAfterSoftEndTime?: number;
};

type Pickup = {
    arrivalLocation: LatitudeLongitude;
    timeWindows: TimeWindow[];
    duration: string;
};

type Shipment = {
    pickups: Pickup[];
    penaltyCost?: number;
    name: string;
};

type Vehicle = {
    startLocation: LatitudeLongitude;
    startTimeWindows: TimeWindow[];
    costPerHour?: number;
    costPerTraveledHour?: number;
    name: string;
};

type OptimizeToursRequestModel = {
    shipments: Shipment[];
    vehicles: Vehicle[];
    globalStartTime: ISO8601DateString;
    globalEndTime: ISO8601DateString;
};

export type OptimizeToursRequest = {
    optimizationRequest?: {
        parent: string;
        timeout: string;
        model: OptimizeToursRequestModel;
        injectedSolutionConstraint?: {};
    };
};