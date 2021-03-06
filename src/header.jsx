const m = require("mithril");

module.exports = {
    view: function(vnode) {
        return [
            m("nav.header",[
                m("div.icon", m("img", {src: "agro_logo/agro_logo.svg", width: "50"})),
                m("div.components", [
                    m(m.route.Link, {href: "/"},"Inicio"),
                    m(m.route.Link, {href: "/services"},"Servicios"),
                    m(m.route.Link, {href: "/about"},"Sobre nosotros"),
                ])
            ]),
            m("div.main", vnode.children),
        ];
    }
};
