Util = new function() {
	this.makeRequest = function(u, d, callback) {
		$.ajax({
			type : "GET",
			url : u,
			data : d,
			dataType : "text",
			async : false,
			success : callback
		});
	};

	this.makePost = function(u, d, callback) {
		$.ajax({
			type : "POST",
			url : u,
			data : d,
			dataType : "text",
			success : callback
		});
	};
	this.makeJsonRequest = function(t, u, d, rdata, callback) {
		$.ajax({
					type : t,
					url : u,
					data : d,
					dataType : "json",
					statusCode : {
						401 : function() {
							Util.onError(401, 'You are unauthorized',
									'Warning!', 'alert alert-danger');
						},
						404 : function() {
							Util
									.onError(
											404,
											'The requested resource could not be found',
											'Warning!', 'alert alert-danger');
						},
						200 : function() {
							Util
									.onError(
											200,
											'Standard response for successful HTTP requests',
											'Success!', 'alert alert-success');
						},
						201 : function() {
							Util
									.onError(
											201,
											'The request has been fulfilled and resulted in a new resource being created.',
											'Success!', 'alert alert-success');
						},
						202 : function() {
							Util
									.onError(
											202,
											'The request has been accepted for processing,',
											'Success!', 'alert alert-success');
						}
					},
					contentType : 'application/json',
					beforeSend : function(request) {
						for ( var key in rdata) {
							//console.log('key name: ' + key + ' value: '+ rdata[key]);
							request.setRequestHeader(key, rdata[key]);
						}
					},
					success : callback
				});
	};

	this.onError = function(code, msg, alrt, classcss) {
		$("#alertMsg").html(
				"<div class='" + classcss + "'><strong>" + alrt
						+ "</strong> Status code is " + code + ", " + msg
						+ " </div>");
		$(".alert").show();
	};
}