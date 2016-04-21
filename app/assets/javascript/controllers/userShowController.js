// Doesn't need [ ] because we're already assigning to the module in app.js
angular.module('NoteWrangler').controller('UsersShowController', function(User, $scope, $routeParams) {
	// routeParams gives us access to these wild cards :id
	// routeParams.id is accessing the :id in the show route
	$scope.user = User.get({id: $routeParams.id});
});
