export type ISO8601DateString = string;
export const SIMULATION_STATUS = {
    'pending': 0,
    'centerSelected': 1,
    'sitesSelected': 2,
    'vehiclesSelected': 3,
    'requestSent': 4,
    'requestSuccessful': 5,
    'requestFailed': 6,
} as const;
export type SimulationStatus = typeof SIMULATION_STATUS[keyof typeof SIMULATION_STATUS];
export type EncodedPolyline = {
    readonly points: string;
};
export type EncodedPolylineForRoute = {
    [routeId: number]: EncodedPolyline;
};
export type EncodedPolylineForRouteTransitions = {
    [routeId: number]: EncodedPolyline[];
};
export type LatLng = {
    lat: number;
    lng: number;
}
export type LatLngStr = string;
