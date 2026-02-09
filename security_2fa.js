/**
 * 2FA Security Simulation
 * Generates a mock OTP and validates it before granting access.
 */

let currentOTP = null;

function trigger2FA(callback) {
    currentOTP = Math.floor(100000 + Math.random() * 900000).toString();
    
    // In a real bank, this would be an SMS or Email
    alert(`[SECURITY ALERT] 2FA Required.\nYour one-time code is: ${currentOTP}`);

    const userInput = prompt("Enter the 6-digit verification code sent to your device:");

    if (userInput === currentOTP) {
        logActivity("Security: 2FA Verification Successful.");
        callback();
    } else {
        alert("Verification Failed. Access Denied.");
        logActivity("Security: Unauthorized access attempt blocked.");
    }
}

// Modify your Phase listeners to include 2FA for sensitive areas
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI") {
        const text = e.target.textContent;
        // Require 2FA for Phase 14 (Capital) and Phase 16 (Governance)
        if (text.includes("Phase 14") || text.includes("Phase 16")) {
            trigger2FA(() => {
                // If 2FA passes, call the original render function
                if(text.includes("14")) renderPhase14Details();
                if(text.includes("16")) renderPhase16Details();
            });
        }
    }
});