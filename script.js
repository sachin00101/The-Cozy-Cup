// Scroll to Menu when Explore Button is clicked
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// Contact Form Submit Handler
function handleSubmit(event) {
    event.preventDefault();
    
    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Display confirmation message
    document.getElementById('formMessage').innerText = `Thank you, ${name}! We have received your message and will respond to ${email} shortly!!.`;

    // Reset form
    event.target.reset();
}
