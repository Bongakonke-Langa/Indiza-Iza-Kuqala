// Create a title element
const title = document.createElement('h1');
title.textContent = 'Welcome to Our Website';

// Create a button element
const button = document.createElement('button');
button.textContent = 'Click Me';

// Add an event listener to the button
button.addEventListener('click', () => {
    alert('Button was clicked!');
});

// Append elements to the body
document.body.appendChild(title);
document.body.appendChild(button);