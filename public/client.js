// Hard Mode:
// Style your application with CSS, make it look presentable (think 'Merica).
//
// Pro Mode:
// Add a third end point to load the winner from (selection not done on the client side).

var app = angular.module('presidentializer', []);

app.controller('ElectionController', function($scope, $http) {

  $scope.winner = '';
  $scope.showCandidates = false;
  $scope.showWinner = false;

  $scope.reveal = function() {
    $scope.showCandidates = true;
    $scope.candidateList = $scope.progList.concat($scope.consList);
  }

  $scope.decide = function() {
    $scope.showWinner = true;
    $scope.winner = shuffle($scope.candidateList)[0];
  }

  $http.get('/progressives').then(function(response) {
    $scope.progList = response.data;
  })

  $http.get('/conservatives').then(function(response) {
    $scope.consList = response.data;
  })
})

// The Fisher-Yates shuffle
function shuffle(array) {

  var tempArr = array;
  var m = tempArr.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = tempArr[m];
    tempArr[m] = tempArr[i];
    tempArr[i] = t;
  }

  return tempArr;
}
