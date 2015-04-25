/*author Shahrukh */
angular.module("loginPage", []).controller("loginPageCtrl", function($scope) {
    $scope.loginClickedOnce = false;
    $scope.user = {};
    var userDetails = [];
    $scope.successfulLogin = false;
    $scope.loginClicked = function() {
        $scope.loginClickedOnce = true;
    };
    $scope.login = function() {
        userDetails = $scope.user;
        if (userDetails.password === "hello123") {
            $scope.successfulLogin = true;
        } else {
            $scope.successfulLogin = false;
        }
    };
});
