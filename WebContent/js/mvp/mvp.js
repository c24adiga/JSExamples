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
Ness.namespace('myApp.mvp').MVPApp = (function() {
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
		
	};

	var Presenter = {
		model : null,
		view:null,
		index:0,
		init : function() {
			var self = this;
			this.view.elements.addButton.addEventListener('click', function() {
				self.addName(name);
			});

			this.view.elements.removeButton.addEventListener('click', function() {
				self.removeName();
			});
			
			this.view.elements.nameList.addEventListener('change', function(e) {
				self.index = e.target.options.selectedIndex;
			});
			this.model.nameAdded.attach(function(names) {
				self.renderDropdown(names);
			});
			this.model.nameRemoved.attach(function(names) {
				self.renderDropdown(names);
			});
			this.renderDropdown(this.model.names);
		},

		addName : function(name) {
			var name = window.prompt('Add a new user');
			if (!name) {
				return;
			}
			if ((this.model.names.indexOf(name) != -1)) {
				alert('Already there or not a vaild name');
				return;
			}
			this.model.add(name);
			this.index = 0;
		},
		removeName : function() {
			if (this.index > -1) {
				this.model.remove(this.index);
				this.index = 0;
			} else {
				alert('No name selected');
			}
		},
		renderDropdown : function(names) {
			var child = this.view.elements.nameList;
			while (child.firstChild) {
				child.removeChild(child.firstChild);
			}
			names.sort();
			for ( var i = 0; i < names.length; i++) {
				var option = document.createElement('option');
				option.value = names[i];
				option.text = names[i];
				this.view.elements.nameList.add(option);
			}
		}
	};
	// closures
	return {
		Model : Model,
		View : View,
		Presenter : Presenter
	};

})();

window.onload = function() {
	var elements = {
		nameList : document.getElementById('nameList'),
		addButton : document.getElementById('addButton'),
		removeButton : document.getElementById('removeButton')
	};
	var rootObject = Ness.namespace('myApp.mvp').MVPApp;
	var view = Object.create(rootObject.View);
	view.elements = elements;
	var model = Object.create(rootObject.Model);
	model.names = [ 'A', 'B', 'C', 'D', 'E' ];
	var presenter = Object.create(rootObject.Presenter);
	presenter.model = model;
	presenter.view = view;
	presenter.init();
};
