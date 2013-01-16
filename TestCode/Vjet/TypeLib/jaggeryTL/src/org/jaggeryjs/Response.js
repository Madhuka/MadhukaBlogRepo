/**
 * Object that provides the properties and functions of HTTP Response.
 */
vjo.ctype('org.jaggeryjs.Response') //< public

.props({
	getHash : null, //<Object
	goBack : null, //<Object
	goForward : null, //<Object
	setHash : null, //<Object
	
	//>public void addToHistory(Object args) 
	addToHistory : vjo.NEEDS_IMPL,
	
	//>public void init() 
	init : vjo.NEEDS_IMPL,
	
	//>public void setInitialState(Object args) 
	setInitialState : vjo.NEEDS_IMPL	
})
.options({
	metatype:true
})
.endType();