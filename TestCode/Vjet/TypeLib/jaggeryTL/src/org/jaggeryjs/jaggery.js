// top-level module is jaggery.js.  We expose built-in global entities that 
// jaggery.js provides out-of-the-box.  
/**
 * 
 */
//> public
vjo.ctype('org.jaggeryjs.jaggery')
.needs('XMLHttpRequest')
.globals({ 
	/**
	 * The global namespace object.
	 */

	//More from jaggery.js..
	/**
	 * testinf console js<br>sdasdads
	 *
	 */
		
		//> public org.jaggeryjs.console
		console: null,
	
				//> XML
		XML: null,
	
		//> public org.jaggeryjs.myconsole
		requestx: null,

					//> public org.jaggeryjs.Response
		response: null,
	
/**
 *          *  new (container, url[, options])
         *  <p>
         *  <ul>
         *  <li>container (String | Element): The DOM element whose contents to update
         *    as a result of the Ajax request. Can be a DOM node or a string that
         *    identifies a node's ID.</li>
         *  <li>url (String): The URL to fetch. When the _same-origin_ policy is in
         *    effect (as it is in most cases), `url` **must** be a relative URL or an
         *    absolute URL that starts with a slash (i.e., it must not begin with
         *    `http`).</li>
         *  <li>options (Object): Configuration for the request. See the
         *    [[Ajax section]] for more information.</li>
         *   </ul>
         *  <p>
         *  Creates a new [[Ajax.PeriodicalUpdater]].
         *  <p>  
         *  Periodically performs an AJAX request and updates a container's contents
         *  based on the response text. Offers a mechanism for "decay," which lets it   
         *  trigger at widening intervals while the response is unchanged.
         *  <p>
         *  This object addresses the common need of periodical update, which is used
         *  by all sorts of "polling" mechanisms (e.g. in an online chatroom or an
         *  online mail client).
         *  <p>
         *  The basic idea is to run a regular [[Ajax.Updater]] at
         *  regular intervals, monitoring changes in the response text if the `decay`
         *  option (see below) is active.
         *  <p>
         *  ##### Additional options
         *  <p>
         *  [[Ajax.PeriodicalUpdater]] features all the common options and callbacks
         *  (see the [[Ajax section]] for more information), plus those added by
         *  [[Ajax.Updater]]. It also provides two new options that deal with the
         *  original period, and its decay rate (how Rocket Scientist does that make
         *  us sound, uh?!).
         *  <p>
         *  <table>
         *  <thead>
         *    <tr>
         *      <th>Option</th>
         *      <th>Default</th>
         *      <th>Description</th>
         *    </tr>
         *  </thead>
         *  <tbody>
         *    <tr>
         *      <th><code>frequency</code></th>
         *      <td><code>2</code></td>
         *  <td>Okay, this is not a frequency (e.g 0.5Hz), but a period (i.e. a number of seconds).
         *  Don't kill me, I didn't write this one! This is the minimum interval at which AJAX
         *  requests are made. You don't want to make it too short (otherwise you may very well
         *  end up with multiple requests in parallel, if they take longer to process and return),
         *  but you technically can provide a number below one, e.g. 0.75 second.</td>
         *    </tr>
         *    <tr>
         *      <th><code>decay</code></th>
         *      <td>1</td>
         *  <td>This controls the rate at which the request interval grows when the response is
         *  unchanged. It is used as a multiplier on the current period (which starts at the original
         *  value of the <code>frequency</code> parameter). Every time a request returns an unchanged
         *  response text, the current period is multiplied by the decay. Therefore, the default
         *  value means regular requests (no change of interval). Values higher than one will
         *  yield growing intervals. Values below one are dangerous: the longer the response text
         *  stays the same, the more often you'll check, until the interval is so short your browser
         *  is left with no other choice than suicide. Note that, as soon as the response text
         *  <em>does</em> change, the current period resets to the original one.</td>
         *    </tr>
         *  </tbody>
         *  </table>
         *  <p>
         *  To better understand decay, here is a small sequence of calls from the
         *  following example:
         *  <code>
         *      new Ajax.PeriodicalUpdater('items', '/items', {
         *        method: 'get', frequency: 3, decay: 2
         *      });
         *  </code>
         *  <p>
         *  <table id="decayTable">
         *  <thead>
         *    <tr>
         *      <th>Call#</th>
         *      <th>When?</th>
         *      <th>Decay before</th>
         *      <th>Response changed?</th>
         *      <th>Decay after</th>
         *      <th>Next period</th>
         *      <th>Comments</th>
         *    </tr>
         *  </thead>
         *  <tbody>
         *    <tr>
         *      <td>1</td>
         *      <td>00:00</td>
         *      <td>2</td>
         *      <td>n/a</td>
         *      <td>1</td>
         *      <td>3</td>
         *  <td>Response is deemed changed, since there is no prior response to compare to!</td>
         *    </tr>
         *    <tr>
         *      <td>2</td>
         *      <td>00:03</td>
         *      <td>1</td>
         *      <td>yes</td>
         *      <td>1</td>
         *      <td>3</td>
         *  <td>Response did change again: we "reset" to 1, which was already the decay.</td>
         *    </tr>
         *    <tr>
         *      <td>3</td>
         *      <td>00:06</td>
         *      <td>1</td>
         *      <td>no</td>
         *      <td>2</td>
         *      <td>6</td>
         *  <td>Response didn't change: decay augments by the <code>decay</code> option factor:
         *  we're waiting longer now&#8230;</td>
         *    </tr>
         *    <tr>
         *      <td>4</td>
         *      <td>00:12</td>
         *      <td>2</td>
         *      <td>no</td>
         *      <td>4</td>
         *      <td>12</td>
         *      <td>Still no change, doubling again.</td>
         *    </tr>
         *    <tr>
         *      <td>5</td>
         *      <td>00:24</td>
         *      <td>4</td>
         *      <td>no</td>
         *      <td>8</td>
         *      <td>24</td>
         *      <td>Jesus, is this thing going to change or what?</td>
         *    </tr>
         *    <tr>
         *      <td>6</td>
         *      <td>00:48</td>
         *      <td>8</td>
         *      <td>yes</td>
         *      <td>1</td>
         *      <td>3</td>
         *  <td>Ah, finally! Resetting decay to 1, and therefore using the original period.</td>
         *    </tr>
         *  </tbody>
         *  </table>
         *  <p>
         *  ##### Disabling and re-enabling a [[Ajax.PeriodicalUpdater]]
         *  <p>
         *  You can pull the brake on a running [[Ajax.PeriodicalUpdater]] by simply
         *  calling its `stop` method. If you wish to re-enable it later, just call
         *  its `start` method. Both take no argument.
         *  <p>
         *  ##### Beware!  Not a specialization!
         *  <p>
         *  [[Ajax.PeriodicalUpdater]] is not a specialization of [[Ajax.Updater]],
         *  despite its name. When using it, do not expect to be able to use methods
         *  normally provided by [[Ajax.Request]] and "inherited" by [[Ajax.Updater]],
         *  such as `evalJSON` or `getHeader`. Also the `onComplete` callback is
         *  hijacked to be used for update management, so if you wish to be notified
         *  of every successful request, use `onSuccess` instead (beware: it will get
         *  called *before* the update is performed).
		 */


			//> public void setName(String... msg)
		setName: function(String){},
		
		//> String ; we initialize to the default account id
		account :"acc_def" ,

		/**
		 * get() is a wrapper for XMLHTTPRequest's GET method. 
		 * using get() you can avoid the use of XHR and shorten the server-side get requests
		 * <pre>
		 * get(url[, data][, headers][, type][, success(data, xhr)])
		 * </pre>
		 * 
		 *
		 */

		//> public void get(String url)
		//> public void get(String url,Object data)
		//> public void get(String url,Object data, Object headers)
		//> public void get(String url,Object data, Object headers, Function )
		get:function(url){}, 
		
	/**
		 * post() is a wrapper for XMLHTTPRequest's POST method. 
		 * using post() you can avoid the use of XHR and shorten the serverside POST requests
		 * 
		 * <pre>
		 * post(url[, data][, headers][, type][, success(data, xhr)])
		 * </pre>
		 * 
		 *
		 */

		//> public void post(String url);dfsfsfdsf
		//> public void post(String url,Object data)
		//> public void post(String url,String type, Object data)
		//> public void post(String url,String type,Object data, Object headers)
		//> public void post(String url,String type,Object data, Object headers, Function )
		post:function(url){}, 
		
	/**
		 * put() is a wrapper for XMLHTTPRequest's PUT method. 
		 * using put() you can avoid the use of XHR and shorten the server-side PUT requests
		 * 
		 * <pre>
		 * put(url[, data][, headers][, type][, success(data, xhr)])
		 * </pre>
		 * 
		 *
		 */

		//> public void put(String url);dfsfsfdsf
		//> public void put(String url,Object data)
		//> public void put(String url,String type, Object data)
		//> public void put(String url,String type,Object data, Object headers)
		//> public void put(String url,String type,Object data, Object headers, Function )
		put:function(url){}, 
		
	/**
		 * del() is a wrapper for XMLHTTPRequest's DELETE method. 
		 * using del() you can avoid the use of XHR and shorten the server-side DELETE requests
		 * <pre>
		 * del(url[, data][, headers][, type][, success(data, xhr)])
		 * </pre>
		 * 
		 *
		 */

		//> public void del(String url);dfsfsfdsf
		//> public void del(String url,Object data)
		//> public void del(String url,String type, Object data)
		//> public void del(String url,String type,Object data, Object headers)
		//> public void del(String url,String type,Object data, Object headers, Function )
		del:vjo.NEEDS_IMPL, 
		

//>public String? print(String str) 
print:vjo.NEEDS_IMPL,

//>public String? blur() 
//>public String? blur(String) 
blur:vjo.NEEDS_IMPL,

fxee:vjo.ctype()//<public
.props({
	 
})
.protos({
	/**
		 * Ready state change callback when async mode is used.
		 */
		//> public type::Function
		onreadystatechange: null	
})
.endType()

})

.props({
	 fx:vjo.ctype()//<public
.props({
	 off:false //< public boolean
})
.protos({
	/**
		 * Ready state change callback when async mode is used.
		 */
		//> public type::Function
		onreadystatechange: null	
})
.endType()

})
.protos({
	//> public void gets(String url)
	//> public void gets(String url,String data)
	//> public void gets(String url,String data,int port)
	gets: vjo.NEEDS_IMPL
	
})
.endType();