// Doesn't need [ ] because we're already assigning to the module in app.js
angular.module('NoteWrangler').controller('NotesShowController', function(Note, $scope, $routeParams, $location) {
	// routeParams gives us access to these wild cards :id
	// routeParams.id is accessing the :id in the show route
	$scope.note = Note.get({id: $routeParams.id});

	$scope.deleteNote = function(note) {
		// Use then, if it fails, it won't delete it
		note.$remove().then(function() {
			$location.path('/notes');
		});
	}
});
