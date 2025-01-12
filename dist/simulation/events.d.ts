import { ISO8601DateString } from "../common";

export type EVENT_TYPE = 'salt' | 'plow';

export type SaltUsageGuideline = {
    salt_usage_in_lbs: number,
    time_in_utc: ISO8601DateString,
    deadline_in_utc: ISO8601DateString,
};

export type Event = {
    type: EVENT_TYPE,
    start_time_in_utc: ISO8601DateString,
    // single guideline: minimal salt required for DEFINITE event at start
    // multiple guidelines: for indefinitely long events: terminal salt job
    salt_usage_guidelines?: SaltUsageGuideline[],
};

export type Segment = {
    groupedTemperatureInC: number,
    hoursCount: number
};