angular.module('football', ['ui.router', 'ngResource', 'footballController', 'footballServices'])
.config(function ($stateProvider){
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'public/view/home.html'})
  .state('forums', {
    url: '/forums',
    templateUrl: 'public/view/forums.html',
    controller: 'ForumListCtrl'})
  .state('newForum', {
    url: '/forums/new',
    templateUrl: 'public/view/forum-add.html',
    controller: 'ForumCreateController'})
  .state('viewForum', {
    url: '/forums/:name/view',
    templateUrl: 'public/view/forum-view.html',
    controller: 'ForumViewController'})
  .state('editForum', {
    url: '/forums/:id/edit',
    templateUrl: 'public/view/forum-edit.html',
    controller: 'ForumEditController'})
  .state('viewTopics', {
    url: '/forums/:id/topics',
    templateUrl: 'public/view/topics.html',
    controller: 'ForumViewController'})
  }).run (function ($state) {
    $state.go('home'); //make a transition to forums state when app starts
  });
