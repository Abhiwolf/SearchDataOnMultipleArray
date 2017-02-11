angular.module('home', []);
angular.module('home').config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "home/home.html"
        });
}).controller('HomeCtrl', function($scope, homeService, $timeout) {
    $scope.getAllData = '';
    $scope.view = {
    	searchStr : ""
    };
    $scope.flattenArray = {};



    $scope.initialiseGroupAndDepartment = function() {
        $scope.getGroupData = [];
        homeService.getGroupDetails().then(function(response) {
            $scope.getGroupData.push(response.groups);
            $scope.groupDetails();
        }, function(error) {
            console.log(error);
        });

        $scope.groupDetails = function() {
            $scope.departmentData = [];
            return homeService.getDepartmentList().then(function(response) {
                $scope.departmentData.push(response.departments);
                //console.log(response.groups);
            }, function(error) {
                console.log(error);
            });
        }

        $timeout(function() {
            $scope.groupArray = _.flattenDeep($scope.getGroupData);
            $scope.departmentArray = _.flattenDeep($scope.departmentData);
            $scope.getAllData = $scope.getGroupData.concat($scope.departmentData);
            $scope.flattenArray = _.flatten($scope.getAllData);

            console.log($scope.flattenArray);
        }, 2000);
    };

    $scope.searchedInfos = function(){
    	var searched = {};
        if ($scope.view.searchStr) {
			angular.forEach($scope.flattenArray, function(value, key){
              if (value.groupName.toLowerCase().indexOf($scope.view.searchStr.toLowerCase()) != -1) {
              	 searched[key] = value;
              }else if (value.groupId.toLowerCase().indexOf($scope.view.searchStr.toLowerCase()) != -1) {
              	 searched[key] = value;
              }
              else if (value.address.toLowerCase().indexOf($scope.view.searchStr.toLowerCase()) != -1) {
              	 searched[key] = value;
              }
              else if (value.phoneNumber.toString().indexOf($scope.view.searchStr.toString()) != -1) {
              	 searched[key] = value;
              }
        });        
        }
        else {
            searched =  $scope.flattenArray;
        }
        return searched;
    };

    $scope.initialiseGroupAndDepartment();
});
