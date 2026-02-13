/**
 * Phase 13: Operational Resilience (DORA & Beyond)
 * Simulates high-availability failover and disaster recovery protocols.
 */

function renderPhase13Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase13Section')) return;

    const p13Container = document.createElement('section');
    p13Container.id = "phase13Section";
    p13Container.className = "phase-detail-box";
    p13Container.style.borderLeft = "4px solid #f1c40f"; // Resilience Gold
    p13Container.style.padding = "20px";
    p13Container.style.marginTop = "20px";
    p13Container.style.background = "rgba(241, 196, 15, 0.05)";

    p13Container.innerHTML = `
        <h2 style="color: #f1c40f;">Phase 13: Operational Resilience (DORA)</h2>
        <p>Ensuring 99.999% uptime through automated Disaster Recovery.</p>
        
        <div style="display: flex; justify-content: space-around; margin: 20px 0;">
            <div id="sitePrimary" style="padding: 15px; border: 2px solid #0f0; border-radius: 5px;">
                <strong>Primary DC</strong><br><span id="statusP">ACTIVE</span>
            </div>
            <div style="font-size: 2rem; color: #555;">&lt;--&gt;</div>
            <div id="siteSecondary" style="padding: 15px; border: 2px solid #555; border-radius: 5px;">
                <strong>Secondary DC</strong><br><span id="statusS">STANDBY</span>
            </div>
        </div>

        <div id="resilienceLog" style="background: #000; color: #f1c40f; padding: 10px; font-family: monospace; height: 100px; overflow-y: auto; border: 1px solid #444; margin-bottom: 15px; font-size: 0.8rem;">
            > Health Check: All nodes nominal.
        </div>
        
        <button id="simulateOutageBtn" style="border-color: #e74c3c; color: #e74c3c;">Simulate Primary Site Outage</button>
    `;

    summaryBox.appendChild(p13Container);

    document.getElementById('simulateOutageBtn').addEventListener('click', runFailoverSimulation);
}

function runFailoverSimulation() {
    const log = document.getElementById('resilienceLog');
    const statusP = document.getElementById('statusP');
    const statusS = document.getElementById('statusS');
    const btn = document.getElementById('simulateOutageBtn');
    
    btn.disabled = true;
    log.innerHTML += `<br><span style="color:#e74c3c;">> [ALERT] Critical Hardware Failure in Primary DC!</span>`;
    statusP.textContent = "OFFLINE";
    document.getElementById('sitePrimary').style.borderColor = "#e74c3c";

    setTimeout(() => {
        log.innerHTML += `<br>> Detecting outage... Initiating failover protocol...`;
        setTimeout(() => {
            log.innerHTML += `<br>> Redirecting traffic to Secondary Site...`;
            log.innerHTML += `<br>> Syncing last 50ms of transaction logs...`;
            setTimeout(() => {
                log.innerHTML += `<br><span style="color:#0f0">> [SUCCESS] Secondary DC is now MASTER. Service Restored.</span>`;
                statusS.textContent = "ACTIVE";
                document.getElementById('siteSecondary').style.borderColor = "#0f0";
                logActivity("Phase 13: Emergency failover successful. Zero data loss achieved.");
            }, 1500);
        }, 1000);
    }, 1000);
}

// Global listener for Phase 13
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 13")) {
        renderPhase13Details();
        document.getElementById('phase13Section').scrollIntoView({ behavior: 'smooth' });
    }
});
