// Doesn't need [ ] because we're already assigning to the module in app.js
angular.module('NoteWrangler').controller('UsersIndexController', function(User, $scope) {
	// query is angular resources way of getting all of something
	$scope.users = User.query();
});
