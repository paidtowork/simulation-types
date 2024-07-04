import * as protos from '@google-cloud/optimization/build/protos/protos';
import { Timestamp } from '@google-cloud/firestore';
import { ISO8601DateString, SimulationStatus } from '../common';
import { WeatherEvent } from '../weather';

// ********************* Cloud Fleet REST API: OptimizeToursResponse ************************
export type Visit = {
    shipmentIndex?: number,
    shipmentName: string,
    isPickup: boolean,
    visitRequestIndex?: number,
    startTime: string,
    detour: string,
    shipmentLabel?: string,
    visitLabel?: string,
};

export type EncodedPolyline = {
    points: string;
};

export type Transition = {
    travelDuration: string,
    travelDistanceMeters: number,
    trafficInfoUnavailable?: boolean,
    delayDuration?: string,
    breakDuration?: string,
    waitDuration: string,
    totalDuration: string,
    startTime: string,
    routePolyline?: EncodedPolyline,
};

export type Break = {
    startTime: ISO8601DateString;
    duration: string;
};

export type RouteCosts = {
    "model.vehicles.cost_per_hour": number;
    "model.vehicles.cost_per_traveled_hour": number;
    "model.shipments.pickups.time_windows.cost_per_hour_after_soft_end_time"?: number;
};

export type AggregatedMetrics = {
    performedShipmentCount: number,
    travelDuration: string,
    waitDuration: string,
    delayDuration: string,
    breakDuration: string,
    visitDuration: string,
    totalDuration: string,
    travelDistanceMeters: number,
};

export type ShipmentRoute = {
    vehicleIndex?: number,
    vehicleLabel?: string,
    vehicleName: string,
    vehicleStartTime: ISO8601DateString,
    vehicleEndTime: ISO8601DateString,
    visits: Visit[],
    transitions: Transition[],
    hasTrafficInfeasibilities?: boolean,
    routePolyline?: EncodedPolyline,
    breaks?: Break[],
    metrics: AggregatedMetrics,
    routeCosts: RouteCosts,
    routeTotalCost: number,
};

export type SkippedShipment = {};// TODO: handle SkippedShipment
export type OptimizeToursValidationError = {}; // TODO: handle OptimizeTours errors
export type GlobalMetrics = {
    aggregatedRouteMetrics: AggregatedMetrics;
    usedVehicleCount: number;
    earliestVehicleStartTime: string;
    latestVehicleEndTime: string;
    costs: RouteCosts,
    totalCost: number
};

export type OptimizeToursResponse = {
    routes: ShipmentRoute[];
    requestLabel?: string;
    skippedShipments?: SkippedShipment[];
    validationErrors?: OptimizeToursValidationError[];
    metrics: GlobalMetrics;
};

// ********************* route: fetch-location-data ************************
export type LocationDataResponse = {
    parkingSpacesCount: number,
    streetAddress: string,
    weatherEvents: WeatherEvent[]
}

// ********************* collection: Result ************************
export type Simulation = {
    readonly simulationId: string;
    solutionUrl?: string;
    status: SimulationStatus;
    readonly created_at: ISO8601DateString | Timestamp;
    updated_at: ISO8601DateString | Timestamp;
    readonly userId: string;
};
