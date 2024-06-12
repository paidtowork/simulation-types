import * as protos from '@google-cloud/optimization/build/protos/protos';

export type SolutionResponse = {
    name: string;
    displayName: string;
    optimzationResponse: protos.google.cloud.optimization.v1.IOptimizeToursResponse;
    metadata: {
        optimizer: string;
        optimizationStartTime: string;
    }
}