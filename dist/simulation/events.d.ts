import { ISO8601DateString } from "../common";

export type EVENT_TYPE = 'salt' | 'plow';

export type SaltUsageGuideline = {
    salt_usage_in_lbs: number,
    time_in_utc: ISO8601DateString,
    deadline_in_utc: ISO8601DateString,
};

export type Event = {
    id?: number,
    name?:string,
    type: EVENT_TYPE,
    start_time_in_utc: ISO8601DateString,

    pavement_temperatures?: number[],
    snow_depth_in_cm?: number,
    // single guideline: minimal salt required for DEFINITE event at start
    // multiple guidelines: for indefinitely long events: terminal salt job
    salt_usage_guidelines?: SaltUsageGuideline[],
};

export type Segment = {
    groupedTemperatureInC: number,
    hoursCount: number
};