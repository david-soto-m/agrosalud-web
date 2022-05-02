const m = require("mithril");

module.exports = {
    view: function(vnode) {
        return [
            m("nav.header",[
                m("div.components", [
                    m(m.route.Link, {href: "/undone"},"Inicio"),
                    m(m.route.Link, {href: "/undone"},"Servicios"),
                    m(m.route.Link, {href: "/undone"},"Sobre nosotros"),
                    // m(m.route.Link, {href: "/undone"},"nothing"),
                ])
            ]),
            m("div.main", vnode.children),
        ];
    }
};
