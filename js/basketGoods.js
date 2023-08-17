const cartOut = document.querySelector('.cart-out')
if (localStorage.getItem('cart')) {
	const cart = JSON.parse(localStorage.getItem('cart'))
	let shopCart = new Cart(cart)
	cartOut.innerHTML = '';
	cartOut.append(shopCart.render());
	cartOut.addEventListener('click', event => {
		let target = event.target;
		if (target.classList.contains('plus')) {
			shopCart.goodsPlus(target.dataset['articul']);
			cartOut.innerHTML = '';
			cartOut.append(shopCart.render())
			localStorage.setItem('cart', JSON.stringify(shopCart.items));
			return true;
		}
		else if (target.classList.contains('minus')) {
			shopCart.goodsMinus(target.dataset['articul']);
			cartOut.innerHTML = '';
			cartOut.append(shopCart.render());
			localStorage.setItem('cart', JSON.stringify(shopCart.items));
			return true;
		}
		else if (target.classList.contains('delete')) {
			shopCart.goodsDelete(target.dataset['articul']);
			shopCart.numMinus(JSON.parse(localStorage.getItem('num')))
			cartOut.innerHTML = '';
			cartOut.append(shopCart.render())
			localStorage.setItem('cart', JSON.stringify(shopCart.items));
			return true;
		}
	});
}

