const m = require("mithril");

module.exports = {
    view: ()=>[
        <h1>Agrosalud</h1>,
        m("iframe", {
            "src":"https://www.youtube.com/embed/ORCGT-gPi44",
            "title":"Video Agrosalud",
            "allow":"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            "allowfullscreen":"allowfullscreen",
            "frameborder":"0"
        })
    ],
};
