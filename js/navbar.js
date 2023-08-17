const menu = document.querySelector('.menu');
const menuPopUp = document.querySelector('.menu__popUp');
const main = document.querySelector('.main');
const itemName = document.querySelectorAll('.item-name');
menu.onclick = () => {
	menuPopUp.classList.toggle('popUp')
	document.body.classList.toggle('noscroll')
}
itemName.forEach((item) => {
	item.onclick = () => {
		menuPopUp.classList.remove('popUp')
		document.body.classList.remove('noscroll')
	}
})


