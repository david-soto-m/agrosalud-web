const m = require("mithril");
const head = require("./header");
const serv = require("./services");

m.route(document.body, "/",{
    "/":{
        render: function(){
            return m(head, [
                m("h1.init","Agrosalud"),
                m("iframe",{
                    "src":"https://www.youtube.com/embed/ORCGT-gPi44",
                    "title":"Video Agrosalud",
                    "allow":"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    "allowfullscreen":"allowfullscreen",
                    "frameborder":"0"
                })
            ]);
        }
    },
    "/services":{
        render: ()=>{
            return m(head, m(serv));
        }
    },
    "/about":{
        render: ()=>{
            return m(head, m("div.text",[
                m("h1", "Sobre nosotros"),
                m("p", "Somos un grupo de alumnos de máster de la universidad de "+
                "Sevilla que queremos traer tecnología puntera en la industria "+
                "al campo. Queremos reducir los costes y el impacto ambiental de la "+
                "agricultura y empoderar a los agricultores en  sus negociaciones "+
                "de formas similares a como se hace ya en muchas industrias."
                ),

            ]));
        }
    },
    "/undone":{
        render:function(){
            return m("h1","UNFINISHED");
        }
    }
});
