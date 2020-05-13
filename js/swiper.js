let hiddenEl = document.querySelectorAll('.brand-logo__el--click');
for (const el of hiddenEl) {
	el.style.display = 'none'
}
let linkHidden = document.querySelector('.brand-logo__link-block--up');
linkHidden.style.display = 'none';

let linkShow = document.querySelector('.brand-logo__link--down');
linkShow.addEventListener('click', (ev) => {
	ev.preventDefault();
	for (const el of hiddenEl) {
		el.style.display = 'flex';
		el.style.justifyContent = 'space-between';
		el.style.marginTop = '-5px';
	}

	linkShow.style.display = 'none';
	linkHidden.style.display = 'block';
});


linkHidden.addEventListener('click', (ev) => {
	ev.preventDefault();
	linkHidden.style.display = 'none';
	linkShow.style.display = 'block';
	for (const el of hiddenEl) {
		el.style.display = 'none';
	}
})
// Меняю местами Dom-элементы при 1120px и отключаю Sony

let imgBosch = document.querySelector('.brand-logo__img--bosch');
let imgHp = document.querySelector('.brand-logo__img--hp');
let imgAcer = document.querySelector('.brand-logo__img--acer');
let imgView = document.querySelector('.brand-logo__img--viewSonic');
let imgSonyDisabled = document.querySelector('.brand-logo__el-click-disabled');
if (matchMedia) {
	const mq = window.matchMedia('(min-width: 1120px)');
	mq.addListener(screenTest);
	screenTest(mq);
}
function screenTest(mq) {
	if (mq.matches) {
		imgBosch.src = '../img_1.5/viewsonic.svg';
		imgHp.src = '../img_1.5/bosch.svg';
		imgAcer.src = '../img_1.5/hp.svg';
		imgView.src = '../img_1.5/acer.svg';

	}
}