const m = require("mithril");
const head = require("./header");

m.route(document.body, "/",{
    "/":{
        render: function(){
            return m(head,m("h1", "Hello world"));
        }
    },
    "/undone":{
        render:function(){
            return m("h1","UNFINISHED");
        }
    }
});
