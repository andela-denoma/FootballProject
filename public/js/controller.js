angular.module('footballController', ['footballServices'])

  .controller('ForumListCtrl', function ($scope, $state, $stateParams, $window, ForumService) {
    $scope.getData = function (){
      $scope.forums = ForumService.query();
      console.log($scope.forums);
    };
    $scope.getData();
  })

  .controller('ForumViewController', function ($scope, $stateParams, ForumService){
    $scope.forum = ForumService.get({ name: $stateParams.name});
    console.log($scope.forum);
  })

  .controller('ForumCreateController', function ($scope, $state, $stateParams, ForumService) {
    $scope.forum = new ForumService(); 
    $scope.addForum = function() {
      $scope.forum.$save(function(){
        $state.go('forums');
      });
    };
  })

  .controller('ForumEditController', function ($scope, $state, $stateParams, ForumService) {
    $scope.updateForum = function () {
      $scope.forum.$update(function(){
          $state.go('forums');
      });
    };
  
    $scope.loadForum = function (){
      $scope.forum = ForumService.get({id: $stateParams.id});
    };
    $scope.loadForum();
  });

