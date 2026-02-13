/**
 * Phase 16: Corporate Governance & Org Chart
 * Renders the structural hierarchy of the bank's leadership and departments.
 */

const bankHierarchy = {
    name: "Board of Directors",
    title: "Governance & Strategy",
    children: [
        {
            name: "CEO",
            title: "Executive Leadership",
            children: [
                { name: "CFO", title: "Treasury & Finance" },
                { name: "COO", title: "Operations & HR" },
                { name: "CTO", title: "Digital Core & IT" }
            ]
        },
        {
            name: "Chief Risk Officer",
            title: "Independent Oversight",
            children: [
                { name: "Internal Audit", title: "Compliance" },
                { name: "AML/KYC Team", title: "Financial Crime" }
            ]
        }
    ]
};

function renderPhase16Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase16Section')) return;

    const p16Container = document.createElement('section');
    p16Container.id = "phase16Section";
    p16Container.className = "phase-detail-box";
    p16Container.style.borderLeft = "4px solid #9b59b6"; // Governance Purple
    p16Container.style.padding = "20px";
    p16Container.style.marginTop = "20px";

    p16Container.innerHTML = `
        <h2 style="color: #9b59b6;">Phase 16: Governance Structure</h2>
        <p>Enforcing the 'Four-Eyes Principle' through departmental segregation.</p>
        <div id="orgChartCanvas" style="background: #111; padding: 20px; border-radius: 8px; font-family: sans-serif;">
            ${generateOrgNode(bankHierarchy)}
        </div>
        <button id="finalizeProtocolBtn" style="margin-top: 20px;">Lock Final Bank Structure</button>
    `;

    summaryBox.appendChild(p16Container);

    document.getElementById('finalizeProtocolBtn').addEventListener('click', () => {
        alert("Institutional Structure Finalized. All 16 Phases are now operational.");
        logActivity("Phase 16: Final Corporate Governance structure locked and verified.");
    });
}

function generateOrgNode(node) {
    let html = `
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="display: inline-block; padding: 10px; border: 1px solid #9b59b6; background: #222; border-radius: 4px;">
                <div style="font-weight: bold; color: #fff;">${node.name}</div>
                <div style="font-size: 0.75rem; color: #9b59b6;">${node.title}</div>
            </div>
            ${node.children ? `
                <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px; border-top: 1px solid #444; padding-top: 20px;">
                    ${node.children.map(child => generateOrgNode(child)).join('')}
                </div>
            ` : ''}
        </div>
    `;
    return html;
}

// Global listener for Phase 16
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 16")) {
        renderPhase16Details();
        document.getElementById('phase16Section').scrollIntoView({ behavior: 'smooth' });
    }
});
