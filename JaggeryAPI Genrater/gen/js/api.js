function api(tableName, arg) {
	var outStr = "<%";
	outStr += '\n\ninclude("../model/dbinit.jag");' + '\ninclude("../model/' + tableName + '.jag");' + '\ninclude("../controller/' + tableName + '.jag");';
	outStr += "\n\n var action = request.getParameter('action');";

	var dbqruyArr = {};
	var key;
	var s1 = "", sf = "";
	var sa1 = "", sa2 = "", sa3 = "", sa4 = "";
	var fs1 = "\n", fs2 = "\n", fs3 = "\n", fs4 = "\n";
	for(key in arg) {
		console.log(arg[key]);
		if(key == 'id') {
			outStr += "\n var " + tableName + "" + capitalize(key) + " = request.getParameter('" + tableName + "" + capitalize(key) + "');";
			sa1 += tableName + "" + capitalize(key);
		} else if(arg[key] == 'string' || arg[key] == 'int' || arg[key] == 'bool') {
			outStr += "\n var " + tableName + "" + capitalize(key) + " = request.getParameter('" + tableName + "" + capitalize(key) + "');";
			if(sa2.length == 0) {
				sa2 += tableName + "" + capitalize(key);
			} else {
				sa2 += ", " + tableName + "" + capitalize(key);
			}
		}
	}
fs1 +=buildSwitch(tableName,sa1,sa2);
outStr +=fs1;
outStr += '\n\n%>';
	return outStr;

}

function buildSwitch(tableName, s1, s2) {
var outStr = '\nswitch(action) {';
outStr += '\ncase "list'+tableName+'":'
+'\n		print(list'+tableName+'());'
+'\n		break;'
+'\n	case "add'+tableName+'":'
+'\n		print(add'+tableName+'('+s2+'));'
+'\n		break;'
+'\n	case "update'+tableName+'":'
+'\n		print(update'+tableName+'('+s1+','+s2+'));'
+'\n		break;'
+'\n	case "delet'+tableName+'":'
+'\n		print(delet'+tableName+'('+s1+'));'
+'\n		break;'
+'\n	case "get'+tableName+'":'
+'\n		print(get'+tableName+'('+s1+'));'
+'\n		break;'
+'\n	case "settabel":'
+'\n		print(settabel());'
+'\n		break;'
+'\n	default:'
+'\n		print(invokeError("'+tableName+' action not define"));'
+'\n}';


return outStr;
}

function capitalize(s) {
	return s[0].toUpperCase() + s.slice(1);
}