import { Timestamp } from '@google-cloud/firestore';
import { ISO8601DateString } from './common';

export const PRECIPITATION_TYPE = {
    'NONE': 0,
    'RAIN': 1,
    'RAIN_AND_SNOW_MIXED': 2,
    'SNOW': 3,
    'SLEET': 4,
    'FREEZING_RAIN': 5,
    'HAIL': 6,
} as const;
export type PrecipitationType = typeof PRECIPITATION_TYPE[keyof typeof PRECIPITATION_TYPE];

export type MMQueryResult = {
    readonly lat: number;
    readonly lng: number;
    readonly created_at_in_utc: ISO8601DateString | Timestamp;
    predicted_at_in_utc: ISO8601DateString | Timestamp;
    readonly snow_depth_in_cm: number;
    readonly time_in_utc: ISO8601DateString | Timestamp;

    readonly dew_point_in_c?: number;
    readonly below_surface_temp_5cm_in_c?: number;
    readonly surface_temp_in_c?: number;
    readonly precipitation_type?: PrecipitationType;
};

export type WeatherEvent = {
    readonly lat: number;
    readonly lng: number;
    readonly startTime: ISO8601DateString;
    readonly endTime: ISO8601DateString;
    readonly snowDepthTrigger: number;
};
