$(function() {
var urlBase = location.href.substr(0, location.href.indexOf('/madhukacommoncontainer/'));
	$.ajax({
			url: './js/gadgetCollections.json',
			dataType: 'json',
			success: function(data) {
			  $.each(data.collections, function(i,data) {
				 var optionVal = [];
				 $.each(data.apps, function(i,data) {
				   if (data.url.indexOf('http') < 0 && data.url.indexOf('/') == 0) {
					 optionVal.push(urlBase + data.url);
				   }else {
					 optionVal.push(data.url);
				   }
				 });
			     $('#gadgetCollection').append('<option value="' + optionVal.toString() + '">' + data.name + '</option>');
			   });
			}
	});
	var curId = 0;
          
//create a gadget with navigation tool bar header enabling gadget collapse, expand, remove, navigate to view actions.
    window.buildGadget = function(gadgetURL,id){
            var elem = document.getElementById('gadget-body-'+id);       
   var gadget = gadgetURL;  
   var container = new osapi.container.Container(); 
   var site = container.newGadgetSite(elem); 
   var renderParams = { view: 'home' }; 
   
   container.preloadGadget(gadget, function(result) {
		    if(!result[gadget].error) {			
			container.navigateGadget(site, gadget, {}, renderParams);
		$('#gadget-header-'+id).append('<h5>'+result[gadget]['modulePrefs'].title+'</h5>');
		//	document.getElementById('gadget-header-'+id).innerHTML=;
			var obj =result[gadget]['userPrefs'];
			var gadgetForm = Object.gadgetForm(obj,curId );
			console.log(gadgetForm);
			if(gadgetForm !='<div id="formdiv-gadget-site-1"><form id="gadget-form-1"></form></div> '){
			$('#gadget-header-'+id).append('<br>'+gadgetForm);}
		  }
		});
    };
	
	    window.buildGadgetTemplet = function(){
		 var gadgetdiv = document.createElement('div'); gadgetdiv.setAttribute('id', 'gadget-'+curId); 
				var gadgetHeaderdiv = document.createElement('div'); gadgetHeaderdiv.setAttribute('id', 'gadget-body-'+curId); 
				var gadgetBoadydiv = document.createElement('div'); gadgetBoadydiv.setAttribute('id', 'gadget-header-'+curId); 
var elem = document.getElementById("gadgetArea");   
elem.appendChild(gadgetdiv);
gadgetdiv.appendChild(gadgetBoadydiv);  
gadgetdiv.appendChild(gadgetHeaderdiv);

 };
	
//  Load the select collection of gadgets and render them the gadget test area
	$('#addGadgets').click(function() {
var testGadgets = $('#gadgetCollection').val().split(',');
for(var i=0; i<testGadgets.length; i++) {
		window.buildGadgetTemplet();
		window.buildGadget(testGadgets[i],curId);
		}
		curId++;		
	});
	
	// preloadAndAddGadget	
		$('#preloadAndAddGadget').click(function() {
		console.log($('#gadgetUrl').val());window.buildGadgetTemplet();
		window.buildGadget($('#gadgetUrl').val(),curId);
		var gadgetForm = Object.gadgetForm(obj,curId );
		curId++;		
	});
	
	Object.gadgetForm = function(obj,curId ) {
    var size = 0, key;
	var out = "<div id=\"formdiv-gadget-site-"+ curId +"\"><form id=\"gadget-form-"+ curId +"\">";

    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
		console.log(size+key);
		var x =obj[key];
		console.log(x);
		console.log(x.dataType);		
		console.log(x.defaultValue);
		console.log(x.displayName);
		if(x.dataType =="STRING"){
		out += x.displayName+": <input type=\"text\" name=\""+x.displayName+"\" value=\""+ x.defaultValue+"\"><br>";}
		else if(x.dataType =="BOOL"){
		var chk="checked";
		if(!x.defaultValue){var chk="unchecked";}
		out += "<input type=\"checkbox\" name=\""+x.displayName+"\" value=\""+x.defaultValue+"\" checked=\""+chk+"\">"+x.displayName+"<br>" 
    }else if(x.dataType =="ENUM"){
	console.log(x.orderedEnumValues.length)
	out += x.displayName+"<select>";
	for(var i=0;i<x.orderedEnumValues.length;i++){
	console.log(x.orderedEnumValues[i]);
	out += "<option value=\""+x.orderedEnumValues[i].value+"\""
	console.log(x.orderedEnumValues[i].value +" : "+x.defaultValue);
	console.log(x.orderedEnumValues[i].value == x.defaultValue);
	if(x.orderedEnumValues[i].value==x.defaultValue){
	out +="selected=\"true\" >";}else{
	out +=">";
	}
	out+=x.orderedEnumValues[i].displayValue+"</option>"
	}
	out += "</select><br>";
	
	/*out += "x.displayName<select>";
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
*/
	}
	}
	out += '</form></div>' 
	console.log(out);
    return out;
};

});
		