// Simple JavaScript for interactivity

function showMessage() {
    const messageDiv = document.getElementById('message');
    const messages = [
        "🎉 Hello from JavaScript!",
        "✨ You clicked the button!",
        "🌟 Welcome to web development!",
        "🚀 Keep coding and learning!",
        "💻 This is your first interactive website!"
    ];
    
    // Get a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Show the message
    messageDiv.textContent = randomMessage;
    messageDiv.classList.remove('hidden');
    
    // Hide the message after 3 seconds
    setTimeout(() => {
        messageDiv.classList.add('hidden');
    }, 3000);
}

// Add some console logging for developers
console.log("Hello World website loaded successfully! 🎯");
console.log("Check out the source code to see how this works!");

// Add a simple animation when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});
