import { Timestamp } from '@google-cloud/firestore';
import { ISO8601DateString } from './common';

export type MMQueryResult = {
    readonly lat: number;
    readonly long: number;
    readonly created_at_in_utc: ISO8601DateString | Timestamp;
    predicted_at_in_utc: ISO8601DateString | Timestamp;
    readonly snow_depth_in_cm: number;
    readonly time_in_utc: ISO8601DateString | Timestamp;
};

export type WeatherEvent = {
    readonly lat: number;
    readonly long: number;
    readonly startTime: ISO8601DateString;
    readonly endTime: ISO8601DateString;
    readonly snowDepthTrigger: number;
};
