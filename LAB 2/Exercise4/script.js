// script.js

// 1. Select DOM elements
const form = document.getElementById('registrationForm');
const tableBody = document.getElementById('userTableBody');
const clearBtn = document.getElementById('clearAllBtn');
const noDataMsg = document.getElementById('noDataMessage');

// 2. Constants
const STORAGE_KEY = 'user_management_data';

// 3. Event Listeners
document.addEventListener('DOMContentLoaded', loadUsers);
form.addEventListener('submit', handleRegistration);
clearBtn.addEventListener('click', clearAllUsers);
// Event delegation for dynamic delete buttons
tableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete')) {
        deleteUser(e.target.dataset.email);
    }
});

// --- CORE FUNCTIONS ---

// Function to fetch users from LocalStorage
function getUsersFromStorage() {
    const users = localStorage.getItem(STORAGE_KEY);
    return users ? JSON.parse(users) : [];
}

// Function to handle form submission
function handleRegistration(e) {
    e.preventDefault(); // Prevent page reload

    // A. Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const password = document.getElementById('password').value.trim();

    // B. Run Validations
    if (!validateInputs(mobile, password)) return;

    // C. Check for Duplicate Email
    const users = getUsersFromStorage();
    const isDuplicate = users.some(user => user.email === email);

    if (isDuplicate) {
        alert('Error: This email is already registered!');
        return;
    }

    // D. Create User Object
    const newUser = {
        name: name,
        email: email,
        mobile: mobile,
        password: password
    };

    // E. Save to Storage
    users.push(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

    // F. UI Updates
    alert('User Registered Successfully!');
    form.reset();
    renderTable();
}

// Function to validate specific logic
function validateInputs(mobile, password) {
    // Mobile Validation (10 digits)
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
        alert('Validation Error: Mobile number must be exactly 10 digits.');
        return false;
    }

    // Password Validation (Min 6 chars)
    if (password.length < 6) {
        alert('Validation Error: Password must be at least 6 characters long.');
        return false;
    }

    return true;
}

// Function to render the table
function renderTable() {
    const users = getUsersFromStorage();
    tableBody.innerHTML = ''; // Clear current table

    if (users.length === 0) {
        noDataMsg.style.display = 'block';
        return;
    }
    
    noDataMsg.style.display = 'none';

    users.forEach(user => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.mobile}</td>
            <td>${user.password}</td> 
            <td>
                <button class="btn-delete" data-email="${user.email}">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to load users on startup
function loadUsers() {
    renderTable();
}

// Function to delete a specific user
function deleteUser(emailToDelete) {
    if(!confirm('Are you sure you want to delete this user?')) return;

    let users = getUsersFromStorage();
    
    // Filter out the user with the specific email
    users = users.filter(user => user.email !== emailToDelete);

    // Update Storage and UI
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    renderTable();
}

// Function to clear all data
function clearAllUsers() {
    if(!confirm('This will delete ALL users. Are you sure?')) return;

    localStorage.removeItem(STORAGE_KEY);
    renderTable();
}