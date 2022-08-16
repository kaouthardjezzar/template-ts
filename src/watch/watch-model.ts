export enum Mode {
    HOUR_INCREASE,
    MINUTES_INCREASE,
    NOTHING,
}

export enum LightMode {
    LIGHT,
    DARK,
}
export class WatchModel {
    private mode: Mode;

    private lightMode: LightMode;

    private currentTime: Date;

    private isIncreaseEnabled: boolean = false;

    // Constructor
    constructor() {
        this.mode = Mode.NOTHING;
        this.lightMode= LightMode.LIGHT;
    }

    getMode(): Mode {
        return this.mode;
    }

    setMode(mode: Mode): void {
        this.mode = mode;
    }

    getLightMode(): LightMode {
        return this.lightMode;
    }

    setLightMode(lightMode: LightMode): void {
        this.lightMode = lightMode;
    }

    getCurrentTime(): Date {
        return this.currentTime;
    }

    setCurrentTime(currentTime: Date): void{
        this.currentTime = currentTime;
    }

    getHours(): number {
        return this.currentTime.getHours();
    }

    getMinutes(): number {
        return this.currentTime.getMinutes();
    }

    setHours(hours: number) {
        this.currentTime.setHours(hours);
    }

    setMinutes(minutes: number) {
        this.currentTime.setMinutes(minutes);
    }

    setSeconds(seconds: number) {
        this.currentTime.setSeconds(seconds);
    }

    getIsIncreaseEnabled(): boolean {
        return this.isIncreaseEnabled;
    }

    setIsIncreaseEnabled(enabled : boolean): void {
        this.isIncreaseEnabled = enabled;
    }

}
