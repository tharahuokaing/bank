/**
 * Phase 11: Real-Time Regulatory Reporting (RegTech)
 * Automates compliance monitoring and reporting to central authorities.
 */

function renderPhase11Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase11Section')) return;

    const p11Container = document.createElement('section');
    p11Container.id = "phase11Section";
    p11Container.className = "phase-detail-box";
    p11Container.style.borderLeft = "4px solid #2ecc71"; // Compliance Green
    p11Container.style.padding = "20px";
    p11Container.style.marginTop = "20px";
    p11Container.style.background = "rgba(46, 204, 113, 0.05)";

    p11Container.innerHTML = `
        <h2 style="color: #2ecc71;">Phase 11: RegTech & Real-Time Reporting</h2>
        <p>Automated telemetry sent to the Central Bank Regulatory Gateway.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
            <div style="background: #111; padding: 10px; border: 1px solid #333;">
                <small>Liquidity Coverage Ratio (LCR)</small>
                <div id="lcrVal" style="font-size: 1.4rem; color: #2ecc71;">142%</div>
            </div>
            <div style="background: #111; padding: 10px; border: 1px solid #333;">
                <small>Capital Adequacy Ratio (CAR)</small>
                <div id="carVal" style="font-size: 1.4rem; color: #2ecc71;">18.5%</div>
            </div>
        </div>

        <div id="regStatus" style="font-family: monospace; font-size: 0.8rem; background: #000; color: #aaa; padding: 10px; border: 1px solid #2ecc71; margin-bottom: 10px;">
            > Establishing secure tunnel to NBC...
        </div>
        
        <button id="transmitReportBtn">Transmit Daily Regulatory Fix</button>
    `;

    summaryBox.appendChild(p11Container);

    document.getElementById('transmitReportBtn').addEventListener('click', transmitData);
}

function transmitData() {
    const btn = document.getElementById('transmitReportBtn');
    const status = document.getElementById('regStatus');
    
    btn.disabled = true;
    btn.textContent = "Transmitting...";
    
    const messages = [
        "> Encrypting transactional ledger...",
        "> Validating AML signatures...",
        "> Pushing data to NBC API (Endpoint: /v2/reporting)...",
        "> [SUCCESS] ACK Received. Transmission ID: " + Math.random().toString(36).substr(2, 9).toUpperCase()
    ];

    messages.forEach((msg, i) => {
        setTimeout(() => {
            status.innerHTML += `<br>${msg}`;
            if (i === messages.length - 1) {
                btn.textContent = "Data Synced";
                logActivity("Phase 11: Daily regulatory report transmitted successfully.");
            }
        }, (i + 1) * 800);
    });
}

// Global listener for Phase 11
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 11")) {
        renderPhase11Details();
        document.getElementById('phase11Section').scrollIntoView({ behavior: 'smooth' });
    }
});