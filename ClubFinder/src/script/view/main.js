import '../component/nav-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('#searchElement');
  const buttonSearchElement = document.querySelector('#searchButtonElement');
  const cocktailListElement = document.querySelector('#cocktailList');

  const onButtonSearchClicked = () => {
    DataSource.searchCocktail(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
  };

  const renderResult = (results) => {
    cocktailListElement.innerHTML = '';
    results.forEach(function (cocktail) {
      const {name, fanArt, description} = cocktail;
      const cocktailElement = document.createElement('div');
      cocktailElement.setAttribute('class', 'cocktail');

      cocktailElement.innerHTML = `
      <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
        <div class="club-info">
          <h2>${name}</h2>
          <p>${description}</p>
        </div>
      `;
      cocktailListElement.appendChild(cocktailElement);
    });
  };

  const fallbackResult = (message) => {
    cocktailListElement.innerHTML = '';
    cocktailListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;

  buttonSearchElement.addEventListener('click', onButtonSearchClicked);
  };
};

export default main;