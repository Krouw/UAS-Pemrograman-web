// This file contains JavaScript code that adds interactivity to the web application.

document.addEventListener('DOMContentLoaded', function() {
    loadAttractions();
    setupContactForm();
});

function loadAttractions() {
    fetch('./data/attractions.json')
        .then(response => response.json())
        .then(data => {
            const attractionsContainer = document.getElementById('attractions');
            data.forEach(attraction => {
                const attractionElement = document.createElement('div');
                attractionElement.classList.add('attraction');
                attractionElement.innerHTML = `
                    <h3>${attraction.name}</h3>
                    <img src="${attraction.image}" alt="${attraction.name}">
                    <p>${attraction.description}</p>
                    <a href="${attraction.link}" target="_blank">Learn more</a>
                `;
                attractionsContainer.appendChild(attractionElement);
            });
        })
        .catch(error => console.error('Error loading attractions:', error));
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log('Form submitted:', data);
        alert('Thank you for your message!');
        form.reset();
    });
}