//Namespace Pattern
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
Ness.namespace('myApp.mvc').Singleton = (function() {
	// Observer patter
	var Observer = {
		observers : [],
		notify : function(names, methodtype) {
			this.observers[methodtype](names);
		},
		attach : function(callback) {
			this.observers.push(callback);
		}
	};
	console.log(Ness);
	var Model = {
		names : null,
		nameAdded : Object.create(Observer),
		nameRemoved : Object.create(Observer),
		add : function(name) {
			this.names.push(name);
			this.nameAdded.notify(this.names, 0);
		},
		remove : function(index) {
			this.names.splice(index, 1);
			this.nameRemoved.notify(this.names, 1);
		},
		listNames : function() {
			return this.names;
		}
	};

	var View = {
		elements : null,
		init : function(model, controller) {
			var self = this;
			model.nameAdded.attach(function(names) {
				self.renderDropdown(names);
			});
			model.nameRemoved.attach(function(names) {
				self.renderDropdown(names);
			});

			this.elements.addButton.addEventListener('click', function() {
				var name = window.prompt('Add a new user');
				console.log(model.names.indexOf(name));
				if (!name || (model.names.indexOf(name) != -1)) {
					alert('Already there or not a vaild name');
					return;
				}
				controller.addName(name);
			});

			this.elements.removeButton.addEventListener('click', function() {
				var index = self.elements.nameList.options.selectedIndex;
				if (index != -1) {
					controller.removeName(index);
				} else {
					alert('No name selected');
				}
			});
			this.renderDropdown(model.names);
		},

		renderDropdown : function(names) {
			var child = this.elements.nameList;
			while (child.firstChild) {
				child.removeChild(child.firstChild);
			}
			names.sort();
			for ( var i = 0; i < names.length; i++) {
				var option = document.createElement('option');
				option.value = names[i];
				option.text = names[i];
				this.elements.nameList.add(option);
			}
		}
	};

	var Controller = {
		model : null,
		addName : function(name) {
			this.model.add(name);
		},
		removeName : function(index) {
			this.model.remove(index);
		}

	};
	// closures
	return {
		Model : Model,
		View : View,
		Controller : Controller
	};

})();

window.onload = function() {
	var elements = {
		nameList : document.getElementById('nameList'),
		addButton : document.getElementById('addButton'),
		removeButton : document.getElementById('removeButton')
	};
	var rootObject = Ness.namespace('myApp.mvc').Singleton;
	var view = Object.create(rootObject.View);
	view.elements = elements;
	var model = Object.create(rootObject.Model);
	model.names = [ 'A', 'B', 'C', 'D', 'E' ];
	var controller = Object.create(rootObject.Controller);
	controller.model = model;
	view.init(model, controller);
};
