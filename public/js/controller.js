angular.module('footballController', ['footballServices'])

  .controller('ForumListCtrl', function ($scope, $state, $stateParams, $window, ForumService) {
    $scope.getData = function (){
      $scope.forums = ForumService.query();
      console.log($scope.forums);
    };
    $scope.getData();
  })

  .controller('ForumViewController', function ($scope, $stateParams, ForumService, TopicService, CommentService){
    $scope.forum = ForumService.get({ id: $stateParams.id});
    $scope.topics = TopicService.query({id: $stateParams.id});
    $scope.comments = CommentService.query({id: $stateParams.id});

    $scope.topic = new TopicService(); 
    $scope.addTopic = function() {
      $scope.topic.$save(function(){
        console.log($scope.topics);
        $state.go('viewForums');
      });
    };
    
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
  })

  .controller('TopicController', function ($scope, $state, $stateParams, $window, TopicService, ForumService) {
    $scope.topics = TopicService.query({id: $stateParams.id});
    console.log($scope.topics);
  })

  .controller('TopicAddController', function ($scope, $state, $stateParams, $window, TopicService) {
   
  

    $scope.deleteTopic = function(topic) {
      forum.$delete(function() {
        $window.location.href = ''; //redirect to home
      });
    };

    $scope.updateTopic = function () {
      $scope.topic.$update(function(){
          $state.go('viewTopics');
      });
    };
 })

  .controller('CommentController', function ($scope, $state, $stateParams, $window, CommentService) {
    $scope.comments = CommentService.query({id: $stateParams.id});
    console.log($scope.comments);

    $scope.comment = function(){
      CommentService.get({id: $stateParams.id})
    };

    $scope.comment = new CommentService(); 
    $scope.addComment = function() {
      $scope.comment.$save(function(){
        $window.location.href = ''
      });
    };

    $scope.deleteComment = function(comment) {
      comment.$delete(function() {
        $window.location.href = ''; //redirect to home
      });
    };

    $scope.updateComment = function () {
      $scope.comment.$update(function(){
          $state.go('viewTopics');
      });
    };
  });
  

  
