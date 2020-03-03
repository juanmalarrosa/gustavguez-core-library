export default class DateUtility {
    static todayLocaleString(): string;
    static todayDateString(): string;
    static localeString(date: any): string;
    static todayAsPrettyString(): any;
    static prettyDate(date: string, displayHour?: boolean): string;
    static prettyHour(date: string): string;
}