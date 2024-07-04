export type ISO8601DateString = string;
export const SIMULATION_STATUS = {
    'pending': 0,
    'success': 1,
    'failure': 2,
} as const;
export type SimulationStatus = typeof SIMULATION_STATUS[keyof typeof SIMULATION_STATUS]; 

