"use strict";
var factory_1 = require("./factory");
var factory_2 = require("./factory");
var 
//the factory
factory = factory_1["default"](window.location.hash === '#kiosk' ? factory_2.Channels.KIOSK : factory_2.Channels.ONLINE), 
//form controls
username = factory.createText('Username'), password = factory.createPassword('Password'), remember = factory.createCheckbox('Remember me'), 
//dom placeholders
form = document.querySelector('.form'), formControls = form.querySelector('.controls'), out = document.querySelector('#out');
formControls.appendChild(username.getElement());
formControls.appendChild(password.getElement());
formControls.appendChild(remember.getElement());
form.addEventListener('submit', function (ev) {
    out.innerHTML =
        "<p>Username: " + username.getValue() + "</p>\n         <p>Password: " + password.getValue() + "</p>\n         <p>Remember me: " + (remember.getValue() ? 'Yes' : 'No') + "</p>";
    ev.preventDefault();
});
