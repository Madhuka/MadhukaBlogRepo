//var SERVER_URL = 'http://localhost:9763/retailmanager/apis/';

function phones($scope, $http) {

//server URL needed to added 

    $http.get('./apis/api/phone.jag?action=listphone').
        success(function(data) {
        	if(!data.error){
            $scope.phones = data.results;
        	}
        });
}

function viewPhones($scope, $http) {

	//server URL needed to added 
	var phoneID = location.search.split('phoneID=')[1]
	    $http.get('./apis/api/phone.jag?action=getphone&phoneId='+phoneID).
	        success(function(data) {
	        	if(!data.error){
	            $scope.phone = data.results[0];
	        	}
	        });
	}