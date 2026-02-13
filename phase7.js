/**
 * Phase 7: Web Server Development (The Digital Core)
 * Simulates server configuration, security hardening, and API routing.
 */

const serverModules = [
    { name: "SSL/TLS 1.3 Encryption", status: "Hardening..." },
    { name: "Load Balancer (Nginx/HAProxy)", status: "Configuring..." },
    { name: "Web Application Firewall (WAF)", status: "Setting Rules..." },
    { name: "RESTful API Gateway", status: "Routing..." },
    { name: "Intrusion Detection System (IDS)", status: "Initializing..." }
];

function renderPhase7Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase7Section')) return;

    const p7Container = document.createElement('section');
    p7Container.id = "phase7Section";
    p7Container.className = "phase-detail-box";
    p7Container.style.borderLeft = "4px solid #ff00ff"; // Digital Core Magenta
    p7Container.style.padding = "20px";
    p7Container.style.marginTop = "20px";
    p7Container.style.background = "rgba(255, 0, 255, 0.05)";

    p7Container.innerHTML = `
        <h2 style="color: #ff00ff;">Phase 7: Web Server & Digital Core</h2>
        <p>Configuring the high-availability server environment for secure banking.</p>
        
        <div id="serverModuleList" style="text-align: left; margin: 15px 0;">
            </div>
        
        <button id="deployServerBtn">Deploy Web Server Architecture</button>
        <div id="serverStatus" style="margin-top: 10px; font-weight: bold; color: #aaa;">Status: Standby</div>
    `;

    summaryBox.appendChild(p7Container);

    document.getElementById('deployServerBtn').addEventListener('click', deployWebServer);
}

function deployWebServer() {
    const btn = document.getElementById('deployServerBtn');
    const container = document.getElementById('serverModuleList');
    const statusText = document.getElementById('serverStatus');
    
    btn.disabled = true;
    btn.textContent = "Deploying...";
    statusText.textContent = "Status: Provisioning Modules...";
    container.innerHTML = "";

    serverModules.forEach((mod, index) => {
        setTimeout(() => {
            const modDiv = document.createElement('div');
            modDiv.style.padding = "5px 10px";
            modDiv.style.marginBottom = "5px";
            modDiv.style.border = "1px solid #444";
            modDiv.innerHTML = `<span>${mod.name}</span> <span style="float: right; color: #0f0;">ONLINE</span>`;
            container.appendChild(modDiv);
            
            if (index === serverModules.length - 1) {
                statusText.textContent = "Status: CORE SERVER OPERATIONAL";
                statusText.style.color = "#0f0";
                logActivity("Phase 7: Web Server architecture and Digital Core deployed.");
            }
        }, (index + 1) * 600);
    });
}

// Global listener for Phase 7
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 7")) {
        renderPhase7Details();
        document.getElementById('phase7Section').scrollIntoView({ behavior: 'smooth' });
    }
});
