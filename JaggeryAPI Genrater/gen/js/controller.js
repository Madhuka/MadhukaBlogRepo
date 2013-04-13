function controller(tableName, arg) {
	var outStr = "<%";

	var dbqruyArr = {};
	var key;
	var s1 = "", sf = "";
	var sa1 = "", sa2 = "", sa3 = "", sa4 = "";
	var fs1 = "\n", fs2 = "\n", fs3 = "\n", fs4 = "\n", fs5 = "\n", fs6 = "\n", fs7 = "\n";
	for(key in arg) {
		console.log(arg[key]);
		if(key == 'id') {
			sa1 += tableName + "" + capitalize(key);
			sa3 += tableName + "" + capitalize(key) + " != null ";
		} else if(arg[key] == 'string' || arg[key] == 'int' || arg[key] == 'bool') {
			if(sa2.length == 0) {
				sa2 += tableName + "" + capitalize(key);
				sa4 += tableName + "" + capitalize(key) + " != null ";
			} else {
				sa2 += ", " + tableName + "" + capitalize(key);
				sa4 += "&& " + tableName + "" + capitalize(key) + " != null ";
			}
		}
	}
	fs1 += buildf1(tableName);
	fs2 += buildf2(tableName);
	fs3 += buildf3(tableName, sa2, sa4);
	fs4 += buildf4(tableName, sa1, sa2, sa3, sa4);
	fs5 += buildf5(tableName, sa1, sa3);
	fs6 += buildf6(tableName, sa1, sa3);
	fs7 += buildf7(tableName);
	outStr += fs1 + fs2 + fs3 + fs4 + fs5 + fs6 + fs7;
	outStr += '\n\n%>';
	return outStr;

}

function buildf1(tableName) {
	var outStr = '\n';
	outStr += 'function list' + tableName + '() {' + '\n	var db_qury = db_query_' + tableName + '_view;' + '\n	log.info(db_qury);' + '\n	var results = db.query(db_qury);' + '\n	return {' + '\n		"error" : false,' + '\n		"results" : results' + '\n	};' + '\n}'
	return outStr;
}

function buildf2(tableName) {
	var outStr = '\n';
	outStr += 'function settabel() {' + '\n	var db_qury = db_query_'+tableName+'_create;' + '\n	log.info(db_qury);' + '\n	var results = db.query(db_qury);' + '\n	return {' + '\n		"error" : false,' + '\n		"results" : results' + '\n	};' + '\n}';
	return outStr;
}

function buildf3(tableName, s2, s4) {
	var outStr = '\n';
	outStr += 'function add' + tableName + '(' + s2 + ') {' + '\n	log.info("add ' + tableName + '");' + '\n	if(' + s4 + '){' + '\n	var db_qury = db_query_' + tableName + '_add(null ,' + s2 + ');' + '\n	log.info(db_qury);' + '\n	var results = db.query(db_qury);' + '\n	return {' + '\n		"error" : false,' + '\n		"results" : results' + '\n	};' + '\n	}else {' + '\n		return invokeError("Please enter ' + s2 + '");' + '\n	}' + '\n}';
	return outStr;
}

function buildf4(tableName, s1, s2, s3, s4) {
	var outStr = '\n';
	outStr += 'function update' + tableName + '(' + s1 + ',' + s2 + ') {' + '\n	log.info("update ' + tableName + '");' + '\n	if(' + s3 + ' && ' + s4 + '){' + '\n	var db_qury = db_query_' + tableName + '_update(' + s1 + ' ,' + s2 + ');' + '\n	log.info(db_qury);' + '\n	var results = db.query(db_qury);' + '\n	return {' + '\n		"error" : false,' + '\n		"results" : results' + '\n	};' + '\n	}else {' + '\n		return invokeError("Please enter ' + s1 + ', ' + s2 + '");' + '\n	}' + '\n}';
	return outStr;
}

function buildf5(tableName, s1, s3) {
	var outStr = '\n';
	outStr += 'function delet' + tableName + '(' + s1 + ') {' + '\n	log.info("delet ' + tableName + ' ");' + '\n	if(' + s3 + '){' + '\n	var db_qury = db_query_' + tableName + '_delet(' + s1 + ');' + '\n	log.info(db_qury);' + '\n	var results = db.query(db_qury);' + '\n	return {' + '\n		"error" : false,' + '\n		"results" : results' + '\n	};' + '\n	}else {' + '\n		return invokeError("Please enter ' + s1 + '");' + '\n	}' + '\n}';
	return outStr;
}

function buildf6(tableName, s1, s3) {
	var outStr = '\n';
	outStr += 'function get' + tableName + '(' + s1 + ') {' + '\n	log.info("get ' + tableName + ' ");' + '\n	if(' + s3 + '){' + '\n	var db_qury = db_query_' + tableName + '_get(' + s1 + ');' + '\n	log.info(db_qury);' + '\n	var results = db.query(db_qury);' + '\n	return {' + '\n		"error" : false,' + '\n		"results" : results' + '\n	};' + '\n	}else {' + '\n		return invokeError("Please enter ' + s1 + '");' + '\n	}' + '\n}';
	return outStr;
}

function buildf7(tableName) {
	var outStr = '\n';
	outStr += 'function invokeError(msg) {' + '\n	log.info(msg);' + '\n	return {' + '\n		"error" : true,' + '\n		"errorMsg" : msg' + '\n	};' + '\n}';
	return outStr;
}

function capitalize(s) {
	return s[0].toUpperCase() + s.slice(1);
}