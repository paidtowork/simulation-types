import * as protos from '@google-cloud/optimization/build/protos/protos';
import { Timestamp } from '@google-cloud/firestore';
import { ISO8601DateString, SimulationStatus } from '../common';
import { WeatherEvent } from '../weather';

// ********************* Cloud Fleet REST API: OptimizeToursResponse ************************
export type Visit = {
    readonly shipmentIndex?: number,
    readonly shipmentName: string,
    readonly isPickup: boolean,
    readonly visitRequestIndex?: number,
    readonly startTime: string,
    readonly detour: string,
    readonly shipmentLabel?: string,
    readonly visitLabel?: string,
};

export type EncodedPolyline = {
    readonly points: string;
};

export type Transition = {
    readonly travelDuration: string,
    readonly travelDistanceMeters?: number,
    readonly trafficInfoUnavailable?: boolean,
    readonly delayDuration?: string,
    readonly breakDuration?: string,
    readonly waitDuration: string,
    readonly totalDuration: string,
    readonly startTime: string,
    readonly routePolyline?: EncodedPolyline,
};

export type Break = {
    readonly startTime: ISO8601DateString;
    readonly duration: string;
};

export type RouteCosts = {
    readonly "model.vehicles.cost_per_hour": number;
    readonly "model.vehicles.cost_per_traveled_hour": number;
    readonly "model.shipments.pickups.time_windows.cost_per_hour_after_soft_end_time"?: number;
};

export type AggregatedMetrics = {
    readonly performedShipmentCount: number,
    readonly travelDuration: string,
    readonly waitDuration: string,
    readonly delayDuration: string,
    readonly breakDuration: string,
    readonly visitDuration: string,
    readonly totalDuration: string,
    readonly travelDistanceMeters: number,
};

export type IdleShipmentRoute = {
    readonly vehicleName: string;
    readonly type: 'IdleShipmentRoute';
};
export type ShipmentRoute = {
    readonly vehicleIndex?: number,
    readonly vehicleLabel?: string, //TODO: Once labels get passed in successfully, make this required
    readonly vehicleName: string,
    readonly vehicleStartTime: ISO8601DateString,
    readonly vehicleEndTime: ISO8601DateString,
    readonly visits: Visit[],
    readonly transitions: Transition[],
    readonly hasTrafficInfeasibilities?: boolean,
    readonly routePolyline?: EncodedPolyline,
    readonly breaks?: Break[],
    readonly metrics: AggregatedMetrics,
    readonly routeCosts: RouteCosts,
    readonly routeTotalCost: number,
    readonly type: 'ShipmentRoute';
};
export type Route = IdleShipmentRoute | ShipmentRoute;

export type SkippedShipment = {};// TODO: handle SkippedShipment
export type OptimizeToursValidationError = {}; // TODO: handle OptimizeTours errors
export type GlobalMetrics = {
    readonly aggregatedRouteMetrics: AggregatedMetrics;
    readonly usedVehicleCount: number;
    readonly earliestVehicleStartTime: string;
    readonly latestVehicleEndTime: string;
    readonly costs: RouteCosts,
    readonly totalCost: number
};

export type OptimizeToursResponse = {
    readonly routes?: ShipmentRoute[];
    readonly requestLabel?: string;
    readonly skippedShipments?: SkippedShipment[];
    readonly validationErrors?: OptimizeToursValidationError[];
    readonly metrics?: GlobalMetrics;
};

// ********************* route: fetch-location-data ************************
export type LocationDataResponse = {
    readonly parkingSpacesCount: number,
    readonly streetAddress: string,
    readonly weatherEvents: WeatherEvent[]
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
