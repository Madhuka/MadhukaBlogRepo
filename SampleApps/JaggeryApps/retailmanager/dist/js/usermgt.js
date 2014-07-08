UserMgt = new function() {
    // var URL ='../../../usermgt/apis/';
    var URL = './apis/';
    this.login = function() {
	$('#message').html('');
	if ($('#username').val() != "" && $('#password').val() != "") {
	    UserMgt.clear();
	    var data = {
		"username" : $('#username').val(),
		"password" : $('#password').val()
	    };
	    Util.makeJsonRequest("POST", URL + "user/login/", null, data,
		    function(html) {
			if (!html.error) {
				alertify.success("Success notification: "+ html.message);			    
			    document.location = './';
			} else {			  
			    alertify.alert("Login Failed!");

			}
		    });
	} else {
		alertify.alert("Please enter username and password");
		}

    };

    this.getRolesCurrentUser = function() {
	UserMgt.clear();
	var data = {
	    "username" : $('#username').val()
	};
	Util.makeJsonRequest("POST", URL + "user/getRoles/", null, data,
		function(html) {
		    UserMgt.makeout(html);
		});
    };

    this.logout = function() {
	UserMgt.clear();
	Util.makeJsonRequest("GET", URL + "user/logout/", null, null, function(
		html) {
	    document.location = './';
	});
    };

    this.listdata = function() {
	function getid() {
	    var stringUrl = window.location.href;
	    var n = stringUrl.split("uid=")[1];
	    return n;
	}

	function parseXml(xml) {
	    var data = xml.results[0];
	    $('#susername').val(data.user_name);
	    $('#disname').val(data.user_displayname);
	    $('#secname').val(data.user_secondname);
	    $('#email').val(data.user_email);
	    $('#pno').val(data.user_phone);
	    $('#did').val(data.user_devid);
	    //   	 $('#bname').html('<h4>'+data[0].resources_name+'</h4>');
	    //   var template = $('#myTemplatex').html(); 
	    RoleMgt.listUserRoles(data.user_name);
	    RoleMgt.listRoles(data.user_name);
	    console.log(data);
	}

	var id = getid();
	console.log(id);
	$.ajax({
	    type : "GET",
	    url : "../strix/api/api/user.jag?action=getuser&userId=" + id,
	    dataType : "json",
	    success : parseXml
	});
    };

    this.register = function() {
	if (UserMgt.validateRegister()) {
	    var data = {
		"username" : $('#sellerName').val(),
		"password" : $('#spassword').val()
	    };
	    Util.makeJsonRequest("POST", URL + "./user/register/", null, data,
		    function(data, status, xhr) {
			UserMgt.makeout(data.message);
			console.log(data);
			console.log(status);
			console.log(xhr.status);
		    });
	}
    };
    this.validateRegister = function() {
	var msg = null;
	console.log("validateRegister");
	if ($('#susername').val() == "") {
	    msg = "Username is needed to enter<br>";
	}
	if ($('#spassword').val() == "") {
	    msg += "Password is needed to enter<br>";
	    $(".spassword'").notify(
	    		  "I'm left of the box", 
	    		  { position:"left" }
	    		);
	}
	if ($('#spassword2').val() == "") {
	    msg += "Password Second is needed to enter<br>";
	}
	if ($('#disname').val() == "") {
	    msg += "Display name is needed to enter<br>";
	}
	if ($('#email').val() == "") {
	    msg += "Email is needed to enter<br>";
	}
	if ($('#pno').val() == "") {
	    msg += "Phone number is needed to enter<br>";
	}
	if ($('#did').val() == "") {
	    msg += "Device ID is needed to enter<br>";
	}
	if (msg != null) {
	    UserMgt.makeout(msg);
	    return false;
	}
	//password check same
	if ($('#spassword').val() != $('#spassword2').val()) {
	    msg = "passwords are not equal, pleas check again";
	    UserMgt.makeout(msg);
	    return false;
	}
	//api call
	//api/user.jag?action=adduser&userName=testString&userDisplayname=testString&userSecondname=testString&userEmail=testString&userPhone=testString&userDevid=testString&userExtra=testString&userAge=18&userOut=1&userAdress=testString&

	var urltoCall = 'api/user.jag?action=adduser&userName='
		+ $("#susername").val() + '&userDisplayname='
		+ $("#disname").val() + '&userSecondname='
		+ $("#secname").val() + '&userEmail=' + $("#email").val()
		+ '&userPhone=' + $("pno").val() + '&userDevid='
		+ $("#did").val() + '&userExtra=none' + '&userAge=6'
		+ '&userOut=0' + '&userAdress=none';
	Util.makeJsonRequest("POST", URL + urltoCall, null, null, function(
		data, status, xhr) {
	    UserMgt.makeout(data.message);
	    console.log(data);
	    console.log(status);
	    console.log(xhr.status);
	});

	return true;

    };

    this.remove = function() {
	UserMgt.clear();
	var data = {
	    "username" : $('#srusername').val()
	};
	Util.makeJsonRequest("POST", URL + "user/remove/", null, data,
		function(data) {
		    UserMgt.makeout(data);
		    console.log(data);
		});
    };

    this.signup = function() {
	UserMgt.clear();
	var data = {
	    "username" : $('#susername').val(),
	    "password" : $('#spassword').val()
	};
	Util.makeJsonRequest("POST", URL + "apis/user/signup/", null, data,
		function(html) {
		    UserMgt.makeout(html);
		});
    };

    // user meta data

    this.serchUser = function(search) {
	// http://127.0.0.1:9763/strix/api/api/user.jag?action=searchuser&search=ad
	// - api call
	Util
		.makeJsonRequest(
			"POST",
			URL + "api/user.jag?action=searchuser&search="
				+ $('#username').val(),
			null,
			null,
			function(html) {
			    var template = '{{#.}} <tr> <td>{{user_id}}</td> <td>{{user_name}}</td>  <td>{{user_displayname}}</td>  <td><input type="button" id="register" value="View" class="btn btn-success" onclick="location.href=\'./user.jag?uid={{user_id}}\'"/></td></tr>{{/.}}';

			    var data = html.results;
			    var htmlx = Mustache.to_html(template, data);
			    $('#tbody').html(htmlx);

			});
    };

    //end user meta data

    this.clear = function() {
	UserMgt.makeout();
	$(".alertz").hide();
    };

    this.makeout = function(html) {
	$("#outz").html(html);
	$(".alertz").show();
    };

};