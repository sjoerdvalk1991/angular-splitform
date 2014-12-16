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
