import { LightMode, Mode, WatchModel } from '.';

export class WatchController {

    private watchModel: WatchModel;

    // Constructor
    constructor(watchModel: WatchModel) {
        this.watchModel = watchModel;
        const currentDate: Date = new Date();
        this.watchModel.setCurrentTime(currentDate);
    }

    changeMode(): void {
        switch (this.watchModel.getMode()) {
            case Mode.NOTHING:
                this.watchModel.setMode(Mode.HOUR_INCREASE);
                this.watchModel.setIsIncreaseEnabled(true);
                break;
            case Mode.HOUR_INCREASE:
                this.watchModel.setMode(Mode.MINUTES_INCREASE);
                this.watchModel.setIsIncreaseEnabled(true);
                break;
            case Mode.MINUTES_INCREASE:
                this.watchModel.setMode(Mode.NOTHING);
                this.watchModel.setIsIncreaseEnabled(false);
                break;
        }
    }

    increaseTime(): void {
        const actualDate = this.watchModel.getCurrentTime();
        switch (this.watchModel.getMode()) {
            case Mode.HOUR_INCREASE:
                const actualHour = actualDate.getHours();
                this.watchModel.setHours(actualHour + 1);
                break;
            case Mode.MINUTES_INCREASE:
                const actualMinutes = actualDate.getMinutes();
                this.watchModel.setMinutes(actualMinutes + 1);
                break;
        }
    }

    changeLightening(): void {
        if (this.watchModel.getLightMode() === LightMode.LIGHT) {
            this.watchModel.setLightMode(LightMode.DARK);
        } else {
            this.watchModel.setLightMode(LightMode.LIGHT);
        }
    }

    resetTime(): void {
        const currentDate: Date = new Date();
        this.watchModel.setCurrentTime(currentDate);
    }
}
