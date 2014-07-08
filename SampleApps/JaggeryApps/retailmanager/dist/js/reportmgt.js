ReportMgt = new function () {
   
    // add seller for system
    this.genReport = function () {
    	var saler = $("#saler option:selected").text().split('- ')[1];
    	var org = $("#org option:selected").val();
    	var sale = $("#sale option:selected").val();
    	var errorFound =false;
        var sellerData = {'sellerName':$('#sellerName').val(),
        		'sellerCompany':$('#sellercompany').val(),
        		'sellerAddress':$('#selleraddress').val(),
        		'sellerTelphone':$('#sellertelphone').val(),
        		'sellerMobile':$('#sellermobile').val(),
        		'sellerNIC':$('#sellernic').val(),
        		'sellerPhoneMIME':$('#sellerphoneMIME').val(),
        		'sellerEmail':$('#selleremail').val(),
        		'sellerLocation':$('#sellerlocation').val(),
        		'sellerOut':1
        		};
        if(!errorFound){
        Util
            .makeJsonRequest(
                "GET",
                './apis/api/phone.jag?action=getphonebysaler&phoneSellerId='+saler,
                null,
                null,
                function (data) {
                    if (!data.error) {
                    	alertify.success("Successfull listting ");	
                        console.log(data);
                        var template = '<div class="col-md-12"><table class="table table-hover">'+
                        ' <thead><tr><th>ID</th><th>IMEI</th><th>Type</th><th>Seller Id</th><th>Is Original</th><th></th></tr></thead><tbody>'+
                        '{{#.}}<tr>'+
                        '<td>{{phone_id}}</td>'+
                        '<td>{{phone_IMEI}}</td>'+
                        '<td>{{phone_type}}</td>'+
                        '<td>{{phone_sellerId}}</td>'+
                        '<td>{{phone_original}}</td>'+
                        '<tr>{{/.}}</tbody></table>';
                        var html = Mustache.to_html(template, data.results);
                        console.log(html);
                        $('#listrole').html(html);
                      
                    } else {
                    	alertify.alert("Request Failed, "+data.errorMsg);
                    }
                });
        }

    };

        
    //update seller
    
    // add seller for system
    this.updateSeller = function () {
    	var errorFound =false;
		if ($('#sellerName').val() == "") {
			alertify.error("Username is needed to enter");
			errorFound = true;
		}		
		if ($('#sellercompany').val() == "") {
			alertify.error("Company name is needed to enter");
			errorFound = true;
		}
		if ($('#sellermobile').val() == "") {
			alertify.error("Mobile number is needed to enter");
			errorFound = true;
		}
		if ($('#sellerphoneMIME').val() == "") {
			alertify.error("PhoneMIME number is needed to enter");
			errorFound = true;
		}
		if ($('#selleremail').val() == "") {
			alertify.error("Email ID is needed to enter");
			errorFound = true;
		}
        var sellerData = {'sellerName':$('#seller_name').val(),
        		'sellerCompany':$('#seller_company').val(),
        		'sellerId':$('#seller_id').val(),        		
        		'sellerAddress':$('#seller_address').val(),
        		'sellerTelphone':$('#seller_telphone').val(),
        		'sellerMobile':$('#seller_mobile').val(),
        		'sellerNIC':$('#seller_NIC').val(),
        		'sellerPhoneMIME':$('#seller_phoneMIME').val(),
        		'sellerEmail':$('#seller_email').val(),
        		'sellerLocation':$('#seller_location').val(),
        		'sellerOut':1
        		};
        if(!errorFound){
        Util
            .makeJsonRequest(
                "GET",
                './apis/api/seller.jag?action=updateseller',
                sellerData,
                null,
                function (data) {
                    if (!data.error) {
                    	alertify.success("Successfull Updated Seller Information");	
                        console.log(data);
                      
                    } else {
                    	alertify.alert("Request Failed, "+data.errorMsg);
                    }
                });
        }

    };
    
   
    this.removeSeller = function () {
          Util
            .makeJsonRequest(
                "GET",
                './apis/api/seller.jag?action=deletseller&sellerId='+$('#seller_id').val(),
                null,
                null,
                function (data) {
                    if (!data.error) {
                    	alertify.success("Successfull removed");	
                        console.log(data);
                      
                    } else {
                    	alertify.alert("Request Failed, "+data.errorMsg);
                    }
                });
       

    };
    
    
    this.addRoleForUser = function () {
	$('#msgStatus').html('');
	var username = $("#susername").val();
	var roleName =  $('#listroletag').val();
      //  console.log(username+ " is ading "+role name);
        var dataUser = {
                "username": $("#susername").val(),
                "rolename": $('#listroletag').val()
            };
        Util
            .makeJsonRequest(
                "POST",
                './api/role/addRole/',
                null,dataUser,
                function (data) {
                    if (!data.error) {
                        //var rolelist = data.message;
                        //getting user list 
                        //RoleMgt.listUserRoles();
                	RoleMgt.listRoles(username);
                	    var template = '<tr><td><div class="'+roleName+'"> '+roleName+'</div></td><td><div class="'+roleName+'"><input type="button" id="remvoeButton" value="Remove Role" class="btn btn-info" onclick="RoleMgt.removeRole("'+roleName+'");" /><div></td></tr>';
                            
                	$('#userTable > tbody > tr').eq(6).after(template);
                	//RoleMgt.listUserRoles(username);
                	$('#msgStatus').html(data.message);
                       // console.log(data.message);
                       
                    } else {
                	$('#msgStatus').html(data.message);
                    }
                });
    };

    //adding role for system
    this.addRoleForSystem = function () {
    	//$('#msgStatus').html('');
    	var username = 'admin';
    	var roleName =  $('#rolename').val();
          //  console.log(username+ " is ading "+role name);
            var dataUser = {
                    "username": 'admin',
                    "rolename": $('#rolename').val()
                };
            Util
                .makeJsonRequest(
                    "POST",
                    './api/role/add/',
                    dataUser,dataUser,
                    function (data) {
                        if (!data.error) {
                        	 console.log(data);
                            //var rolelist = data.message;
                            //getting user list 
                            //RoleMgt.listUserRoles();
                    	RoleMgt.listRoles(username);
                    	    var template = '<tr><td><div class="'+roleName+'"> '+roleName+'</div></td><td><div class="'+roleName+'"><input type="button" id="remvoeButton" value="Remove Role" class="btn btn-info" onclick="RoleMgt.removeRole("'+roleName+'");" /><div></td></tr>';
                                
                    	$('#userTable > tbody > tr').eq(6).after(template);
                    	//RoleMgt.listUserRoles(username);
                    	$('#msgStatus').html(data.message);
                           // console.log(data.message);
                           
                        } else {
                        	 console.log(data);
                    	$('#msgStatus').html(data.message);
                        }
                    });
        };
        
    
    this.removeRole = function (roleName) {
	$('#msgStatus').html('');
	var username = $("#susername").val();
	var roleName =  roleName;
	
      //  console.log(username+ " is ading "+role name);
        var dataUser = {
                "username": $("#susername").val(),
                "rolename": roleName
            };
        Util
            .makeJsonRequest(
                "POST",
                './api/role/removeRole/',
                null,dataUser,
                function (data) {
                    if (!data.error) {
                        //var rolelist = data.message;
                        //getting user list 
                        //RoleMgt.listUserRoles();
                	RoleMgt.listRoles(username);
                	//    var template = '<tr><td><div id="'+roleName+'" class="'+roleName+'"> '+roleName+'</div></td><<td><input type="button" id="remvoeButton" value="Remove Role" class="btn btn-info" onclick="RoleMgt.removeRole('+roleName+');" /></td></tr>';
                	$('.'+roleName+'').html('');    
                	//$('#userTable > tbody > tr').eq(6).after(template);
                	//RoleMgt.listUserRoles(username);
                	$('#msgStatus').html(data.message);
                        console.log(data.message);
                       
                    } else{
                	$('#msgStatus').html(data.message);
                    }
                });
    };

};