function debounce(func, delay) {
    let timer;
    return function(…args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}
const searchInput = document.getElementById('search');

function handleSearch(event) {
    console.log('Searching for:', event.target.value);
    // API call simulation
}
const debouncedSearch = debounce(handleSearch, 300);
searchInput.addEventListener('input', debouncedSearch);
