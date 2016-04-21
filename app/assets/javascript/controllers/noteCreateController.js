// Doesn't need [ ] because we're already assigning to the module in app.js
angular.module('NoteWrangler').controller('NotesCreateController', function($scope, Note, $location) {
	// Because note doesn't exist, create new note
	$scope.note = new Note();
	$scope.isSubmitting = false;

	$scope.saveNote = function(note) {
		$scope.isSubmitting = true;

		// then is successful
		note.$save().then(function() {
			$location.path('/notes');
			// finally when finished
		}).finally(function() {
			$scope.isSubmitting = false;
		});
	};
});
