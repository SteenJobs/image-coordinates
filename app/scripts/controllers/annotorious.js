angular.module('coordinatesSelectorApp')
	.directive('directiveName', function() {
    	return {
    	    restrict: 'A',
    	    link: function(scope, element, attrs) {
    	        $(element).'pluginActivationFunction'(scope.$eval(attrs.directiveName));
    	    }
    	};
	});