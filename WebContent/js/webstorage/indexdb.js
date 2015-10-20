(function() {
	var db = {
		name : 'productsDB',
		version : 1,
		instance : {},
		storeNames : {
			products : 'products'
		},
		defaultErrorHandler : function(e) {
			console.log(e);
		},
		setDefaultErrorHandler : function(request) {
			if ('onerror' in request) {
				request.onerror = this.defaultErrorHandler;
			}
			if ('onblocked' in request) {
				request.onblocked = this.defaultErrorHandler;
			}
		}
	};

	var date = new Date();
	var product = {
		name : 'Ihone622',
		price : 65000.00,
		insertDate : date,
		modifiedDate : date,
		colors : [ 'red', 'white', 'black' ]
	};
	if (window.indexedDB) {
		var openRequest = window.indexedDB.open(db.name, db.version);
		openRequest.onupgradeneeded = function(e) {
			var thisDB = e.target.result;
			if (thisDB.objectStoreNames.contains(db.storeNames.products)) {
				thisDB.createObjectStore(db.storeNames.products, {
					autoIncrement : true
				});
			}
			;
		};
		db.setDefaultErrorHandler(openRequest);
		openRequest.onsuccess = function(e) {
			db.instance = e.target.result;
			console.log("Success! ");
			addProductToIndexDB(db.instance);
		};

		function addProductToIndexDB(instance) {
			var transaction = instance.transaction([ db.storeNames.products ],
					'readwrite');
			var store = transaction.objectStore(db.storeNames.products);
				var addRequest=store.add(product); // create
			//var addRequest=store.put(product, 10); // update
			//var addRequest = store.get(11) //get
			//	var addRequest=store.delete(8); // delete
			db.setDefaultErrorHandler(addRequest);
			addRequest.onsuccess = function(e) {
				console.log(e.target.result);
				alert(JSON.stringify(e.target.result));
			};
		}

		openRequest.onerror = function(e) {
			console.log("Error");
			console.dir(e);
		};
	}
	;

})();