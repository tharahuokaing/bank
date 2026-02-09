/**
 * Sentient AI Greeting Engine
 * Adapts personality based on time and bank status.
 */

function getSentientGreeting() {
    const hours = new Date().getHours();
    const lcr = document.getElementById('lcrVal')?.textContent || "100%";
    const timeGreet = hours < 12 ? "Good morning" : hours < 18 ? "Good afternoon" : "Good evening";
    
    const bankStatus = parseInt(lcr) > 120 ? "optimally" : "stably";
    
    const moods = [
        `${timeGreet}. I am the Khmer Bank Guardian. Our systems are breathing ${bankStatus} today.`,
        `Systems initialized. Welcome back. I've been monitoring the ledger while you were away.`,
        `Identity verified. It is ${timeGreet}, and I am ready to secure your assets.`
    ];

    return moods[Math.floor(Math.random() * moods.length)];
}

// Update the AI bubble in your dashboard
function refreshAiMood() {
    const aiBubble = document.getElementById('aiStatusBubble'); // Ensure this ID exists in your HTML
    if (aiBubble) {
        aiBubble.textContent = getSentientGreeting();
    }
}