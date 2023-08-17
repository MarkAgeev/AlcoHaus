const form = document.querySelector('.form');
const email = document.querySelector('.email');
form.addEventListener('submit', (e) => {
	e.preventDefault()
	if(emailTest(email)) {
		alert('Неправильно введен email');
	}
})
function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}