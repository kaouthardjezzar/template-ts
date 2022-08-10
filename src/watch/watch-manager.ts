import { WatchController, WatchModel, WatchView } from '.';

export class WatchManager {

    constructor() {
        // this is intentional
    }

    createWatch(): HTMLDivElement {
        const watchModel: WatchModel = new WatchModel();
        const watchController: WatchController = new WatchController(watchModel);
        const watchView: WatchView = new WatchView(watchController, watchModel);

        return watchView.buildContent();
    }
}