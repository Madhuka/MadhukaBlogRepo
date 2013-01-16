vjo.ctype('XML') //< public

.props({

})
.protos({
	/**
		 * prints name
		 */
		//> public String name
		name: null,
		/**
		 * prints a info message to the console
		 */
		//> public void info(String... msg)
		info: vjo.NEEDS_IMPL
})

.options({
	metatype: true
})
.endType();