module.exports = function() {
	app.controller('DropDownController', ['$scope', function($scope) {
		$scope.menu = ['list1', 'list2', 'list3'];
	});
}	