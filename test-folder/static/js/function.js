const genreButtons = document.querySelectorAll('.genre-btn');
const modeSelect = document.getElementById('mode-select');

genreButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('selected')) {
            button.classList.remove('selected');
        } else {
            button.classList.add('selected');
        }
    });
});

 // You can use the selectedGenre to make API calls, filter book lists, or trigger other actions.
  
