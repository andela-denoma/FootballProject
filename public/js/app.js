angular.module('football', ['ui.router', 'ngResource', 'footballController', 'footballServices'])
.config(function ($stateProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $stateProvider
  .state('forums', {
    url: '/forums',
    templateUrl: 'public/view/forums.html',
    controller: 'ForumListCtrl'})
  .state('newForum', {
    url: '/forums/new',
    templateUrl: 'public/view/forum-add.html',
    controller: 'ForumCreateController'})
  .state('viewForum', {
    url: '/forums/:id/view',
    templateUrl: 'public/view/forum-view.html',
    controller: 'ForumViewController'})
  .state('editForum', {
    url: '/forums/:id/edit',
    templateUrl: 'public/view/forum-edit.html',
    controller: 'ForumEditController'})
  .state('viewTopics', {
    url: '/forums/:id/topics',
    templateUrl: 'public/view/topics.html',
    controller: 'TopicController'})
  .state('newTopics', {
    url: '/forums/:id/topics/add',
    templateUrl: 'public/view/topic-add.html',
    controller: 'TopicAddController'})
  }).run (function ($state) {
    $state.go('forums'); //make a transition to forums state when app starts
  });
