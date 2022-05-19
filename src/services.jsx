const m = require("mithril");

let send_button = {
    view: (vnode)=>{
        return m("a.consult_button",
            {
                "href": "mailto:agrosaludus@gmail.com?subject="+ vnode.attrs.subject
            },
            "Consultanos"
        );
    }
};

module.exports = {
    view: function() {
        return[
            <h1>Servicios</h1>,
            m("div.fcont", [
                m("div.half_text_l",[
                    <>
                        <h2>Evaluación única</h2>
                        <p>
Evaluación del terreno con respecto al uso de abonos y productividad esperada.
Utilizamos una flota de drones para tomar imagenes del terreno. Tras la toma de
imágenes los resultados pueden llegar a tardar dos semanas.
                        </p>
                    </>,
                    m(send_button, {subject: "Consulta sobre evaluación única"})
                ]),
                m("img", {src: "media/drone.png"}),
            ]),
            m("div.fcont", [
                m("img", {src: "media/red_sensore.png"}),
                m("div.half_text_r",[
                    <>
                        <h2>Integración de red de sensores</h2>
                        <p>
Creamos una red de sensores para monitarizar todo su terreno. Adquirimos
información necesaria para la prevención de plagas, además de los
requerimientos de abonos y predicciones de la productividad del terreno.
Tiene mejor precisión que la información que se puede adquirir de una
evaluación única.
                        </p>
                    </>,
                    m(send_button, {subject: "Consulta sobre integración de sensores"})
                ])
            ])
        ];
    }
};

