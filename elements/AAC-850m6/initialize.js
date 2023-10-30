function(instance, context) {


     var basicstyle = `   
    body, html {
    padding: 0;
    margin: 0;
	background-repeat: repeat-y; 
}

`

$('<style>'+ basicstyle +'</style>').appendTo('head');  


    
var html =`<canvas id="canvas"></canvas>`


var div = $(html);

    
$(instance.canvas[0]).html(div); 
}