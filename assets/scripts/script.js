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

// web dev page
// Button for web pages

function handleButtonClick(event) {
    const url = event.currentTarget.getAttribute('data-href');
    if (url) {
        window.location.href = url;
    }
}

// Add event listeners to all buttons with the class 'web-common-btn'
document.querySelectorAll('.web-common-btn').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});