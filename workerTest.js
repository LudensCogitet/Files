var i = 0;
var timer = null;

function loop(){
		i++;
		self.postMessage(i);
		setTimeout(loop,1000);
}

self.onmessage = function(msg){
	if(msg == "start"){
		timer = setTimeout(loop,1000);
}
