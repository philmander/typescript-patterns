import InputControlFactory from './factories/input-control-factory';
import KioskInputControlFactory from './factories/kiosk-input-control-factory';
import OnlineInputControlFactory from './factories/online-input-control-factory';

export default function getFactory(env: Channels): InputControlFactory {
    if(env === Channels.ONLINE) {
        return new OnlineInputControlFactory();
    } else if(env === Channels.KIOSK) {
        return new KioskInputControlFactory();
    } else {
        throw new Error('Environment not supported');
    }
}

enum Channels {
    KIOSK,
    ONLINE
}

export { Channels };