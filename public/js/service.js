angular.module('footballServices', [])
  .factory('ForumService', function ($resource){
    return $resource('https://footballcircle.herokuapp.com/forums', {
      update: {
      method: 'PUT' // this method issues a PUT request
      }
    });
  })
  
 .factory('TopicService', function ($resource){
    return $resource('https://footballcircle.herokuapp.com/forums/:name', {name:@name} {
      update: {
      method: 'PUT' // this method issues a PUT request
      }
    });
  });
  