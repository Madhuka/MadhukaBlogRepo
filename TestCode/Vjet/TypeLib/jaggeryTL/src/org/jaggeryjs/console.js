/**
 * Test console
 */
//> public
vjo.ctype('org.jaggeryjs.console')
.props({

})
.protos({
	/**
		 * prints name
		 */
		//> public String name
		name: null,
		
	length:undefined, //< long length;
	/**
	 * log infor
	 */
	//> public void log(Object... args)
	log: vjo.NEEDS_IMPL,
	
	/**
	 * testing infor
	 * 
	 * 	 * <pre>
	 * // curl -k https://localhost:8000/
	 * var https = require('https');
	 * var fs = require('fs');
	 * 
	 * var options = {
	 *   key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
	 *   cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
	 * };
	 * 
	 * https.createServer(options, function (req, res) {
	 *   res.writeHead(200);
	 *   res.end("hello world\n");
	 * }).listen(8000);
	 * </pre>
	 * 
	 * <b>Example</b>
	 * Test
	 */
	//> public void info(Object... args)
	info: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void warn(Object... args)
	warn: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void error(Object... args)
	error: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void dir(Object object)
	dir: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void time(String label)
	time: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void timeEnd(String label)
	timeEnd: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void trace(String label)
	trace: vjo.NEEDS_IMPL,
	
	/**
	 * 
	 */
	//> public void assert(Object expression)
	assert: vjo.NEEDS_IMPL
})
.options({
	metatype: true
})
.endType();