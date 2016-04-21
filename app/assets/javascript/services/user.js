// Named notes.js because we name anything that's pulling data from somewhere as singular
angular.module('NoteWrangler').factory('User', function($resource) {
	// Using resource prevents from making methods over and over again - dealing with simple data
	// @ is like this
	return $resource('/users/:id');
})
