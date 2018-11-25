window.addEventListener('DOMContentLoaded', function() {

	// Получаем информацию для работы
	let products = document.querySelectorAll('.product'),
		buttons = document.getElementsByTagName('button'),
		open = document.getElementsByClassName('open') [0];

	// Функция создания корзины
	function createCart() {

		// Создание элементов корзины
		let cart = document.createElement('section'),
			field = document.createElement('div'),
			heading = document.createElement('h2'),
			close = document.createElement('button');

		// Добавление классов
		cart.classList.add('cart');
		field.classList.add('cart-field');
		close.classList.add('close');

		// Добавление текста 
		close.textContent = "Закрыть";
		heading.textContent = "В корзине:";

		// Добавление элементов на страницу
		document.body.appendChild(cart);
		cart.appendChild(heading);
		cart.appendChild(field);
		cart.appendChild(close);
	}

	createCart();

	let field = document.querySelector('.cart-field'),
		cart = document.querySelector('.cart'),
		close = document.querySelector('.close');

	for (let i = 0; i < buttons.length; i++) {
		// Вешаем обработчик событий
		buttons[i].addEventListener('click', function () {
			// Создание копии карточки с товаром
			let item = products[i].cloneNode(true),
				btn = item.querySelector('button');

			btn.remove();
			field.appendChild(item);
			products[i].remove();
		})
	}

	function openCart() {
		cart.style.display = 'block';
	};

	function closeCart() {
		cart.style.display = 'none';
	};

	open.addEventListener('click', openCart);
	close.addEventListener('click', closeCart);

});