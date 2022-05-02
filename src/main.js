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
            return m(head, [m("h1", "Sobre nosotros"), m("","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus iaculis urna id volutpat lacus. Arcu non sodales neque sodales ut. Quis risus sed vulputate odio ut enim blandit. Duis at tellus at urna. Arcu dui vivamus arcu felis. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. In pellentesque massa placerat duis ultricies lacus sed. Neque laoreet suspendisse interdum consectetur libero id faucibus. Lorem ipsum dolor sit amet consectetur adipiscing. A iaculis at erat pellentesque adipiscing commodo. Accumsan lacus vel facilisis volutpat est velit egestas dui. Eu tincidunt tortor aliquam nulla facilisi. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Sagittis vitae et leo duis ut diam quam nulla. Praesent semper feugiat nibh sed pulvinar. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum."+
"Vitae elementum curabitur vitae nunc sed velit. Luctus venenatis lectus magna fringilla. At augue eget arcu dictum varius. Ullamcorper a lacus vestibulum sed arcu non odio. Dictum non consectetur a erat nam at lectus urna duis. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Praesent tristique magna sit amet. Etiam non quam lacus suspendisse. Varius sit amet mattis vulputate enim nulla. Ipsum dolor sit amet consectetur adipiscing elit. Vitae tempus quam pellentesque nec nam aliquam. At varius vel pharetra vel. Sit amet cursus sit amet. In nulla posuere sollicitudin aliquam ultrices. Nisl rhoncus mattis rhoncus urna neque viverra. Amet venenatis urna cursus eget nunc scelerisque. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique."+
"Vitae auctor eu augue ut lectus arcu bibendum at. Tristique et egestas quis ipsum suspendisse ultrices. Ultrices neque ornare aenean euismod elementum. Egestas integer eget aliquet nibh praesent. Lorem donec massa sapien faucibus et molestie ac feugiat. Dictum non consectetur a erat nam at lectus urna duis. Tortor pretium viverra suspendisse potenti nullam. In vitae turpis massa sed elementum tempus egestas sed sed. Eleifend quam adipiscing vitae proin. Sit amet consectetur adipiscing elit duis tristique sollicitudin. Nulla pellentesque dignissim enim sit amet venenatis. Vulputate dignissim suspendisse in est ante. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Leo a diam sollicitudin tempor id eu nisl. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Amet nisl purus in mollis nunc sed id semper risus. Faucibus purus in massa tempor nec feugiat nisl pretium. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem."+
"In arcu cursus euismod quis viverra nibh. Vivamus arcu felis bibendum ut. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Et netus et malesuada fames. Aliquam sem fringilla ut morbi tincidunt. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Rutrum quisque non tellus orci ac auctor augue mauris. Ullamcorper a lacus vestibulum sed. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Turpis egestas maecenas pharetra convallis posuere morbi leo urna."+
"Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Lectus proin nibh nisl condimentum id venenatis. Elit at imperdiet dui accumsan sit amet nulla facilisi. Elementum nibh tellus molestie nunc non blandit massa enim nec. Vestibulum rhoncus est pellentesque elit ullamcorper. Gravida cum sociis natoque penatibus et magnis dis parturient. Tortor condimentum lacinia quis vel eros. Ipsum dolor sit amet consectetur adipiscing. Mattis rhoncus urna neque viverra. Massa tincidunt dui ut ornare lectus. Maecenas sed enim ut sem viverra aliquet eget. Enim sed faucibus turpis in eu mi bibendum. Duis tristique sollicitudin nibh sit amet commodo nulla. Eget aliquet nibh praesent tristique magna sit amet. Ut morbi tincidunt augue interdum velit euismod. Purus faucibus ornare suspendisse sed nisi lacus. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Velit euismod in pellentesque massa placerat duis.")]);
        }
    },
    "/undone":{
        render:function(){
            return m("h1","UNFINISHED");
        }
    }
});
