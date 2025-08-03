document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
    
    // Password strength indicator (for signup page)
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const strengthBars = document.querySelectorAll('.strength-bar');
            const strengthText = document.querySelector('.strength-text');
            const password = this.value;
            let strength = 0;
            
            // Reset
            strengthBars.forEach(bar => {
                bar.style.backgroundColor = '#e9ecef';
            });
            
            // Check password strength
            if (password.length >= 8) strength++;
            if (password.match(/[A-Z]/)) strength++;
            if (password.match(/[0-9]/)) strength++;
            if (password.match(/[^A-Za-z0-9]/)) strength++;
            
            // Update UI
            for (let i = 0; i < strength; i++) {
                if (i === 0) {
                    strengthBars[i].style.backgroundColor = '#ff4d4f'; // Red
                    strengthText.textContent = 'Weak';
                } else if (i === 1) {
                    strengthBars[i].style.backgroundColor = '#faad14'; // Orange
                    strengthText.textContent = 'Moderate';
                } else if (i >= 2) {
                    strengthBars[i].style.backgroundColor = '#52c41a'; // Green
                    strengthText.textContent = 'Strong';
                }
            }
            
            if (password.length === 0) {
                strengthText.textContent = 'Password strength';
            }
        });
    }
    
    // Form submission
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login functionality would be implemented here');
            // You would typically send data to server here
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Signup functionality would be implemented here');
            // You would typically send data to server here
        });
    }
});