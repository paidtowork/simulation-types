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

type OptimizeToursRequestPickup = {
    arrivalLocation: LatitudeLongitude;
    timeWindows: TimeWindow[];
    duration: string;
};

type OptimizeToursRequestShipment = {
    label: string;
    pickups: OptimizeToursRequestPickup[];
    penaltyCost?: number;
    name: string;
};

type OptimizeToursRequestVehicle = {
    label?: string;
    startLocation: LatitudeLongitude;
    startTimeWindows: TimeWindow[];
    costPerHour?: number;
    costPerTraveledHour?: number;
    name: string;
};

type OptimizeToursRequestModel = {
    shipments: OptimizeToursRequestShipment[];
    vehicles: OptimizeToursRequestVehicle[];
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