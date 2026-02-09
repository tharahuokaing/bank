/**
 * Phase 8: First Deployment Strategy
 * Simulates Blue-Green deployment and traffic routing.
 */

function renderPhase8Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase8Section')) return;

    const p8Container = document.createElement('section');
    p8Container.id = "phase8Section";
    p8Container.className = "phase-detail-box";
    p8Container.style.borderLeft = "4px solid #3399ff"; // Deployment Blue
    p8Container.style.padding = "20px";
    p8Container.style.marginTop = "20px";
    p8Container.style.background = "rgba(51, 153, 255, 0.05)";

    p8Container.innerHTML = `
        <h2 style="color: #3399ff;">Phase 8: First Deployment Strategy</h2>
        <p>Managing the transition to live production via Blue-Green Switching.</p>
        
        <div style="display: flex; justify-content: space-around; align-items: center; margin: 20px 0;">
            <div id="envBlue" style="padding: 20px; border: 2px solid #3399ff; border-radius: 5px; opacity: 1;">
                <strong>BLUE ENV</strong><br><small>v1.0 (Live)</small>
            </div>
            <div style="font-size: 2rem;">⚡</div>
            <div id="envGreen" style="padding: 20px; border: 2px solid #555; border-radius: 5px; opacity: 0.4;">
                <strong>GREEN ENV</strong><br><small>v1.1 (Staging)</small>
            </div>
        </div>
        
        <div id="deploymentLog" style="background: #111; color: #aaa; padding: 10px; font-family: monospace; height: 80px; overflow-y: auto; margin-bottom: 15px; font-size: 0.8rem;">
            > Ready for production switch...
        </div>
        
        <button id="switchTrafficBtn">Switch Traffic to Green</button>
        <button id="rollbackBtn" style="display:none; border-color: #ff4444; color: #ff4444;">Emergency Rollback</button>
    `;

    summaryBox.appendChild(p8Container);

    document.getElementById('switchTrafficBtn').addEventListener('click', performDeployment);
    document.getElementById('rollbackBtn').addEventListener('click', rollbackDeployment);
}

function performDeployment() {
    const log = document.getElementById('deploymentLog');
    const blue = document.getElementById('envBlue');
    const green = document.getElementById('envGreen');
    const btn = document.getElementById('switchTrafficBtn');
    const rollback = document.getElementById('rollbackBtn');

    log.innerHTML += `<br>> Validating Green Environment...`;
    
    setTimeout(() => {
        log.innerHTML += `<br>> Syncing database shards...`;
        setTimeout(() => {
            log.innerHTML += `<br><span style="color:#0f0">> TRAFFIC DIVERTED TO GREEN.</span>`;
            
            // UI Switch
            blue.style.opacity = "0.4";
            blue.style.borderColor = "#555";
            green.style.opacity = "1";
            green.style.borderColor = "#0f0";
            
            btn.style.display = "none";
            rollback.style.display = "inline-block";
            
            logActivity("Phase 8: Successful Blue-Green deployment switch to v1.1.");
        }, 1500);
    }, 1000);
}

function rollbackDeployment() {
    location.reload(); // Simplest simulation of rolling back to initial state
}

// Global listener for Phase 8
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 8")) {
        renderPhase8Details();
        document.getElementById('phase8Section').scrollIntoView({ behavior: 'smooth' });
    }
});