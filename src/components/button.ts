export class Button {
    /** Button */
    private readonly button: HTMLButtonElement;
    /** Button container */
    private readonly buttonContainer: HTMLDivElement;
    /** button state */
    private isEnabled: boolean;

    // Constructor
    constructor() {
        this.button = document.createElement('button');
        this.buttonContainer = document.createElement('div');
        this.isEnabled = false;
    }

    /**
     * 
     * @param label text of the button
     * @returns a div element that contains the button, undefined otherwise
     */

    buildContent(label: string): HTMLDivElement | undefined {


        this.button.type = 'button';
        this.button.setAttribute('aria-pressed', 'false');

        const buttonText: HTMLSpanElement = document.createElement('span');
        buttonText.innerText = label;

        this.button.appendChild(buttonText);
        this.buttonContainer.appendChild(this.button);

        return this.buttonContainer;
    }

  /**
   * Enable to click on the button
   */
    enableButton(): void {
        this.button.removeAttribute('disabled');
        this.isEnabled = true;
    }


    /**
     * Disable to click on the button
     */
    disableButton(): void {
        this.button.setAttribute('disabled', 'disabled');
        this.isEnabled = false;
    }

    /**
     * getter for the button
     * @returns the button
     */
    getButton(): HTMLButtonElement {
        if (this.button !== undefined) {
            return this.button;
        }
    }
}
