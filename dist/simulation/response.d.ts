import * as protos from '@google-cloud/optimization/build/protos/protos';
import { ISO8601DateString, STATUS_ENUM } from '../common';

export type Simulation = {
    readonly simulationId: string;
    solutionUrl?: string;
    status: STATUS_ENUM;
    readonly created_at: ISO8601DateString;
    updated_at: ISO8601DateString;
    readonly userId: string;
};

export type SolutionResponse = {
    name: string;
    displayName: string;
    optimzationResponse: protos.google.cloud.optimization.v1.Solu;
    metadata: {
        optimizer: string;
        optimizationStartTime: string;
    }
}