app.service('myService', function(){
	this.getTitle = function(msg){
			msg = msg.toUpperCase();
			return "Title "+msg ;
	};


	this.getFact = function(x){
		res = 1 ;

		for (var i = x ; i > 0; i--) {
			res*=i ;
		}
		return res;
	}
})

