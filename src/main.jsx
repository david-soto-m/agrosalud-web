const m = require("mithril");
const head = require("./header");
const serv = require("./services");
const about = require("./about");
const start = require("./start");

console.log(about);

m.route(document.body, "/",{
    "/":{
        render: ()=>m(head, m(start)),
    },
    "/services":{
        render: ()=>m(head, m(serv)),
    },
    "/about":{
        render: ()=> m(head, m(about)),
    }
});
