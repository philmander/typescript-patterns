import HtmlBuilder from './builders/html-builder';
import JsonBuilder from './builders/json-builder';
import Director from './director';

const htmlOut = document.querySelector('#html');
const jsonOut = document.querySelector("#json");

const htmlDirector = new Director(new HtmlBuilder());
htmlDirector.construct().then(html => {
    htmlOut.innerHTML=  html.getOutput();
});

const jsonDirector = new Director(new JsonBuilder());
jsonDirector.construct().then(json => {
    jsonOut.textContent = json.getOutput();
});