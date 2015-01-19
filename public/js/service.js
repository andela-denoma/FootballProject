angular.module('footballServices', [])
  .factory('ForumService', function ($resource){
    return $resource('https://footballcircle.herokuapp.com/forums/:id' , { id:'@_id'}, {
      update: {
      method: 'PUT' // this method issues a PUT request
      }
    });
  })
  
  .factory('TopicService', function ($resource){
    return $resource('https://footballcircle.herokuapp.com/forums/:id/topics', { id:'@_id'} , {
      query: {
        method: 'GET',
        isArray: true
      },
      update: {
      method: 'PUT' // this method issues a PUT request
      }
    });
  })

  .factory('CommentService', function ($resource){
    return $resource('https://footballcircle.herokuapp.com/forums/:id/topics/:id/comments/:id', { id:'@_id'} , {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  });

  