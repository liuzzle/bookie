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
  
modeSelect.addEventListener('change', () => {
    const selectedMode = modeSelect.value;

    if (selectedMode === 'profile') {
        // Add the 'By Profile' option to the dropdown
        const profileOption = document.createElement('option');
        profileOption.value = 'profile';
        profileOption.textContent = 'By Profile';
        modeSelect.appendChild(profileOption);
    } else {
        // Remove the 'By Profile' option if it exists
        const profileOption = modeSelect.querySelector('option[value="profile"]');
        if (profileOption) {
            profileOption.remove();
        }
    }
});

