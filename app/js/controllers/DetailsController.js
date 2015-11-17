module.exports = function(app) {
	app.controller('DetailsController', ['$scope', 'Resource', function($scope, Resource) {
		$scope.menu = //['list1', 'list2', 'list3'];
		var listResource = Resource(menu);
	
		$scope.getList = function(){
			listResource.getList(function(err, data) {
				if(err) return console.log(err);
				$scope.menu = data;
			})
		}
	});
}	