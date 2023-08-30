// Get references to elements
const addCollectionBtn = document.getElementById("add-collection-btn");
const collectionModal = document.getElementById("collection-modal");
const pokemonModal = document.getElementById("pokemon-modal");
const collectionsList = document.querySelector(".collections");

// Event listener to open the collection modal
addCollectionBtn.addEventListener("click", () => {
    collectionModal.classList.add("active");
});

// Event listener to open the Pokémon modal
collectionsList.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-pokemon-btn")) {
        pokemonModal.classList.add("active");
        // You can access the collection ID from the clicked button's data attribute
        const collectionId = event.target.dataset.collectionId;
        // Use the collectionId to populate the Pokémon modal
    }
});

// Implement the logic for handling form submissions, updating collections, etc.
// ...

// Function to close a modal
function closeModal(modal) {
    modal.classList.remove("active");
}

// Close modals when clicking outside the content area
document.addEventListener("click", (event) => {
    if (!event.target.closest(".modal-content") && event.target !== addCollectionBtn) {
        closeModal(collectionModal);
        closeModal(pokemonModal);
    }
});
