/**
 * Phase 17: Macroprudential Stress Testing
 * Simulates systemic shocks to capital and liquidity ratios.
 */

function renderPhase17Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase17Section')) return;

    const p17Container = document.createElement('section');
    p17Container.id = "phase17Section";
    p17Container.className = "phase-detail-box";
    p17Container.style.borderLeft = "4px solid #e74c3c"; // Crisis Red
    p17Container.style.padding = "20px";
    p17Container.style.background = "rgba(231, 76, 60, 0.05)";

    p17Container.innerHTML = `
        <h2 style="color: #e74c3c;">Phase 17: Systemic Stress Test</h2>
        <p>Simulating adverse economic scenarios to test balance sheet resilience.</p>
        
        <div style="background: #111; padding: 15px; border: 1px solid #444; margin-bottom: 15px;">
            <label>Select Scenario:</label>
            <select id="stressScenario" style="width: 100%; margin-top: 5px; background: #000; color: #fff;">
                <option value="none">Baseline (Normal Operations)</option>
                <option value="market_crash">Equity Market Crash (-30%)</option>
                <option value="recession">Severe Recession (Unemployment +5%)</option>
                <option value="bank_run">Liquidity Crisis (Bank Run Simulation)</option>
            </select>
            <button id="runStressTestBtn" style="margin-top: 15px; width: 100%; background: #e74c3c; color: #fff;">Execute Stress Simulation</button>
        </div>

        <div id="stressImpactReport" style="display:none; padding: 15px; border: 1px solid #e74c3c; background: #000;">
            <h3 style="color: #e74c3c; margin-top: 0;">Impact Assessment:</h3>
            <p>New LCR: <span id="stressedLCR" style="font-weight: bold;">--</span></p>
            <p>New CAR: <span id="stressedCAR" style="font-weight: bold;">--</span></p>
            <div id="stressVerdict" style="padding: 10px; text-align: center; font-weight: bold; margin-top: 10px;"></div>
        </div>
    `;

    summaryBox.appendChild(p17Container);
    document.getElementById('runStressTestBtn').addEventListener('click', runStressSimulation);
}

function runStressSimulation() {
    const scenario = document.getElementById('stressScenario').value;
    const report = document.getElementById('stressImpactReport');
    const lcrDisp = document.getElementById('stressedLCR');
    const carDisp = document.getElementById('stressedCAR');
    const verdict = document.getElementById('stressVerdict');

    // Baseline stats (from previous phases)
    let currentLCR = 142; 
    let currentCAR = 18.5;

    report.style.display = "block";
    verdict.textContent = "Processing billions of data points...";
    verdict.style.background = "transparent";

    setTimeout(() => {
        if (scenario === "market_crash") {
            currentCAR -= 4.5; // High loss in trading assets
            currentLCR -= 10;
        } else if (scenario === "recession") {
            currentCAR -= 6.2; // High defaults on loans
            currentLCR -= 5;
        } else if (scenario === "bank_run") {
            currentLCR -= 60; // Mass withdrawal of cash
            currentCAR -= 1.0;
        }

        lcrDisp.textContent = currentLCR.toFixed(1) + "%";
        carDisp.textContent = currentCAR.toFixed(1) + "%";

        if (currentLCR >= 100 && currentCAR >= 10.5) {
            verdict.textContent = "PASS: Bank remains solvent.";
            verdict.style.backgroundColor = "#27ae60";
        } else {
            verdict.textContent = "FAIL: Regulatory Intervention Required.";
            verdict.style.backgroundColor = "#c0392b";
            logActivity(`CRITICAL: Bank failed ${scenario} stress test!`);
        }
    }, 1500);
}

// Global listener for Phase 17
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 17")) {
        renderPhase17Details();
        document.getElementById('phase17Section').scrollIntoView({ behavior: 'smooth' });
    }
});
