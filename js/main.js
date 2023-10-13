const addPokemonBtn = document.querySelector(".add-pokemon-btn");
const addPokemonModal = document.getElementById("add-pokemon-modal");
const addDetailsBtn = document.getElementById("add-details-btn");
const addDetailsModal = document.getElementById("add-details-modal");

addPokemonBtn.addEventListener("click", function() {
    addPokemonModal.classList.add("active");
});
