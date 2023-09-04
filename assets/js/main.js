const pokemonList = document.getElementById('pokemon-list');
const modal = document.getElementById("modal");
const pokemonModal = document.getElementById("modal-pokemon");
const pokemonInfoModal = document.getElementById("modal-pokemonInfo");
const limit = 15;
var offset = 0;

function loadPage(offset, limit) {
  pokeApi.getPokemons(offset, limit)
  .then((pokemons = []) => {
    const newPokemonCard = pokemons.map((pokemon) => {
      
      return `
      <li class="pokemon__card ${pokemon.type}" data-id='${pokemon.number}'>
        <span class="pokemon__card__number">#${formattedNumber(`${pokemon.number}`)}</span>
        <span class="pokemon__card__name">${pokemon.name}</span>
        <div class="pokemon__card__detail">
        <ol class="pokemon__detail__list">
          ${pokemon.types.map((type) => `<li class="pokemon__detail__type">${type}</li>`).join('')}
        </ol>
        </div>
        <img class="pokemon__card__img" src="${pokemon.photo}" alt="${pokemon.name}">
        <button class="pokemon__card__openModal">See more</button>
      </li>
    `;
  }).join(''); // it maps the results of the url (the pokemons), converts them to an array, then join them
    pokemonList.innerHTML = newPokemonCard;

    const openModalCard = document.querySelectorAll(".pokemon__card__openModal");
    openModalCard.forEach(button => {
      button.addEventListener("click", () => {
        const pokemonId = button.parentElement.getAttribute("data-id");
        const pokemon = pokemons.find(p => p.number == pokemonId);
        
        if(pokemon) {
          modal.classList.add(`${pokemon.type}`)
          pokemonModal.innerHTML = `
          <span class="modal__pokemon__name">${pokemon.name}</span>
            <span class="modal__pokemon__number">#${formattedNumber(`${pokemon.number}`)}</span>
            <div class="modal__pokemon__detail">
              <ol class="detail__list">
                ${pokemon.types.map((type) => `<li class="detail__type">${type}</li>`).join('')}
              </ol>
            </div>
            <img src="${pokemon.photo}" alt="${pokemon.name}" class="modal__pokemon__img">
          `
          pokemonInfoModal.innerHTML = `
          <span class="modal__info__title">About</span>
          <ul class="modal__info__list">
            <li class="modal__info__item">
              <span class="info__title">Abilities</span>
              <ol>
                ${pokemon.abilities.map((ability) => `<li class="info__item">${ability}`).join('  |')}
              </ol>
            </li>
            <li class="modal__info__item">
              <span class="info__title">Habitat</span>
              <ol>
                <li class="info__item">${pokemon.habitat}</li>
              </ol>
            </li>
            <li class="modal__info__item">
              <span class="info__title">Shape</span>
              <ol>
                <li class="info__item">${pokemon.shape}</li>
              </ol>
            </li>
            <li class="modal__info__item">
              <span class="info__title">Egg Groups</span>
              <ol>
              ${pokemon.eggGroups.map((eggGroup) => `<li class="info__item">${eggGroup}`).join('  |')}
              </ol>
            </li>
          </ul>
          `
          scrollPage()
          abrirModal()
        }
      })
    })
  })
  .catch((error) => console.error('erro:', error))
}

loadPage(offset, limit)
