angular
    .module('home')
    .factory('homeService', function($http, ngUriSettings) {

        var homeService = {};
        var serviceBase = ngUriSettings.apiServiceBaseUri;
        var apiInfo = {
            //apiUrl: 'http://34.196.17.136:9090/bdprs/api/',
            serviceProviderId: 'serviceProviderId',
            serviceProviderName: 'bsft-connect',
            groupId: 'DevZone-1',
            deptGroupId: 'DevZone-1'
        };
        // Getting Group details item item var getGroupDetails = function(){     return
        // $http.post(serviceBase + 'group/provider/groups/v1',{ serviceProviderId:
        // apiInfo.serviceProviderName }).success(function(response){
        // console.log(response);         return response;     }).error(function(error){
        //         return error;     }); };

        // var getGroupDetails = function() {
        //     return $http
        //         .post(serviceBase + 'group/provider/groups/v1', {
        //             serviceProviderId: apiInfo.serviceProviderName
        //         })
        //         .then(function(response) {
        //             return response;
        //         }, function(error) {
        //             return error;
        //         })
        // };

        //Getting Department list details
        // var getDepartmentList = function() {
        //     return $http
        //         .post(serviceBase + 'group/department/getlist/v1', {
        //             groupId: 'BlrDev',
        //             includeEnterpriseDepartments: true,
        //             serviceProviderId: apiInfo.serviceProviderName
        //         })
        //         .then(function(response) {
        //             return response;
        //         }, function(error) {
        //             return error;
        //         })
        // };
        var getGroupDetails = function(){
            return $http.get('sampleData/group.json').then(function(response){
                console.log(response.data);
                return response.data;
            }, function(error){
                return error;
            });
        };

        var getDepartmentList = function(){
            return $http.get('sampleData/department.json').then(function(response){
                return response.data;
            }, function(error){
                return error;
            });
        };

        homeService.getGroupDetails = getGroupDetails;
        homeService.getDepartmentList = getDepartmentList;
        return homeService;

    });
