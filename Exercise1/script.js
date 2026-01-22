let form = document.getElementById('registrationForm');
let roleSelect = document.getElementById('role');
let skillsSection = document.getElementById('skillsSection');
let feedback = document.getElementById('feedback');


roleSelect.addEventListener('change', () => {
    if (roleSelect.value === 'Teacher' || roleSelect.value === 'Student') {
        skillsSection.classList.remove('hidden');
    } else {
        skillsSection.classList.add('hidden');
    }
});


function setStatus(element, isValid) {
    if (isValid) {
        element.classList.remove('invalid-input'); 
    } else {
        element.classList.add('invalid-input');
    }
}


form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let isValid = true;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirmPassword').value;
    const role = roleSelect.value;

   
    if (!email.endsWith('.com') && !email.endsWith('.edu')) {
        alert("Email must be a .com or .edu domain");
        setStatus(document.getElementById('email'), false);
        isValid = false;
    }

    
    if (role === 'Admin') {
        
        if (password.length < 8) {
            alert("Admins require at least 8 characters!");
            isValid = false;
        }
    } else {
        
        if (password.length < 5) {
            alert("Password too short!");
            isValid = false;
        }
    }

    
    if (password !== confirmPass) {
        alert("Passwords do not match!");
        setStatus(document.getElementById('confirmPassword'), false);
        isValid = false;
    }

    
    if (isValid) {
        feedback.innerText = "Registration Successful for " + role;
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Please fix the highlighted errors.";
        feedback.style.color = "red";
    }
});