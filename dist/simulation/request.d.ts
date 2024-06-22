import * as protos from '@google-cloud/optimization/build/protos/protos';
import { ISO8601DateString } from '../common';

type TimeWindow = {
    startTime: ISO8601DateString;
    softEndTime?: ISO8601DateString;
    endTime: ISO8601DateString;
}

export type VisitRequest = Pick<protos.google.cloud.optimization.v1.Shipment.IVisitRequest, 'arrivalLocation' | 'duration' | 'label' | 'timeWindows'>;
export type Site = Pick<google.cloud.optimization.v1.IShipment, 'pickups' | 'penaltyCost' | 'label'>;
export type Vehicle = Pick<google.cloud.optimization.v1.IVehicle, 'costPerHour' | 'costPerTraveledHour' | 'label' | 'startLocation' | 'startTimeWindows' | 'endTimeWindows' | 'travelMode'>;

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
