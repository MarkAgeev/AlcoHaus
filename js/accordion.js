const texts = document.querySelectorAll('.footer__right-wrapper__column__text');
const links = document.querySelectorAll('.footer__right-wrapper__column__links');
texts.forEach((item, idx) => {
	item.onclick = () => {
		links[idx].classList.toggle('visible');
	}
})