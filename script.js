document.addEventListener('DOMContentLoaded', function() {
    // Login button functionality
    document.getElementById('loginBtn').addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if(username && password) {
            alert('Login successful!');
            // Here you would typically send the data to a server
        } else {
            alert('Please enter both username and password');
        }
    });
    
    // Social login buttons
    const socialButtons = document.querySelectorAll('.social-icon');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.classList[1];
            alert(`Login with ${platform} initiated`);
            // Here you would implement OAuth or other social login
        });
    });
    
    // Add enter key support for form submission
    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('loginBtn').click();
        }
    });
});