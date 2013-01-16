vjo.otype('org.jaggeryjs.request') //< public

.globals({
	kayak: null //<request
})


.defs({
	
firstName: null, //< String
	//> public void launch( request::person person, boolean? hasPaddle) 
    launch:vjo.NEEDS_IMPL
    
	/**
	   * @param duration Number The duration in seconds to paddle 
	*/
    //>public void paddleForward(int duration) 
    ,paddleForward : vjo.NEEDS_IMPL
	/**
	   * @param duration Number The duration in seconds to paddle 
	*/
    //>public void paddleBackward(int duration) 
    ,paddleBackward : vjo.NEEDS_IMPL
    
    /** 
	@param eventType a String representing the event type, launch, stop, paddleForward, paddBackward
	@param eventHandler Function a function which passes an event object 
	*/
    , //>public void addEventListener(String eventType, (void fn(org.jaggeryjs.request::event event) )) 
    addEventListener : vjo.NEEDS_IMPL	
	
    /**
     * @param location Object Pass an object literal with the longitude and latitude of the desired location
	*/
	//>public void setDestination(org.jaggeryjs.request::destination coordinates) 
	,setDestination : vjo.NEEDS_IMPL
    
	,//>public void stopPaddling() 
	stopPaddling : vjo.NEEDS_IMPL

	,person : {
		firstName: null, //< String
		lastName: null, //< String
		launchLog: null //< Date[]?
	}
	,
	event : {
		eventType: null, //< String
		duration: null, //< Number
		person: null //< org.jaggeryjs.request::person
}
	,destination : {
		longitude: null, //< Number
		latitude: null //< Number
	}
})
.endType()