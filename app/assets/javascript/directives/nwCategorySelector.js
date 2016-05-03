angular.module("NoteWrangler").directive("nwCategorySelector", function(Category) {
  return {
    replace: true,
    restrict: "E",
    // Require the controller from another directive that's related to our current directive (parent ^, child)
    // ? makes it optional
    require: "?ngModel",
    templateUrl: "/assets/templates/directives/nwCategorySelector.html",
    link: function(scope, element, attrs, ngModelCtrl) { // brings in ngModel as a 4th arguement - named anything 
      var activeCategory = {};
      scope.categories = Category.query();

      // Pass in category for active class state
      scope.isActive = function(category) {
        // Check for your existence and if you're equal to the cat id
        return activeCategory && activeCategory.id === category.id;
      }

      // Check to see if activeCategory has an object, if not give it one
      scope.toggleCategory = function(category) {
        if(category === activeCategory) {
          activeCategory = {};
        } else {
          activeCategory = category;
        }

        ngModelCtrl.$setViewValue(activeCategory);
      }

      // Kind of like a watcher - nothing gets passed in as an agruement
      ngModelCtrl.$render = function() {
        activeCategory = ngModelCtrl.$viewValue;
      }
    }
  };
});
