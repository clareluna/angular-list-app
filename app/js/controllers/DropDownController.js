module.exports = function() {
app.controller("DropDownController", function($scope) {
	$scope.lists = [{
		name: "list1",
		url: "https://www.medbridgeeducation.com/api/codechallenge?list=1"
	}, {
		name: "list2",
		hex: "https://www.medbridgeeducation.com/api/codechallenge?list=2"
	}, {
		name: "Green",
		hex: "https://www.medbridgeeducation.com/api/codechallenge?list=3"
	}];
	$scope.list = "list1";
});

app.run(function($rootScope) {
	angular.element(document).on("click", function(e) {
		$rootScope.$broadcast("documentClicked", angular.element(e.target));
	});
});
}	