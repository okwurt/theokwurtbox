let pokemonDropdown = document.getElementById("pokemon-dropdown");
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        const option = document.createElement("option");
        option.value = pokemon.name;
        option.text = pokemon.name;
        pokemonDropdown.appendChild(option);
}

let natureDropdown = document.getElementById("nature-dropdown");
    for (let i = 0; i < natures.length; i++) {
        const nature = natures[i];
        const option = document.createElement("option");
        option.value = nature.name;
        option.text = nature.name;
        natureDropdown.appendChild(option);
}