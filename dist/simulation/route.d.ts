import { ISO8601DateString } from "../common";
import { DistanceUnitType } from "../storeShapes";

export type VisitListRow = {
    readonly coords: LatLng;
    readonly streetAddress: string;
    readonly time: {
        arrivalTime: ISO8601DateString;
        departureTime: ISO8601DateString;
    };
    readonly revenue: number;
    snowDepth?: number;
    readonly type: 'visit';
    readonly index?: number;
    readonly routeId?: number;
};

export type TransitionListRow = {
    readonly distance: number;
    readonly distanceUnit: DistanceUnitType;
    readonly duration: {
        days?: number;
        hours: number;
        minutes: number;
    };
    readonly time?: {
        arrivalTime: ISO8601DateString;
        departureTime: ISO8601DateString;
    };
    readonly type: 'transition';
    readonly index?: number;
    readonly routeId?: number;
};
export type LocationListRow = (VisitListRow | TransitionListRow);