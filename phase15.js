/**
 * Phase 15: ESG Maturity & Sustainability
 * Monitors the bank's impact on Environment, Society, and Governance.
 */

function renderPhase15Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase15Section')) return;

    const p15Container = document.createElement('section');
    p15Container.id = "phase15Section";
    p15Container.className = "phase-detail-box";
    p15Container.style.borderLeft = "4px solid #27ae60"; // Sustainability Green
    p15Container.style.padding = "20px";
    p15Container.style.marginTop = "20px";
    p15Container.style.background = "rgba(39, 174, 96, 0.05)";

    p15Container.innerHTML = `
        <h2 style="color: #27ae60;">Phase 15: ESG Maturity Tracker</h2>
        <p>Measuring our commitment to sustainable and ethical banking.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
            <div style="background: #111; padding: 10px;">
                <label>Green Energy Use (%):</label>
                <input type="range" id="greenEnergy" min="0" max="100" value="45" style="width:100%;">
            </div>
            <div style="background: #111; padding: 10px;">
                <label>Financial Inclusion (Loans to SMEs):</label>
                <input type="range" id="socialInclusion" min="0" max="100" value="60" style="width:100%;">
            </div>
        </div>

        <div id="esgResultBox" style="text-align: center; padding: 15px; border: 1px dashed #27ae60;">
            <div style="font-size: 0.8rem; color: #888;">Live ESG Rating</div>
            <div id="esgRating" style="font-size: 2rem; font-weight: bold; color: #27ae60;">B+</div>
            <p id="esgCommentary" style="font-size: 0.85rem;"></p>
        </div>
    `;

    summaryBox.appendChild(p15Container);

    const inputs = ['greenEnergy', 'socialInclusion'];
    inputs.forEach(id => {
        document.getElementById(id).addEventListener('input', calculateESG);
    });

    calculateESG();
}

function calculateESG() {
    const energy = parseInt(document.getElementById('greenEnergy').value);
    const social = parseInt(document.getElementById('socialInclusion').value);
    const ratingElem = document.getElementById('esgRating');
    const commentary = document.getElementById('esgCommentary');

    const average = (energy + social) / 2;
    let rating = "C";

    if (average > 85) rating = "AAA";
    else if (average > 70) rating = "AA";
    else if (average > 50) rating = "A";
    else if (average > 30) rating = "B";

    ratingElem.textContent = rating;
    commentary.textContent = `Current score (${average}%) reflects ${rating === 'AAA' ? 'Market Leadership' : 'Steady Progress'} in sustainable finance.`;
    
    if (average > 90) {
        logActivity("Phase 15: Khmer Bank reached AAA ESG rating—eligible for Green Bond issuance.");
    }
}

// Global listener for Phase 15
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 15")) {
        renderPhase15Details();
        document.getElementById('phase15Section').scrollIntoView({ behavior: 'smooth' });
    }
});
