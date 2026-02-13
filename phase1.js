/**
 * Phase 1: Vision & Concept Development
 * Focuses on the strategic foundation of Khmer Bank.
 */

const phase1Data = {
    title: "Phase 1: Vision & Concept Development",
    vision: "To establish a resilient, high-tech banking infrastructure in Cambodia that bridges local operations with global ISO 20022 standards.",
    milestones: [
        "Definition of the 'Digital Core' architecture",
        "Stakeholder alignment on World Bank standards",
        "Initial capital requirement mapping",
        "AI Guardian integration protocol setup"
    ]
};

function renderPhase1Details() {
    const summaryBox = document.getElementById('summaryBox');
    
    // Create Phase 1 Container
    const p1Container = document.createElement('section');
    p1Container.id = "phase1Section";
    p1Container.className = "phase-detail-box";
    p1Container.style.borderLeft = "4px solid #0ff";
    p1Container.style.padding = "20px";
    p1Container.style.marginTop = "20px";

    p1Container.innerHTML = `
        <h2 style="color: #0ff;">${phase1Data.title}</h2>
        <p><strong>Vision:</strong> <em>${phase1Data.vision}</em></p>
        <div id="visionChart" style="margin: 15px 0; border: 1px dashed #444; padding: 10px; text-align: center;">
            [Vision Flow: Local Needs → Digital Core → Global Connectivity]
        </div>
        <h3>Key Milestones:</h3>
        <ul id="p1Milestones"></ul>
        <button id="p1Download">Export Phase 1 Strategy</button>
    `;

    summaryBox.appendChild(p1Container);

    // Populate Milestones
    const list = document.getElementById('p1Milestones');
    phase1Data.milestones.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });

    // Strategy Export logic
    document.getElementById('p1Download').addEventListener('click', () => {
        const content = `VISION: ${phase1Data.vision}\nMILESTONES: ${phase1Data.milestones.join(', ')}`;
        const blob = new Blob([content], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = "Phase1_Strategy.txt";
        link.click();
        logActivity("Phase 1 Strategy exported.");
    });
}

// Example: Triggering Phase 1 when user clicks the first item in the phase list
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 1")) {
        if (!document.getElementById('phase1Section')) {
            renderPhase1Details();
        }
    }
});
