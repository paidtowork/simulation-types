import * as protos from '@google-cloud/optimization/build/protos/protos';
import { SIMULATION_STATUS_ENUM } from '../status';
type ISO8601DateString = string;

export type Result = {
    simulationId: string;
    solutionUrl?: string;
    status: SIMULATION_STATUS_ENUM;
    time: ISO8601DateString;
    created_at: ISO8601DateString;
    updated_at: ISO8601DateString;
    userId: string;
};

export type SolutionResponse = {
    name: string;
    displayName: string;
    optimzationResponse: protos.google.cloud.optimization.v1.IOptimizeToursResponse;
    metadata: {
        optimizer: string;
        optimizationStartTime: string;
    }
}