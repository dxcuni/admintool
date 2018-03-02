 var url_home = "https://rawgit.com/dxcuni/admintool/itg";
 var url_image = "https://raw.githubusercontent.com/dxcuni/admintool/itg/res/images/";
 var url_mode2 = "https://rawgit.com/dxcuni/admintool/itg/pages/mode2page/modetwopage.html?page=";
 var mode2Image = "10.jpg";
   //Home URL of courses
var homeGuided       = "https://rawgit.com/dxcuni/guidedlearn/itg";
var homeTechLernReso = "https://rawgit.com/dxcuni/techlearnreso/itg";
var homeAddLernReso  = "https://rawgit.com/dxcuni/addtllearnreso/itg";
var urlAdmintool     = "https://rawgit.com/dxcuni/admintool/itg//pages/addeditdata.html";


var varConf = getParameterByName('page');
var varCourse = getParameterByName('re');
var varJsPage = "";
varJsPage = getHomeURL(varCourse);

//get home url of the course start ///
function getHomeURL(course) {
    if (course === 'tech') {        
        varJsPage = homeTechLernReso + '/res/json/'+varConf + '.js';
    }
    else if (course === 'additi') {        
        varJsPage = homeAddLernReso + '/res/json/' + varConf + '.js';
    }
    else {        
        varJsPage = homeGuided + '/res/json/' + varConf + '.js';
    }
    return varJsPage;
}

//get home url of the course END ///


var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {    
    $scope.url_home = "https://rawgit.com/dxcuni/admintool/itg";
    $scope.url_image = "https://raw.githubusercontent.com/dxcuni/admintool/itg/res/images/";
    $scope.url_mode2 = "https://rawgit.com/dxcuni/admintool/itg/mod2page.html?page=";
    
    $scope.location = function (page) {
        var pages = JSON.parse(conf);
        return pages[page].name;
    };
    $scope.mode2conf = function () {
        var pages = JSON.parse(mode2conf);
        return pages[0].name;
    };
});


