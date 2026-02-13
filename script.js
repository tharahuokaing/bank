/**
 * Bank Portal Logic
 * This script handles authentication simulation and dynamic UI population.
 */

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginBox = document.getElementById('loginBox');
    const summaryBox = document.getElementById('summaryBox');
    const phasesList = document.getElementById('phasesList');
    const logoutBtn = document.getElementById('logoutBtn');

    // Sample Data
    const projectPhases = [
        "Initial Risk Assessment",
        "Document Verification & Compliance",
        "Stakeholder Review",
        "Final Legitimacy Approval"
    ];

    // 1. Handle Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple simulation: Accept any credentials for now
        loginBox.style.display = 'none';
        summaryBox.style.display = 'block';
        
        populateDashboard();
    });

    // 2. Populate Dashboard Data
    function populateDashboard() {
        // Clear existing items to prevent duplicates
        phasesList.innerHTML = '';
        
        projectPhases.forEach(phase => {
            const li = document.createElement('li');
            li.textContent = phase;
            li.style.padding = "10px 0";
            phasesList.appendChild(li);
        });
    }

    // 3. Handle Logout
    logoutBtn.addEventListener('click', () => {
        summaryBox.style.display = 'none';
        loginBox.style.display = 'block';
        loginForm.reset();
    });
});
