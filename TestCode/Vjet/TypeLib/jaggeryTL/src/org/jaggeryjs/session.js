vjo.otype('org.jaggeryjs.session') //< public

.globals({
	//>session
	session:null,
	NAME: 'eBay' //<public String

})


.defs({
	
	/**
		 * Ready state change callback when async mode is used.
		 */
	
x : 10,//< int

//>public MAX
MAX: 'eBayx', //< public String 

firstNames: String, //< public String firstNames

 //>public DATEx
	DATEx: Date, //< type::Date
		
	 //>public DATE
	DATE: Date, //< type::Date
				Point: {
        x: undefined,    //< Number
        y: undefined    //< Number 
        },
        
				
	    		    //>public Point getCreationTimex()
	    getCreationTimex : vjo.NEEDS_IMPL,
	    
	    		    	
	    
	    /**
	     * Returns the last accessed time of the session
	  	* @return String will be return
	  	*/
	  	 //>public String getLastAccessedTime() 
	  	 getLastAccessedTime : vjo.NEEDS_IMPL,
	  	 
firstName: null, //< String
	  	 
	  	 
	  	 //>public man get() 
	  	 get : function() {
	  	  	
	  	 },
	  	 
	  	//>public man 
	  	 man : {
		firstName: null, //< String
		lastName: null, //< String
		launchLog: null //< Date[]?
	}
})
.endType();