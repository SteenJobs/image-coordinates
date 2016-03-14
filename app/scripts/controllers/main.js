/**
 * @ngdoc function
 * @name coordinatesSelectorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coordinatesSelectorApp
 */
angular.module('coordinatesSelectorApp')
  	.controller('MainCtrl', function ($scope, Upload, annotoriousService) {
		$scope.tabs = [
    		{ title: 'Image' },
    		{ title: 'Data', disabled: true },
    		{ title: 'JSON', disabled: true }
  		];


  		$scope.isDisabled = ""
  		$scope.isDisabledStyle = "disabled"
    // prints 
   		$scope.showCoordinates = function (){

   			if ($scope.photo) {
   				console.log(annotoriousService.getAnnotations());
   				console.log($scope.photo)
   				var imageWidth = $scope.photo.$ngfWidth
   				var imageHeight = $scope.photo.$ngfHeight
   				var annotations = annotoriousService.getAnnotations();
   				//var image = $socument.
   				var allCoordinateData = {imageWidth: imageWidth, imageHeight: imageHeight, data: {}}
	
   				var count = 0
   				for (var annotation of annotations) {
   					count = count + 1
	
   					var relativeData = {relativeX: null, relativeY: null, relativeWidth: null, relativeHeight: null}
   					var pixelData = {x: null, y: null, width: null, height: null}
	
   					var name = annotation.text.length > 0 ? annotation.text : "Annotation "+count
   					var geometry = annotation.shapes[0].geometry
	
   					relativeData.relativeX = geometry.x.toFixed(2)
   					relativeData.relativeY = geometry.y.toFixed(2)
   					relativeData.relativeWidth = geometry.width.toFixed(2)
   					relativeData.relativeHeight = geometry.height.toFixed(2)
	
   					pixelData.x = geometry.x * imageWidth
   					pixelData.y = geometry.y * imageHeight
   					pixelData.width = geometry.width * imageWidth
   					pixelData.height = geometry.height * imageHeight
	
   					var data = allCoordinateData.data
   					var annotationData = {relativeData: relativeData, pixelData: pixelData}
   					data[name] = annotationData
	
   				}
				
				$scope.tabs[1].disabled = false
				$scope.tabs[2].disabled = false
   				$scope.points = allCoordinateData
   				console.log($scope.points)
   				console.log($scope.points.length)
   			}
   		}
  	});

