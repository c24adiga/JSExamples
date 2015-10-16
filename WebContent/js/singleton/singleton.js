var Ness = {
	namespace : function(name) {
		var names = name.split('.');
		var ns = this;
		for ( var i = 0; i < names.length; i++) {
			ns[names[i]] = ns[names[i]] || {};
			ns = ns[names[i]];
		}
		return ns;
	}
};
 
Ness.namespace('myApp.singleton').Singleton = (function() {
	var myObjectInstance = undefined;
	var MyObject = function(){
		console.log('MyObject function created');
	};
	return {
		getInstance : function() {
			if(!myObjectInstance) {
				myObjectInstance = new MyObject();
			}
			return myObjectInstance;
		}
	};
	
})();

window.onload = function() {
    var instance1 = Ness.namespace('myApp.singleton').Singleton.getInstance();
    var instance2 = Ness.namespace('myApp.singleton').Singleton.getInstance();
 
    alert("Same instance? " + (instance1 === instance2));  
};