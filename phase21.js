/**
 * Phase 21: Final Charter Approval Ceremony
 * Validates the completion of all 20 development phases.
 */

function renderPhase21Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase21Section')) return;

    const p21Container = document.createElement('section');
    p21Container.id = "phase21Section";
    p21Container.className = "phase-detail-box";
    p21Container.style.border = "4px double #d4af37"; // Gold Border
    p21Container.style.padding = "30px";
    p21Container.style.textAlign = "center";
    p21Container.style.background = "rgba(212, 175, 55, 0.05)";

    p21Container.innerHTML = `
        <h2 style="color: #d4af37; text-transform: uppercase; letter-spacing: 2px;">Institutional Licensing Ceremony</h2>
        <p>Finalizing the Charter for Khmer Bank PLC.</p>
        
        <div id="auditChecklist" style="text-align: left; max-width: 400px; margin: 20px auto; background: #000; padding: 15px; border: 1px solid #333;">
            <div id="check-tech">Digital Core Hardened... <span style="float:right;">⏳</span></div>
            <div id="check-risk">Risk Framework Validated... <span style="float:right;">⏳</span></div>
            <div id="check-legal">NBC Compliance Verified... <span style="float:right;">⏳</span></div>
        </div>

        <button id="requestLicenseBtn" style="padding: 15px 30px; background: #d4af37; color: #000; font-weight: bold; border: none; cursor: pointer;">
            REQUEST FINAL BANKING LICENSE
        </button>

        <div id="licenseSeal" style="display:none; margin-top: 30px; border: 2px solid #d4af37; padding: 20px; position: relative; background: #fff; color: #000;">
            <h1 style="font-family: serif; margin-bottom: 0;">BANKING LICENSE</h1>
            <p style="font-family: serif; border-top: 1px solid #000; padding-top: 10px;">GRANTED BY THE AUTHORITY OF THE CENTRAL GATEWAY</p>
            <div style="font-size: 3rem; opacity: 0.2; position: absolute; top: 10px; right: 10px;">APPROVED</div>
            <p><strong>Institution:</strong> Khmer Bank Digital Core</p>
            <p><strong>License ID:</strong> NBC-${Math.floor(Math.random()*999999)}</p>
        </div>
    `;

    summaryBox.appendChild(p21Container);

    document.getElementById('requestLicenseBtn').addEventListener('click', runFinalAudit);
}

function runFinalAudit() {
    const btn = document.getElementById('requestLicenseBtn');
    const seal = document.getElementById('licenseSeal');
    
    // Update visuals to simulate "Auditing"
    const checks = ["tech", "risk", "legal"];
    checks.forEach((c, i) => {
        setTimeout(() => {
            document.getElementById(`check-${c}`).innerHTML += `<span style="color:#0f0; float:right;">✓</span>`;
            document.getElementById(`check-${c}`).style.color = "#0f0";
            
            if (i === checks.length - 1) {
                btn.style.display = "none";
                seal.style.display = "block";
                logActivity("FINAL: Full Banking Charter Granted. Khmer Bank is LIVE.");
                alert("CONGRATULATIONS! Your institution is now officially licensed.");
            }
        }, (i + 1) * 1000);
    });
}

// Global listener for Phase 21
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 21")) {
        renderPhase21Details();
        document.getElementById('phase21Section').scrollIntoView({ behavior: 'smooth' });
    }
});
