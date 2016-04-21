// Doesn't need [ ] because we're already assigning to the module in app.js
angular.module('NoteWrangler').controller('NotesEditController', function(Note, $scope, $routeParams) {
	$scope.note = Note.get({id: $routeParams.id});
	$scope.isSubmitting = false;

	$scope.saveNote = function(note) {
		$scope.isSubmitting = true;
		note.$update();
	}
});
