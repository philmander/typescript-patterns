"use strict";
function fetch(url) {
    return Promise.resolve(new Response(url));
}
exports.__esModule = true;
exports["default"] = fetch;
var Response = (function () {
    function Response(url) {
        this.url = url;
        this.status = 200;
    }
    Response.prototype.json = function () {
        if (this.url === '/api/documents') {
            return [
                { id: 'doc_1', name: 'Invoice to Dave' },
                { id: 'doc_2', name: 'Letter to Chris' },
                { id: 'doc_3', name: 'Agenda for Tuesday' },
            ];
        }
        if (this.url === '/api/images') {
            return [
                { id: 'img_1', name: 'Cat dancing' },
                { id: 'img_2', name: 'Baby singing' },
                { id: 'img_3', name: 'Party on Saturday' },
            ];
        }
        if (this.url === '/api/forms') {
            return [
                { id: 'frm_1', name: 'Job application' },
                { id: 'frm_2', name: 'Survey' },
                { id: 'frm_3', name: 'Holiday request' },
            ];
        }
    };
    return Response;
}());
