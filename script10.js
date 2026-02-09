/**
 * Phase 10: Digital Public Infrastructure (DPI) & Open Finance
 * Implements API Consent Management and Third-Party Data Sharing.
 */

const thirdPartyApps = [
    { id: "wealth_app", name: "Khmer Wealth Manager", scopes: ["Read Balance", "Transaction History"] },
    { id: "tax_tool", name: "EasyTax Cambodia", scopes: ["Read Income", "Export Statements"] }
];

function renderPhase10Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase10Section')) return;

    const p10Container = document.createElement('section');
    p10Container.id = "phase10Section";
    p10Container.className = "phase-detail-box";
    p10Container.style.borderLeft = "4px solid #00d2ff"; // Open Finance Blue
    p10Container.style.padding = "20px";
    p10Container.style.marginTop = "20px";
    p10Container.style.background = "rgba(0, 210, 255, 0.05)";

    p10Container.innerHTML = `
        <h2 style="color: #00d2ff;">Phase 10: DPI & Open Finance</h2>
        <p>Manage third-party connections and data-sharing consents.</p>
        
        <div id="consentList" style="margin: 15px 0;">
            <h3>Active Connection Requests:</h3>
            ${thirdPartyApps.map(app => `
                <div style="background: #222; padding: 10px; margin-bottom: 10px; border: 1px solid #333; border-radius: 4px;">
                    <strong>${app.name}</strong> wants to access:
                    <ul style="font-size: 0.85rem; color: #aaa;">
                        ${app.scopes.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                    <button class="authorize-btn" data-app="${app.id}" style="font-size: 0.7rem; padding: 5px 10px;">Authorize</button>
                    <button class="deny-btn" style="font-size: 0.7rem; padding: 5px 10px; border-color: #ff4444; color: #ff4444;">Deny</button>
                </div>
            `).join('')}
        </div>
        
        <div id="apiStatus" style="margin-top: 15px; font-weight: bold; display: none;">
            <span style="color: #0f0;">[API LINK ACTIVE]</span> Secure tunnel established via OAuth 2.0.
        </div>
    `;

    summaryBox.appendChild(p10Container);

    document.querySelectorAll('.authorize-btn').forEach(btn => {
        btn.addEventListener('click', (e) => authorizeApp(e.target.dataset.app));
    });
}

function authorizeApp(appId) {
    const app = thirdPartyApps.find(a => a.id === appId);
    const apiStatus = document.getElementById('apiStatus');
    
    // Simulate OAuth 2.0 handshake
    logActivity(`Phase 10: User granted ${app.name} access to financial data.`);
    
    apiStatus.innerHTML = `<span style="color: #0f0;">[VERIFIED]</span> Data sharing active for <strong>${app.name}</strong>.`;
    apiStatus.style.display = "block";
    
    alert(`Consent token generated for ${app.name}. Handshake complete.`);
}

// Global listener for Phase 10
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 10")) {
        renderPhase10Details();
        document.getElementById('phase10Section').scrollIntoView({ behavior: 'smooth' });
    }
});