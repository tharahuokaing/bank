/**
 * Phase 4: Operations & Risk Setup
 * Implements the Risk Assessment Matrix and Operational Protocols.
 */

const riskScenarios = [
    { id: 1, name: "Liquidity Shortfall", category: "Financial" },
    { id: 2, name: "Cyber Security Breach", category: "Technical" },
    { id: 3, name: "AML Compliance Failure", category: "Legal" },
    { id: 4, name: "Internal Fraud", category: "Operational" }
];

function renderPhase4Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase4Section')) return;

    const p4Container = document.createElement('section');
    p4Container.id = "phase4Section";
    p4Container.className = "phase-detail-box";
    p4Container.style.borderLeft = "4px solid #ff4444"; // Risk Red
    p4Container.style.padding = "20px";
    p4Container.style.marginTop = "20px";

    p4Container.innerHTML = `
        <h2 style="color: #ff4444;">Phase 4: Operations & Risk Setup</h2>
        <p>Analyze and mitigate potential threats to banking operations.</p>
        
        <div id="riskMatrixContainer" style="display: flex; gap: 20px; flex-wrap: wrap;">
            <div id="riskTable" style="flex: 1; min-width: 300px;">
                <h3>Risk Registry</h3>
                <table style="width: 100%; border-collapse: collapse; background: rgba(255,0,0,0.1);">
                    <thead>
                        <tr style="border-bottom: 1px solid #ff4444;">
                            <th style="text-align: left;">Scenario</th>
                            <th>Impact (1-5)</th>
                        </tr>
                    </thead>
                    <tbody id="riskRegistryBody"></tbody>
                </table>
            </div>
            
            <div id="heatMapDisplay" style="flex: 1; min-width: 250px; border: 1px solid #ff4444; padding: 10px; text-align: center;">
                <h3>Risk Heat Map</h3>
                <div id="matrixGrid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; height: 150px;">
                    <div style="background: #050; display: flex; align-items: center; justify-content: center; font-size: 0.7rem;">LOW</div>
                    <div style="background: #550; display: flex; align-items: center; justify-content: center; font-size: 0.7rem;">MED</div>
                    <div style="background: #500; display: flex; align-items: center; justify-content: center; font-size: 0.7rem;">HIGH</div>
                </div>
                <p id="riskSummary" style="margin-top: 10px; font-weight: bold;"></p>
            </div>
        </div>
    `;

    summaryBox.appendChild(p4Container);

    const tbody = document.getElementById('riskRegistryBody');
    riskScenarios.forEach(risk => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="padding: 10px 0;">${risk.name}</td>
            <td style="text-align: center;">
                <input type="number" min="1" max="5" value="1" class="risk-input" data-name="${risk.name}" style="width: 40px; background: #222; color: #fff; border: 1px solid #ff4444;">
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Add listeners to all inputs
    document.querySelectorAll('.risk-input').forEach(input => {
        input.addEventListener('input', calculateTotalRisk);
    });

    calculateTotalRisk();
}

function calculateTotalRisk() {
    const inputs = document.querySelectorAll('.risk-input');
    let totalScore = 0;
    inputs.forEach(i => totalScore += parseInt(i.value));
    
    const summary = document.getElementById('riskSummary');
    const average = totalScore / inputs.length;

    if (average <= 2) {
        summary.textContent = "Current Risk Level: SECURE";
        summary.style.color = "#0f0";
    } else if (average <= 3.5) {
        summary.textContent = "Current Risk Level: MONITORING REQUIRED";
        summary.style.color = "#ff0";
    } else {
        summary.textContent = "Current Risk Level: CRITICAL ACTION REQUIRED";
        summary.style.color = "#f00";
    }
}

// Global listener for Phase 4
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 4")) {
        renderPhase4Details();
        document.getElementById('phase4Section').scrollIntoView({ behavior: 'smooth' });
    }
});
