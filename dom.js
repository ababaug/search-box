//all var from the DOM
const searchContainer = document.querySelector('.search-container');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');

searchButton.addEventListener('mouseover', function () {
    searchContainer.classList.toggle('active');
})

searchInput.addEventListener('mouseout', function () {
    searchContainer.classList.toggle('active');
})
