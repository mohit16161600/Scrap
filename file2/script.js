document.addEventListener('DOMContentLoaded', function() {
    // Show popup after 5 seconds
    setTimeout(function() {
        document.getElementById('productPopup').style.display = 'block';
    }, 5000);
    
    // Close popup when clicking the X button
    document.querySelector('.close-btn').addEventListener('click', function() {
        document.getElementById('productPopup').style.display = 'none';
    });
    
    // Close popup when clicking outside the popup content
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('productPopup')) {
            document.getElementById('productPopup').style.display = 'none';
        }
    });
    
    // Connect with form button functionality
    document.getElementById('connectWithForm').addEventListener('click', function() {
        document.getElementById('productPopup').style.display = 'none';
        // Scroll to the form
        document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
        // Focus on the first input field
        document.getElementById('name').focus();
    });
});
