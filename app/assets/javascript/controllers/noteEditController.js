// Doesn't need [ ] because we're already assigning to the module in app.js
angular.module('NoteWrangler').controller('NotesEditController', function(Note, $scope, $routeParams, $location) {
	$scope.note = Note.get({id: $routeParams.id});
	$scope.isSubmitting = false;

	$scope.saveNote = function(note) {
		// Set isSumbitting to true on click
		$scope.isSubmitting = true;

		// When note is updated and promise is finished, reset isSubmitting back to false
		note.$update().finally(function() {
			$scope.isSubmitting = false;
			// Redirct back to note using $location service
			$location.path('notes/' + note.id);
		});
	}
});
