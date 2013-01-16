vjo.ctype('Log') //< public

.props({
  	    
})
.protos({
	
	
		//> public Log ()
		//> public Log (String name)
			constructs: function() {},
			
				/**
		 * prints name
		 */
		//> public String name
		name: null,
		/**
		 * prints a info message to the console
		 */
		//> public void info(String... msg)
		info: vjo.NEEDS_IMPL,
		
		/**
		 * prints a warn message to the console
		 */
		//> public void warn(String... msg)
		warn: vjo.NEEDS_IMPL,
		
		/**
		 * prints a error message to the console
		 */
		//> public void error(String... msg)
		error: vjo.NEEDS_IMPL,
		
		/**
		 * prints a debug message to the console
		 */
		//> public void debug(String... msg)
		debug: vjo.NEEDS_IMPL,
		
		/**
		 * prints a fatal message to the console
		 */
		//> public void fatal(String... msg)
		fatal: vjo.NEEDS_IMPL,
			
		/**
		 *Returns true if Trace level is enabled. Default is false
		 */
		//> public boolean isTraceEnabled()
		isTraceEnabled: vjo.NEEDS_IMPL,
			
		/**
		 * Returns true if Debug level is enabled. Default is true
		 */
		//> public boolean isDebugEnabeld()
		isDebugEnabeld: vjo.NEEDS_IMPL
})

.endType();