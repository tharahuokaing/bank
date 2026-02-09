/**
 * Phase 14: Capital Adequacy & Basel IV
 * Calculates the bank's solvency ratio based on international standards.
 */

function renderPhase14Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase14Section')) return;

    const p14Container = document.createElement('section');
    p14Container.id = "phase14Section";
    p14Container.className = "phase-detail-box";
    p14Container.style.borderLeft = "4px solid #e67e22"; // Basel Orange
    p14Container.style.padding = "20px";
    p14Container.style.marginTop = "20px";

    p14Container.innerHTML = `
        <h2 style="color: #e67e22;">Phase 14: Basel IV Capital Adequacy</h2>
        <p>Ensuring the bank maintains a minimum 8% Total Capital Ratio + Buffers.</p>
        
        <div style="background: #111; padding: 15px; border: 1px solid #333;">
            <div style="margin-bottom: 10px;">
                <label>Tier 1 Capital (Equity/Reserves) $M:</label>
                <input type="number" id="tier1Cap" value="120" style="width: 80px;">
            </div>
            <div style="margin-bottom: 10px;">
                <label>Total Risk-Weighted Assets (RWA) $M:</label>
                <input type="number" id="totalRWA" value="1000" style="width: 80px;">
            </div>
            <button id="calcBaselBtn">Calculate Basel IV Ratio</button>
        </div>

        <div id="baselOutput" style="display:none; margin-top: 15px; border: 1px solid #e67e22; padding: 15px;">
            <div style="font-size: 1.2rem;">Total CAR: <span id="carResult" style="font-weight: bold;">0%</span></div>
            <div id="baselVerdict" style="margin-top: 10px; font-weight: bold;"></div>
            <div style="font-size: 0.8rem; color: #888; margin-top: 5px;">*Includes 2.5% Capital Conservation Buffer (CCB).</div>
        </div>
    `;

    summaryBox.appendChild(p14Container);

    document.getElementById('calcBaselBtn').addEventListener('click', calculateBasel);
}

function calculateBasel() {
    const tier1 = parseFloat(document.getElementById('tier1Cap').value);
    const rwa = parseFloat(document.getElementById('totalRWA').value);
    const output = document.getElementById('baselOutput');
    const resultDisp = document.getElementById('carResult');
    const verdict = document.getElementById('baselVerdict');

    const car = (tier1 / rwa) * 100;
    resultDisp.textContent = car.toFixed(2) + "%";
    output.style.display = "block";

    // Basel IV targets approx 10.5% (8% min + 2.5% CCB)
    if (car >= 10.5) {
        verdict.textContent = "VERDICT: FULLY COMPLIANT (Well-Capitalized)";
        verdict.style.color = "#0f0";
    } else if (car >= 8) {
        verdict.textContent = "VERDICT: UNDER-BUFFERED (Action Required)";
        verdict.style.color = "#f1c40f";
    } else {
        verdict.textContent = "VERDICT: NON-COMPLIANT (Regulatory Breach)";
        verdict.style.color = "#e74c3c";
    }

    logActivity(`Phase 14: Capital Adequacy checked. Ratio: ${car.toFixed(2)}%.`);
}

// Global listener for Phase 14
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 14")) {
        renderPhase14Details();
        document.getElementById('phase14Section').scrollIntoView({ behavior: 'smooth' });
    }
});