angular.module('memeStore.memes',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
$routeProvider.when('/memes', {
     templateUrl: 'modules/memes/views/memes.html',
        controller: 'MemesCtrl'
    });

}])

.controller('MemesCtrl', ['$scope',function($scope){
    console.log('$scope');
}]);