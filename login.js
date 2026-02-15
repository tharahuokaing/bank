/**
 * Master Authentication Logic
 * Validates credentials against the Global Administrator & Auditor accounts.
 */

function handleLogin(enteredUser, enteredPass) {
    const validUsers = [
        { u: "huokaingthara", p: "dutyfree", role: "ADMIN" },
        { u: "huokaingthara1", p: "dutyfree", role: "AUDITOR" }
    ];

    const user = validUsers.find(v => v.u === enteredUser && v.p === enteredPass);

    if (user) {
        console.log(`Access Granted: ${user.role}`);
        // Trigger the dashboard and the Master Loader
        showDashboard(user.u); 
    } else {
        alert("ACCESS DENIED: Invalid Credentials. Intrusion logged in SOC.");
        logActivity("SOC: Unauthorized login attempt detected.");
    }
}
