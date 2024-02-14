const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.elements['name'].value;
        const email = form.elements['email'].value;

        if (name && email) {
            // Save form data to local storage
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);

            // Clear form fields
            form.reset();

            message.textContent = 'Form submitted successfully!';
        } else {
            message.textContent = 'Please fill out all fields.';
        }
    });
});
