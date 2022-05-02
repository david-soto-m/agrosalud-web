const m = require("mithril");
const head = require("./header");

m.route(document.body, "/",{
    "/":{
        render: function(){
            return m(head, m("h1", "Agrosalud"));
        }
    },
    "/services":{
        render: ()=>{
            return m(head, m("h1", "Servicios"));
        }
    },
    "/about":{
        render: ()=>{
            return m(head, [
                m("h1", "Sobre nosotros"),
                m("",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"+
                    "eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus"+
                    "iaculis urna id volutpat lacus. Arcu non sodales neque sodales ut."+
                    "Quis risus sed vulputate odio ut enim blandit. Duis at tellus at urna."+
                    "Arcu dui vivamus arcu felis. Tellus rutrum tellus pellentesque eu"+
                    "tincidunt tortor aliquam. In pellentesque massa placerat duis ultricies"+
                    "lacus sed. Neque laoreet suspendisse interdum consectetur libero id"+
                    "faucibus. Lorem ipsum dolor sit amet consectetur adipiscing. A iaculis"+
                    "at erat pellentesque adipiscing commodo. Accumsan lacus vel facilisis"+
                    "volutpat est velit egestas dui. Eu tincidunt tortor aliquam nulla facilisi."+
                    "Ultrices neque ornare aenean euismod elementum nisi quis eleifend."+
                    "Sagittis vitae et leo duis ut diam quam nulla. Praesent semper feugiat"+
                    "nibh sed pulvinar. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum."
                )
            ]);
        }
    },
    "/undone":{
        render:function(){
            return m("h1","UNFINISHED");
        }
    }
});
