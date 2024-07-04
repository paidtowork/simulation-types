export type ISO8601DateString = string;
const SIMULATION_STATUS = {
    'pending': 0,
    'success': 1,
    'failure': 2,
} as const;
type ObjectValues<T> = T[keyof T];
export type SimulationStatus = ObjectValues<typeof SIMULATION_STATUS>;
