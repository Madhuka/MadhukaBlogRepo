function dbqury(tableName, arg) {
	var outStr = "<%";
	var dbqruyArr = {};
	var key;
	var s1 = "", sf = "";
	var sa1 = "", sa2 = "", sa3 = "", sa4 = "";
	var fs1 = "\n", fs2 = "\n", fs3 = "\n", fs4 = "\n";
	for(key in arg) {
		console.log(arg[key]);
		if(key == 'id') {
			s1 += '`' + tableName + '_id` INT NOT NULL AUTO_INCREMENT';
			sf = 'PRIMARY KEY (  `' + tableName + '_id` )';
			sa1 += tableName + '_' + key;
			sa2 += '`' + tableName + '_' + key+ '`';
			sa3 += '"+' + tableName + '_' + key + '+"';
			fs1 += buildmf1(tableName);
			fs2 += buildmf2(tableName);
			//console.log(arg[key]);
		} else if(arg[key] == 'string') {
			s1 += ', `' + tableName + '_' + key + '` VARCHAR( 120 ) NOT NULL';
			sa1 += ',' + tableName + '_' + key;
			sa2 += ', `' + tableName + '_' + key + '`';
			sa3 += ',\'"+' + tableName + '_' + key + '+"\'';
			sa4 += '`' + tableName + '_' + key + '` =  \'"+' + tableName + '_' + key + '+"\',';

		} else if(arg[key] == 'int') {
			s1 += ', `' + tableName + '_' + key + '` INT NOT NULL';
			sa1 += ',' + tableName + '_' + key;
			sa2 += ', `' + tableName + '_' + key + '`';
			sa3 += ',\'"+' + tableName + '_' + key + '+"\'';
			sa4 += '`' + tableName + '_' + key + '` =  \'"+' + tableName + '_' + key + '+"\',';

		} else if(arg[key] == 'bool') {
			s1 += ', `' + tableName + '_' + key + '` BOOL NOT NULL DEFAULT  \'1\'';
			sa1 += ',' + tableName + '_' + key;
			sa2 += ', `' + tableName + '_' + key + '`';
			sa3 += ',\'"+' + tableName + '_' + key + '+"\'';
			sa4 += '`' + tableName + '_' + key + '` =  \'"+' + tableName + '_' + key + '+"\',';

		}
	}
	sa2 += ',`' + tableName + '_create_time` ,`' + tableName + '_modified_time`';
	sa3 += ',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP';
	sa4 += '`' + tableName + '_modified_time` = CURRENT_TIMESTAMP';
	console.log(s1);
	console.log(sa1);
	console.log(sa2);
	console.log(sa3);
	console.log(sa4);
	fs3 += buildmf3(tableName, sa1, sa2, sa3);
	fs4 += buildmf4(tableName, sa1, sa4);
	outStr += '\nvar db_query_' + tableName + '_view = "SELECT * FROM  `' + tableName + '` LIMIT 0 , 30"';
	outStr += '\nvar db_query_' + tableName + '_create = "CREATE TABLE  `' + tableName + '` (' + s1  + ',`' + tableName + '_create_time` TIMESTAMP NOT NULL ,`' + tableName + '_modified_time` TIMESTAMP NOT NULL ,' + sf +')";';
	outStr += fs1 + fs2 + fs3 + fs4 + '\n%>';
	return outStr;

}

function buildmf1(tableName) {
	var strOut = '\nfunction db_query_' + tableName + '_delet(' + tableName + '_id) {' + '\nvar outStr = "DELETE FROM `' + tableName + '` WHERE `' + tableName + '_id` = " + ' + tableName + '_id + " LIMIT 1";' + '\nreturn outStr;\n}';
	console.log(strOut);
	return strOut;
}

function buildmf2(tableName) {
	var strOut = '\nfunction db_query_' + tableName + '_get(' + tableName + '_id) {' + '\nvar outStr = "SELECT *  FROM `' + tableName + '` WHERE `' + tableName + '_id` = " + ' + tableName + '_id + " LIMIT 1";' + '\nreturn outStr;' + '\n}';
	console.log(strOut);
	return strOut;
}

function buildmf3(tableName, s1, s2, s3) {
	var strOut = '\nfunction db_query_' + tableName + '_add(' + s1 + ') {' + '\nvar outStr = "INSERT INTO  `' + tableName + '` (' + s2 + ')VALUES (' + s3 + ');";' + '\nreturn outStr;' + '\n}';
	console.log(strOut);
	return strOut;
}

function buildmf4(tableName, s1, s4) {
	var strOut = '\nfunction db_query_' + tableName + '_update(' + s1 + ') {' + '\nvar outStr = "UPDATE  `' + tableName + '` SET  ' + s4 + ' WHERE  `' + tableName + '_id` =" + ' + tableName + '_id + " LIMIT 1 ;";' + '\nreturn outStr;' + '\n}';
	console.log(strOut);
	return strOut;
}