import { LightMode, Mode, WatchController, WatchModel } from './';
import { Button } from '../components'

import './watch-css.css';

export class WatchView {
    // div for the watch
    private watchContainer: HTMLDivElement = document.createElement('div');
    // div element that will contain the current time
    private timeContainer: HTMLDivElement = document.createElement('div');
    // button for change mode
    private modeButton: Button = new Button();
    // button for lighting
    private lightButton: Button = new Button();
    // button to increae the time according to the mode
    private increaseButton: Button = new Button();
    // button to reset time
    private resetButton: Button = new Button();

    private watchController: WatchController;
    private watchModel: WatchModel;

    // Constructor
    constructor(watchController: WatchController, watchModel: WatchModel) {
        this.watchController = watchController;
        this.watchModel = watchModel;
    }

    buildContent(): HTMLDivElement {
        const modeButton = this.modeButton.buildContent('Mode');
        const lightButton = this.lightButton.buildContent('Light');
        const increaseButton = this.increaseButton.buildContent('Increase');
        const resetButton = this.resetButton.buildContent('Reset');

        setInterval(() => {
            let currentDate: Date = new Date();
            if (this.watchModel.getMode() === Mode.NOTHING) {
                this.watchModel.setCurrentTime(currentDate);
                this.displayTime();
            }
            if (this.watchModel.getMode() === Mode.HOUR_INCREASE) {
                this.watchModel.setMinutes(currentDate.getMinutes());
                this.watchModel.setSeconds(currentDate.getSeconds());
                if ((currentDate.getMinutes()) === 0 && (currentDate.getSeconds() === 0)){
                    this.watchModel.setHours(this.watchModel.getHours() + 1);
                }
                this.displayTime();
            }
            if (this.watchModel.getMode() === Mode.MINUTES_INCREASE)  {
                this.watchModel.setHours(this.watchModel.getHours());
                this.watchModel.setSeconds(currentDate.getSeconds());
                if ((currentDate.getSeconds() === 0)){
                    this.watchModel.setMinutes(this.watchModel.getMinutes() + 1);
                }
                this.displayTime();
            }
            
        }, 1000);
        
        this.watchContainer.style.width = "200px";
        this.watchContainer.appendChild(this.timeContainer);
        this.watchContainer.appendChild(modeButton);
        this.watchContainer.appendChild(increaseButton);
        this.watchContainer.appendChild(lightButton);
        this.watchContainer.appendChild(resetButton);
        this.increaseButton.disableButton();
        
        this.modeButton.getButton().addEventListener('click', () => {
            this.watchController.changeMode();
            if (this.watchModel.getIsIncreaseEnabled()) {
                this.increaseButton.enableButton();
            }
            else {
                this.increaseButton.disableButton();
            }
        });

        this.increaseButton.getButton().addEventListener('click', () => {
            this.watchController.increaseTime();
        });

        this.lightButton.getButton().addEventListener('click', () => {
            this.watchController.changeLightening();
            if (this.watchModel.getLightMode() === LightMode.LIGHT) {
                this.applyLightMode();
            } else {
                this.applyDarkMode();
            }
        });

        this.resetButton.getButton().addEventListener('click', () => {
            this.watchController.resetTime();
        });


        return this.watchContainer
    }

    private displayTime(): void {
        this.timeContainer.innerText = `${this.watchModel.getCurrentTime().getHours().toString()} : ${
            this.watchModel.getCurrentTime().getMinutes().toString()} : ${this.watchModel.getCurrentTime().getSeconds().toString()
        }`;
    }

    private applyDarkMode() {
        this.watchContainer.classList.add('dark-mode');
        this.watchContainer.classList.remove('light-mode');
        this.timeContainer.classList.add('dark-time');
        this.timeContainer.classList.remove('light-time');
        const body = document.getElementById('body');
        body.classList.add('dark-body');
        body.classList.remove('light-body');

    }
    private applyLightMode() {
        this.watchContainer.classList.remove('dark-mode');
        this.watchContainer.classList.add('light-mode');
        this.timeContainer.classList.remove('dark-time');
        this.timeContainer.classList.add('light-time');
        const body = document.getElementById('body');
        body.classList.remove('dark-body');
        body.classList.add('light-body');
    }
}
