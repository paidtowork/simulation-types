export type ISO8601DateString = string;

// Simulation
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

// Route
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

// Payment
export type PaymentCurrency = 'CAD' | 'USD';
export const PAYMENT_STATUS = {
    'PENDING': 0,
    'COMPLETED': 1,
    'FAILED': 2,
    'APPROVED': 3,
    'CANCELED': 4,
} as const;
export type PaymentStatus = typeof PAYMENT_STATUS[keyof typeof PAYMENT_STATUS];