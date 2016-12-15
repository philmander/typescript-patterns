import getFactory from './factory';
import {Channels} from "./factory";

const
    //the factory
    factory = getFactory(window.location.hash === '#kiosk' ? Channels.KIOSK : Channels.ONLINE),

    //form controls
    username = factory.createText('Username'),
    password = factory.createPassword('Password'),
    remember = factory.createCheckbox('Remember me'),

    //dom placeholders
    form = document.querySelector('.form'),
    formControls = form.querySelector('.controls'),
    out = document.querySelector('#out');

formControls.appendChild(username.getElement());
formControls.appendChild(password.getElement());
formControls.appendChild(remember.getElement());

form.addEventListener('submit', (ev) => {
    out.innerHTML =
        `<p>Username: ${username.getValue()}</p>
         <p>Password: ${password.getValue()}</p>
         <p>Remember me: ${remember.getValue() ? 'Yes' : 'No'}</p>`;

    ev.preventDefault();
});