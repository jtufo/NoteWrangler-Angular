angular.module('NoteWrangler').directive('title', function(){
  return function(scope, element, attrs) {
    // looking for a jQuery element
    $(element).on('mouseover', function(evt) {
      evt.preventDefault();
      $(element).tooltip();
    });
  }
});
