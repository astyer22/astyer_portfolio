// index.js
// Hambuger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');

// Add a click event listener to the hamButton
hamButton.addEventListener('click', () => {
    // Toggle the 'open' class on the navigation element
    navigation.classList.toggle('open');

    // Toggle the 'open' class on the hamButton element
    hamButton.classList.toggle('open');

});
