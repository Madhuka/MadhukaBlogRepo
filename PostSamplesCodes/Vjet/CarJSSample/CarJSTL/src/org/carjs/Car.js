vjo.otype('org.carjs.Car') //< public

.globals({
	car:null //<Car
})

.defs({
    	/**
	    * Start the car
	  	*/
	  	 //>public void start() 
	  	 start : vjo.NEEDS_IMPL,
	  	 
	  	/**
	    * Drive the car at speed 
	  	* @param speed Number The speed of the car on drive
	  	*/
	  	 //>public void drive(int speed) 
	  	 drive : vjo.NEEDS_IMPL,
	  	 
	  	 /**
	  	  * stop the car
	  	  */
	  	 //>public void stop() 
	  	 stop : vjo.NEEDS_IMPL,
	  	 
	  	 /**
	  	  * return speed of the car
	  	  */
	  	 //>public void showSpeedoMeter() 
	  	 showSpeedoMeter : vjo.NEEDS_IMPL,
	  	 
	  	 /**
	  	  * Set carDetails 
	  	  */
	  	 //>public carDetails setDetails(carDetails CarDetails) 
	  	 setDetails : vjo.NEEDS_IMPL,
	  	 
	  	 /**
	  	  * get carDetails
	  	  */
	  	 //>public carDetails getDetails() 
	  	 getDetails : vjo.NEEDS_IMPL,
	  	 
	  	 carDetails : {
			name: null, //< String
			color: null, //< String
			regDate: null //< Date?
	}
})
.endType();