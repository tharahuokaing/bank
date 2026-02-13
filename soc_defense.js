/**
 * Phase 20: Security Operations Center (SOC)
 * Simulates real-time threat detection and automated countermeasures.
 */

const attackTypes = ["DDoS Brute Force", "SQL Injection Attempt", "Cross-Site Scripting (XSS)", "Man-in-the-Middle (MitM)"];

function renderPhase20Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase20Section')) return;

    const p20Container = document.createElement('section');
    p20Container.id = "phase20Section";
    p20Container.className = "phase-detail-box";
    p20Container.style.borderLeft = "4px solid #00ff00"; // Terminal Green
    p20Container.style.padding = "20px";
    p20Container.style.background = "rgba(0, 255, 0, 0.05)";

    p20Container.innerHTML = `
        <h2 style="color: #00ff00;">Phase 20: Security Operations Center (SOC)</h2>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <p>Monitoring Perimeter Defense & Encryption Integrity.</p>
            <div id="firewallStatus" style="padding: 5px 10px; border: 1px solid #00ff00; color: #00ff00; font-size: 0.8rem;">FIREWALL: ACTIVE</div>
        </div>
        
        <div id="threatMonitor" style="background: #000; color: #00ff00; font-family: 'Courier New', monospace; height: 150px; overflow-y: hidden; padding: 10px; border: 1px solid #333; font-size: 0.8rem;">
            <div id="threatFeed">> SOC Initialized. Scanning for anomalies...</div>
        </div>

        <div style="margin-top: 15px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <button id="startDefenseBtn" style="background: transparent; border: 1px solid #00ff00; color: #00ff00;">Initialize Threat Scan</button>
            <button id="isolateCoreBtn" style="background: transparent; border: 1px solid #ff4444; color: #ff4444;">Emergency Air-Gap</button>
        </div>
    `;

    summaryBox.appendChild(p20Container);

    document.getElementById('startDefenseBtn').addEventListener('click', startThreatSimulation);
    document.getElementById('isolateCoreBtn').addEventListener('click', () => {
        alert("CRITICAL: Banking Core has been air-gapped from the internet. Transactions paused.");
        logActivity("Phase 20: Manual emergency network isolation triggered.");
    });
}

function startThreatSimulation() {
    const feed = document.getElementById('threatFeed');
    const btn = document.getElementById('startDefenseBtn');
    btn.disabled = true;
    btn.textContent = "Scanning...";

    setInterval(() => {
        const attack = attackTypes[Math.floor(Math.random() * attackTypes.length)];
        const ip = `192.168.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`;
        
        const entry = document.createElement('div');
        entry.style.marginBottom = "5px";
        entry.innerHTML = `<span style="color: #ff4444;">[DETECTED]</span> ${attack} from IP: ${ip} ... <span style="color: #00ff00;">[BLOCKED]</span>`;
        
        feed.prepend(entry);
        
        // Keep only last 8 entries
        if (feed.childNodes.length > 8) feed.removeChild(feed.lastChild);
    }, 2000);

    logActivity("Phase 20: Automated Threat Response (ATR) activated.");
}

// Global listener for Phase 20
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 20")) {
        renderPhase20Details();
        document.getElementById('phase20Section').scrollIntoView({ behavior: 'smooth' });
    }
});
