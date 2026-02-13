/**
 * Phase 3: Infrastructure & Technology Build
 * Simulates the deployment of the Digital Core and Server Clusters.
 */

const infraSteps = [
    "Provisioning Tier-3 Data Center Clusters...",
    "Initializing Encrypted Database (AES-256)...",
    "Configuring Private Banking Network (VPN/MPLS)...",
    "Deploying Core Banking Microservices...",
    "Establishing Global SWIFT Gateway Node..."
];

function renderPhase3Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase3Section')) return;

    const p3Container = document.createElement('section');
    p3Container.id = "phase3Section";
    p3Container.className = "phase-detail-box";
    p3Container.style.borderLeft = "4px solid #00ffcc"; // Tech Cyan
    p3Container.style.padding = "20px";
    p3Container.style.marginTop = "20px";
    p3Container.style.background = "rgba(0, 40, 40, 0.4)";

    p3Container.innerHTML = `
        <h2 style="color: #00ffcc;">Phase 3: Infrastructure & Tech Build</h2>
        <div id="infraConsole" style="background: #000; color: #0f0; padding: 15px; font-family: monospace; height: 150px; overflow-y: auto; border: 1px solid #00ffcc; font-size: 0.9rem;">
            > System Idle... Ready for initialization.
        </div>
        <button id="startBuildBtn" style="margin-top: 15px;">Initialize Infrastructure Build</button>
    `;

    summaryBox.appendChild(p3Container);

    document.getElementById('startBuildBtn').addEventListener('click', startInfraBuild);
}

function startInfraBuild() {
    const consoleBox = document.getElementById('infraConsole');
    const btn = document.getElementById('startBuildBtn');
    btn.disabled = true;
    btn.textContent = "Building...";

    let step = 0;
    const interval = setInterval(() => {
        if (step < infraSteps.length) {
            const line = document.createElement('div');
            line.textContent = `> ${infraSteps[step]}`;
            consoleBox.appendChild(line);
            consoleBox.scrollTop = consoleBox.scrollHeight;
            step++;
        } else {
            clearInterval(interval);
            const finalLine = document.createElement('div');
            finalLine.innerHTML = `<span style="color: white;">[SUCCESS] Digital Core Infrastructure is ONLINE.</span>`;
            consoleBox.appendChild(finalLine);
            btn.textContent = "Infrastructure Ready";
            logActivity("Phase 3: Digital Core Infrastructure successfully provisioned.");
        }
    }, 1500);
}

// Global listener for Phase 3
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 3")) {
        renderPhase3Details();
        document.getElementById('phase3Section').scrollIntoView({ behavior: 'smooth' });
    }
});
