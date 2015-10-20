(function() {
	var session = window.sessionStorage;
	//var session = window.localStorage;
	var cartval = session.getItem('cart');
	var cartData = {};

	if (cartval) {
		cartData = JSON.parse(cartval);
	} else {
		cartData = {
				price : '112.34',
				desc : 'Ihone 6',
				id : '1234',
				qty : '1',
				email : '',
				name : ''
		};
	}

	document.getElementById('price').setAttribute("data-value",  cartData.price);
	document.getElementById('price').textContent = '$'+cartData.price;
	document.getElementById('qty').value = cartData.qty;
	document.getElementById('id').textContent = cartData.id;
	document.getElementById('desc').textContent = cartData.desc;
	document.getElementById('email').value = cartData.email;
	document.getElementById('name').value = cartData.name;
	calculateCart(cartData.price); 

	document.getElementById('nextButton').addEventListener('click',
			function() {
				var data = {
					"name" : document.getElementById('name').value,
					"email" : document.getElementById('email').value,
					"price" : document.getElementById('price').getAttribute(
							"data-value"),
					"qty" : document.getElementById('qty').value,
					"desc" : document.getElementById('desc').textContent,
					"id" : document.getElementById('id').textContent,
					"ext" : document.getElementById('ext').textContent
				};

				session.setItem("cart", JSON.stringify(data));
			//	window.location.href = "cart-review.html";

			});
	document.getElementById('qty').addEventListener('change', 
			function() {
				calculateCart(cartData.price);
			});
	
	window.addEventListener('storage', onStorageEvent, false);
	function onStorageEvent(storageEvent){
		console.log('storageEvent');
	    alert("storage event");
	}
	
})();




/*window.addEventListener('storage' , function(evt) {
	  alert('The modified key was '+evt.key);
	    alert('The original value was '+evt.oldValue);
	    alert('The new value is '+evt.newValue);
	    alert('The URL of the page that made the change was '+evt.url);
	    alert('The window where the change was made was '+evt.source);

}, false);*/

function calculateCart(price) {
//	var price = document.getElementById('price').getAttribute("data-value");
	var qty = document.getElementById('qty').value;
	document.getElementById('ext').innerHTML = '$'+ parseFloat(parseFloat(price).toFixed(2)
			* parseInt(qty)).toFixed(2);

}