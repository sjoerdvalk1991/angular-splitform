(function(){
    var app = angular.module('myApp', []);
    app.controller('FormController', ['$scope', function($scope){
        $scope.step = 1;

        $scope.nextStep = function() {
            $scope.step++;
        }

        $scope.prevStep = function() {
            $scope.step--;
        }

        $scope.submitForm = function() {
            // submit code goes here
        }
    }]);
})();

//I've made another version to avoid an scope soup

var app = angular.module('myApp', []);
    var FormController = function($scope){
        var _this = this;

        this.step = 1;

        this.nextStep = function(){
            _this.step++;
        }

        this.prevStep = function(){
            _this.step--;
        }

        this.submitForm = function(){

        }
    }
FormController.$inject = ['$scope'];    
app.controller('FormController', FormController);
