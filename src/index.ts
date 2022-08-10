import { WatchManager } from './watch';
import { Button } from './components';

import './index.css';

export function initializeWatchPage(): void {
    const createWatchButton: Button = new Button();

    const body = document.getElementById('body');
    body.style.display = 'inline-block';
    const createWatch = createWatchButton.buildContent('Create Watch');
    body.appendChild(createWatch);
    const watchManager: WatchManager = new WatchManager();
    
    createWatchButton.getButton().addEventListener('click', () => {
        const watchDiv = watchManager.createWatch();
        body.appendChild(watchDiv);
    
    });
}

initializeWatchPage();
