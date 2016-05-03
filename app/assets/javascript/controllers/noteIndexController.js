// Doesn't need [ ] because we're already assigning to the module in app.js
angular.module('NoteWrangler').controller('NotesIndexController', function(Note, $scope) {
	// query is angular resources way of getting all of something
	$scope.notes = Note.query();

  // Checks to see what cat is clicked on
  // window.sc = $scope;
  // in console window.sc.search
});
