var handleSuccess = function(callback) {
	return function(res) {
		callback(null, res.data);
	};
};

var handleError = function(callback) {
	return function(data) {
		callback(data);
	};
};

module.exports = function(app){
	app.factory('Resource', ['$http', function($http) {
	var Resource = function(resourceName) {
		this.resourceName = resourceName;
	};

	Resource.prototype.getList = function(callback){
		$http.get('/api/codechallenge?list=:id', id) // be sure to handle id from index.html dropdown
			.then(handleSuccess, handleError);
	};


}