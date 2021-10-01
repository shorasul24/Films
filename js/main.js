var elList = document.querySelector('.list');
var elForm = document.querySelector('.form');
var elSelect = document.querySelector('select');



function generateGenres(films) {
	var resultGaners = [];

	films.forEach((film) => {
		film.genres.forEach((genre) => {
			if (!resultGaners.includes(genre)) {
				resultGaners.push(genre);
			}
		});
	});
	for ( var option of resultGaners) {
		var elOption = document.createElement('option');
		elOption.value = option;
		elOption.textContent = option;
		elSelect.appendChild(elOption);
	}
}

elForm.addEventListener('submit', (evt)=>{
	evt.preventDefault();
	renderFilms(films, elList);
})

generateGenres(films);

function renderFilms(arr, node) {
	elList.innerHTML = null;
	arr.forEach((film) => {
		if(film.genres.includes(elSelect.value)){
		var newLi = document.createElement('li');
		var newHeading = document.createElement('h3');
		var newImage = document.createElement('img');
		var newParagraph = document.createElement('p');
		var newTime = document.createElement('time');
		var newGenreList = document.createElement('ul');

		newHeading.textContent = film.title;
		newParagraph.textContent =
			film.overview.split(' ').slice(0, 10).join(' ') + '...';
		newTime.textContent = normalizeDate(film.release_date);

		for (var genre of film.genres) {
			var newGenreLi = document.createElement('li');
			newGenreLi.textContent = genre;
			newGenreList.appendChild(newGenreLi);
			newGenreLi.setAttribute('class', 'grub-li ')
		}

		newLi.setAttribute('class', 'list__item film mb-3 text-center shadow');
		newHeading.setAttribute('class', 'film__heading ');
		newImage.setAttribute('class', 'film__image mb-1');
		newImage.setAttribute('src', film.poster);
		newImage.setAttribute('alt', film.title + ' poster');

		newImage.setAttribute('width', '300');
		newImage.setAttribute('height', '300');

		newLi.appendChild(newHeading);
		newLi.appendChild(newImage);
		newLi.appendChild(newParagraph);
		newLi.appendChild(newTime);
		newLi.appendChild(newGenreList);

		node.appendChild(newLi);
	}
	});
}

renderFilms(films, elList);


