// Doesn't need [ ] because we're already assigning to the module in app.js
angular.module('NoteWrangler').controller('NotesEditController', function($scope, Note, Category, User, $routeParams, $location) {
	$scope.note = Note.get({id: $routeParams.id});
	$scope.isSubmitting = false;
	// Make call to Category service
	$scope.categories = Category.query();

	// Make call to Users service
	$scope.users = User.query();

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
