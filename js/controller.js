
app.controller('HomeCtrl', function($scope){

})

app.controller('ProductCtrl', function($scope , $http){
	$scope.data = {} ;
	$http.get('../api/setArticle.php?id=0&action=all')
		.then(
			function(resultat){
			$scope.data = resultat.data ;

			},
			function(err){
				console.error(err.status);
			})
})
app.controller('detailCtrl', function($scope , $routeParams) {
	$scope.id = $routeParams.id;

})
app.controller('AboutCtrl', function($scope , $http){
	var liste = [];
	$http.get('http://127.0.0.1:3300')
		.then(
			function(resultat){
			 	$scope.data = resultat.data;			 	
			 	for(var d of $scope.data){
			 		liste.push(d.prix);
			 	}
				for(var i=0 ; i<liste.length ; i++){
					document.createElement('div').className = "bar";	
				}
			 	
			}, 
			function(failed){
				console.log(failed.status)
			});

			
			d3.select("body").selectAll("div")
			    .data(liste)
			    .enter()
			    .append("div")
			    .attr("class", "bar")
			    .style("height", function(d){
			        var barHeight = d * 5;
			        return barHeight + "px";
			    });
}) 

app.controller('LoginCtrl', function($scope , $http){
	$scope.auth = function(l , p){
		var data = {login:l , pword:p};

		$http.post('http://127.0.0.1:3300/' , data)
			.then(function(res){
				console.log(res.data)

			}, 
			function(err){
				
			})
	}
})
