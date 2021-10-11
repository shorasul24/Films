var elList = document.querySelector('.list');
var elForm = document.querySelector('.form');
var elSelect = document.querySelector('select');
let elBookmarks = document.querySelector('.bookmark__list');
let elModalList = document.querySelector('.modal__list');



function generateGenres(films) {
	var resultGaners = [];

	films.forEach((film) => {
		film.genres.forEach((genre) => {
			if (!resultGaners.includes(genre)) {
				resultGaners.push(genre);
			}
		});
	});
	for (var option of resultGaners) {
		var elOption = document.createElement('option');
		elOption.value = option;
		elOption.textContent = option;
		elSelect.appendChild(elOption);
	}
}

elForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	renderFilms(films, elList);
})

generateGenres(films);

function renderFilms(arr, node) {
	elList.innerHTML = null;
	arr.forEach((film) => {
		if (film.genres.includes(elSelect.value)) {
			var newLi = document.createElement('li');
			var newHeading = document.createElement('h3');
			var newImage = document.createElement('img');
			var newParagraph = document.createElement('p');
			var newTime = document.createElement('time');
			let bookMarkBtn = document.createElement('button');
			let modalBtn = document.createElement('button');


			newHeading.textContent = film.title;
			newParagraph.textContent =
				film.overview.split(' ').slice(0, 10).join(' ') + '...';
			bookMarkBtn.textContent = 'Bookmark'
			modalBtn.textContent = 'Modal'

			newLi.setAttribute('class', 'list__item film mb-3 text-center shadow');
			newHeading.setAttribute('class', 'film__heading ');
			newImage.setAttribute('class', 'film__image mb-1');
			newImage.setAttribute('src', film.poster);
			newImage.setAttribute('alt', film.title + ' poster');
			newImage.setAttribute('width', '300');
			newImage.setAttribute('height', '300');		
			bookMarkBtn.setAttribute('class', 'film__book btn mx-1 my-1');
			modalBtn.setAttribute('class', 'modal__btn, btn');
			bookMarkBtn.dataset.filmId = film.id;
			modalBtn.dataset.filmId = film.id;

			newLi.appendChild(newHeading);
			newLi.appendChild(newImage);
			newLi.appendChild(newParagraph);
			newLi.appendChild(newTime);
			newLi.appendChild(bookMarkBtn);
			newLi.appendChild(modalBtn);


			node.appendChild(newLi);
		}
	});
}


const bookMarks = []
function renderBookmarks(arr, node) {
	node.innerHTML = null;

	arr.forEach((film) => {
		const bookmarkLi = document.createElement('li');
		const bookmarksImage = document.createElement('img');
		const bookmarkHeading = document.createElement('h2');
		const bookmarkBtn = document.createElement('button');

		bookmarkHeading.textContent = film.title;

		bookmarkBtn.textContent = 'Delete';
		bookmarkBtn.dataset.filmId = film.id;

		bookmarksImage.setAttribute('class', 'film__image m-1');
		bookmarksImage.setAttribute('src', film.poster);
		bookmarksImage.setAttribute('alt', film.title + ' poster');
		bookmarksImage.setAttribute('width', '300');
		bookmarksImage.setAttribute('height', '300');

		bookmarkLi.setAttribute('class', 'list__item mb-3 text-center shadow');
		bookmarkHeading.setAttribute('class', 'bookmarks__heading');
		bookmarkBtn.setAttribute('class', 'bookmarks__btn--del btn')

		bookmarkLi.appendChild(bookmarksImage);
		bookmarkLi.appendChild(bookmarkHeading);
		bookmarkLi.appendChild(bookmarkBtn);

		node.appendChild(bookmarkLi);

	})

}


elBookmarks.addEventListener('click', (evt) =>{
	if(evt.target.matches('.bookmarks__btn--del')) {
		const filmId = evt.target.dataset.filmId;
		const foundBookmarks = bookMarks.find((film)=> film.id === filmId);

		bookMarks.splice(foundBookmarks, 1);
		renderBookmarks(bookMarks, elBookmarks)
	}
})


elList.addEventListener('click', (evt) => {
	const isBookMarkBtn = evt.target.matches('.film__book')
	if (isBookMarkBtn) {
		const filmId = evt.target.dataset.filmId;

		const foundFilm = films.find((row) => row.id === filmId);
		if (!bookMarks.includes(foundFilm)) {
			bookMarks.push(foundFilm)
		}
		renderBookmarks(bookMarks, elBookmarks);
	};

});



const modal = [];
function renderFilmModal (arr, node) {
	node.innerHTML = null;

	arr.forEach((film) => {
		const modalLi = document.createElement('li');
		const modalHeading = document.createElement('h2');
		const modalGanresList = document.createElement('ul');
		const modalText = document.createElement('p');
		const modalImge = document.createElement('img');
		const modalData = document.createElement('tome');
		const modalClose = document.createElement('button');

		modalHeading.textContent = film.title;
		modalText.textContent = film.overview;
		modalClose.innerHTML = '&times';
		modalData.textContent = normalizeDate(newGenreLi);

		for (let ganre of film.ganres) {
			let newGenreLi = document.querySelector('li');
			newGenreLi.setAttribute('class', 'genre__item');
			newGenreLi.textContent = ganre;
			modalGanresList.appendChild(newGenreLi);
		}

		modalLi.setAttribute('class', 'modal__item');
		modalImge.setAttribute('src', film.poster);
		modalImge.setAttribute('alt', film.title, 'poster');
		modalImge.setAttribute('clas', 'modal__imge');
		modalImge.setAttribute('width', '300');
		modalImge.setAttribute('height',' 300');
		modalGanresList.setAttribute('class', 'modalgener__list');
		modalData.setAttribute('class', 'modal__time');
		modalClose.setAttribute('class', 'modal__close');
		modalClose.dataset.filmId = film.id;

		modalLi.appendChild(modalHeading);
		modalLi.appendChild(modalImge);
		modalLi.appendChild(modalText);
		modalLi.appendChild(modalGanresList);
		modalLi.appendChild(modalData);
		modalLi.appendChild(modalClose);

		node.appendChild(modalLi);

	})
}
console.log(renderFilmModal);

renderFilms(films, elList);
