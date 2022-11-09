const pokemonsToList = document.getElementById("listPokemons");
const buttonsLoaders = document.getElementById("buttonsLoaders");

const maxRecords = 151;
const limit = 10;
let offset = 0;

function pokemonToLiConverter(pokemon) {
  return `<li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
							<ol class="types">${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}</ol>
								<img src="${pokemon.photo}" alt="${pokemon.name}">
						</div>
					</li>`;
}

function pokemonItensLoader(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(pokemonToLiConverter).join("");
    pokemonsToList.innerHTML += newHtml;
  });
}

pokemonItensLoader(offset, limit);

buttonsLoaders.addEventListener("click", () => {
  offset += limit;
  const nextPageQtyRecords = offset + limit;

  if (nextPageQtyRecords >= maxRecords) {
    const newLimit = maxRecords - offset;
    pokemonItensLoader(offset, newLimit);

    buttonsLoaders.parentElement.removeChild(buttonsLoaders);
  } else {
    pokemonItensLoader(offset, limit);
  }
});
