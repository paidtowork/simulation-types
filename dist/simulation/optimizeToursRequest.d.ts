import { ISO8601DateString } from "../common";

type LatitudeLongitude = {
    latitude: number;
    longitude: number;
};

type TimeWindow = {
    startTime: ISO8601DateString;
    endTime: ISO8601DateString;

    softStartTime?: ISO8601DateString;
    softEndTime?: ISO8601DateString;
    costPerHourBeforeSoftStartTime?: number;
    costPerHourAfterSoftEndTime?: number;
};

type OptimizeToursRequestPickup = {
    arrivalLocation: LatitudeLongitude;
    label: string;
    timeWindows: TimeWindow[];
    duration: string | { [key: string]: string };
};

type OptimizeToursRequestShipment = {
    costsPerVehicle: number[];
    pickups: OptimizeToursRequestPickup[];

    isContinuous?: boolean;
    readonly name?: string;
};

type OptimizeToursRequestVehicle = {
    label: string;
    startLocation: LatitudeLongitude;
    startTimeWindows: TimeWindow[];

    endLocation?: LatitudeLongitude;
    endTimeWindows?: TimeWindow[];
    costPerHour?: number;
    costPerTraveledHour?: number;
    name?: string;
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
        populatePolylines?: boolean;
        populateTransitionPolylines?: boolean;
    };
};