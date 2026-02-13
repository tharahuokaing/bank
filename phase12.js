/**
 * Phase 12: AI-Driven Financial Guardian
 * Simulates a Neural Network risk-scoring engine for fraud prevention.
 */

function renderPhase12Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase12Section')) return;

    const p12Container = document.createElement('section');
    p12Container.id = "phase12Section";
    p12Container.className = "phase-detail-box";
    p12Container.style.borderLeft = "4px solid #00f2fe"; // Neural Cyan
    p12Container.style.padding = "20px";
    p12Container.style.marginTop = "20px";
    p12Container.style.background = "rgba(0, 242, 254, 0.05)";

    p12Container.innerHTML = `
        <h2 style="color: #00f2fe;">Phase 12: AI Guardian (Fraud Detection)</h2>
        <p>Real-time behavioral analysis and transaction risk scoring.</p>
        
        <div style="background: #111; padding: 15px; border: 1px solid #333; margin-bottom: 15px;">
            <div style="margin-bottom: 10px;">
                <label>Transaction Amount:</label>
                <input type="number" id="fraudAmt" value="5000" style="width: 80px;">
            </div>
            <div style="margin-bottom: 10px;">
                <label>Location Conflict:</label>
                <select id="locationConflict">
                    <option value="0">Local (Cambodia)</option>
                    <option value="40">International (High Risk)</option>
                </select>
            </div>
            <button id="scanTransactionBtn">Run AI Risk Assessment</button>
        </div>

        <div id="aiAnalysisOutput" style="display:none; padding: 10px; border: 1px solid #00f2fe; background: #000;">
            <div style="display: flex; justify-content: space-between;">
                <span>AI Confidence Score:</span>
                <span id="riskScoreDisplay" style="font-weight: bold;">0%</span>
            </div>
            <div id="aiVerdict" style="margin-top: 10px; padding: 5px; text-align: center; font-weight: bold;"></div>
        </div>
    `;

    summaryBox.appendChild(p12Container);

    document.getElementById('scanTransactionBtn').addEventListener('click', runAiScan);
}

function runAiScan() {
    const amount = parseFloat(document.getElementById('fraudAmt').value);
    const locationRisk = parseInt(document.getElementById('locationConflict').value);
    const output = document.getElementById('aiAnalysisOutput');
    const scoreDisplay = document.getElementById('riskScoreDisplay');
    const verdict = document.getElementById('aiVerdict');

    output.style.display = "block";
    verdict.textContent = "Analyzing patterns...";
    verdict.style.color = "#aaa";

    // Simple heuristic-based "Neural" simulation
    setTimeout(() => {
        let baseRisk = locationRisk;
        if (amount > 1000) baseRisk += 20;
        if (amount > 10000) baseRisk += 40;
        
        const finalScore = Math.min(baseRisk + Math.floor(Math.random() * 10), 100);
        scoreDisplay.textContent = finalScore + "%";

        if (finalScore < 30) {
            verdict.textContent = "VERDICT: APPROVED (Low Risk)";
            verdict.style.color = "#0f0";
        } else if (finalScore < 70) {
            verdict.textContent = "VERDICT: PENDING 2FA (Medium Risk)";
            verdict.style.color = "#ff0";
        } else {
            verdict.textContent = "VERDICT: BLOCKED (Fraud Likely)";
            verdict.style.color = "#f00";
        }
        
        logActivity(`Phase 12: AI Guardian flagged a $${amount} transaction with ${finalScore}% risk.`);
    }, 1200);
}

// Global listener for Phase 12
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 12")) {
        renderPhase12Details();
        document.getElementById('phase12Section').scrollIntoView({ behavior: 'smooth' });
    }
});
