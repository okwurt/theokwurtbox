document.addEventListener("DOMContentLoaded", function() {

    // Get references to elements
    const collectionModal = document.getElementById("collection-modal");
    const pokemonModal = document.getElementById("pokemon-modal");
    const collectionsList = document.querySelector(".collections");
    const pokemonForm = document.getElementById("pokemon-form");

     // Check which element is null
     if (!collectionModal) console.error("collectionModal is null");
     if (!pokemonModal) console.error("pokemonModal is null");
     if (!collectionsList) console.error("collectionsList is null");
     if (!pokemonForm) console.error("pokemonForm is null");
 

    let currentCollection = null; // Variable to store the currently selected collection

    // Data structure to represent collections
    let collectionsData = {
        "origin-dex": [],
        "shiny-living-dex": []
    };

    // Function to close a modal
    function closeModal(modal) {
        modal.classList.remove("active");
    }

    // Event listener to open the Pokémon modal for a specific collection
    collectionsList.addEventListener("click", (event) => {
        if (event.target.classList.contains("add-pokemon-btn")) {
            currentCollection = event.target.parentElement.getAttribute("data-collection");
            pokemonModal.classList.add("active");
        }
    });

    // Handle Pokémon form submission
    pokemonForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const pokemon = {
            name: event.target["pokemon-name"].value,
            image: event.target["pokemon-image"].value,
            type: event.target["pokemon-type"].value
        };

        addPokemonToCollection(currentCollection, pokemon);
        closeModal(pokemonModal);
    });

    function addPokemonToCollection(collectionId, pokemon) {
        collectionsData[collectionId].push(pokemon);
        renderCollection(collectionId);
    }

    function renderCollection(collectionId) {
        const collectionElement = document.querySelector(`.collection[data-collection="${collectionId}"] .pokemon-container`);
        collectionElement.innerHTML = ''; // Clear current content

        collectionsData[collectionId].forEach(pokemon => {
            const pokemonCard = createPokemonCard(pokemon);
            collectionElement.appendChild(pokemonCard);
        });
    }

    function createPokemonCard(pokemon) {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");

        const img = document.createElement("img");
        img.src = pokemon.image;
        img.alt = pokemon.name;
        pokemonCard.appendChild(img);

        const name = document.createElement("span");
        name.textContent = pokemon.name;
        pokemonCard.appendChild(name);

        const type = document.createElement("span");
        type.textContent = `Type: ${pokemon.type}`;
        pokemonCard.appendChild(type);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            const index = collectionsData[currentCollection].indexOf(pokemon);
            collectionsData[currentCollection].splice(index, 1);
            renderCollection(currentCollection);
        });
        pokemonCard.appendChild(deleteBtn);

        return pokemonCard;
    }

    // Close modals when clicking outside the content area
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".modal-content") && !
        event.target.closest(".add-pokemon-btn")) {
            closeModal(collectionModal);
            closeModal(pokemonModal);
        }
    });

});
