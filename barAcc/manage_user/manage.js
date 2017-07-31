/**
 * Created by kailash on 28/7/17.
 */
var app = angular.module('manageUserApp', ['angularUtils.directives.dirPagination']);
app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

app.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();

        fd.append('file', file);

        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })

            .success(function(){
                console.log("sushil is here for test ");
            })

            .error(function(){
                console.log("data is here ------------>")
            });
    }
}]);
app.controller('manageUserCtrl',['$scope','$http','fileUpload', function($scope,$http,fileUpload) {
    console.log("Sushil is here inside user add pop ");
    var x;
    $scope.memberData = {
        "code":"A-1",
        "name": "Mr. Sandeep Tewari",
        "designation":"Secretart General",
        "sodowo":"son of daughter of wife of",
        "contact":"9719373192",
        "picPath":"images/members/face.gif",
        "email":"abc@gmail.com"
    };
    function dataURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: mimeString
        });
    }
    $scope.uploadImage = function(uploadme) {
        var fd = new FormData();
        var imgBlob = dataURItoBlob(uploadme);
        fd.append('file', imgBlob);
        $http.post(
            '../resources',
            fd, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            }
        )
            .success(function(response) {
                console.log('success', response);
            })
            .error(function(response) {
                console.log('error', response);
            });
    }
    function writeImageFile(file){
        console.log('file is ' );
        console.dir(file);

        var uploadUrl = "../resources/a";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };
    var changeTemplateImage = function (event) {
        //alert("here in change image method");
        var file = event.currentTarget.files[0];

       // console.log("Image object is here for test :",this);

        var reader = new FileReader();
        reader.onload = function (event) {
            //try {
            // console.log("image file ",event.target.result);
            //document.getElementById("fileToUpload").remove();
            //alert("here in change image  44 method");
            var imageBase64Data = event.target.result;
            $scope.uploadImage(imageBase64Data);
            //console.log("Image me :",imageBase64Data);
        };
        reader.readAsDataURL(file);
    };
    $scope.uploadTemplateImage = function(){
        x = document.createElement("INPUT");
        x.setAttribute("type", "file");
        x.setAttribute("id", "fileToUpload");
        x.setAttribute("accept", "image/gif,image/jpeg");
        x.addEventListener("change", changeTemplateImage);
        x.click();
    };

    $http({
        method: 'POST',
        url: 'http://wilkd.com/api/savemembers.php',
        data: $scope.memberData,
        headers: {"Content-Type": "application/json"}
    }).success(function (data, status, headers, config) {
        if (data && data.status && status && (status == 200)) {
            if (data.status == 'success') {
                console.log("Sushil is here for test ----");
            }
        }
    }).error(function () {

    })



}]);


