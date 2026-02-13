/**
 * Phase 2: Regulatory & Legal Approval
 * Focuses on document verification and compliance tracking.
 */

const phase2ChecklistItems = [
    "Corporate Governance & Legal Identity",
    "Biographical & Fit and Proper Documentation",
    "Business Plan & Financial Projections",
    "Risk & Compliance Frameworks",
    "Operational Agreements"
];

function renderPhase2Details() {
    const summaryBox = document.getElementById('summaryBox');
    
    // Prevent duplicate rendering
    if (document.getElementById('phase2Section')) return;

    const p2Container = document.createElement('section');
    p2Container.id = "phase2Section";
    p2Container.className = "phase-detail-box";
    p2Container.style.borderLeft = "4px solid #ff0"; // Auditor/Legal Yellow
    p2Container.style.padding = "20px";
    p2Container.style.marginTop = "20px";

    p2Container.innerHTML = `
        <h2 style="color: #ff0;">Phase 2: Regulatory & Legal Approval</h2>
        <p>Status: <span id="complianceStatus">0% Complete</span></p>
        <div style="width: 100%; background: #333; height: 10px; margin-bottom: 20px;">
            <div id="complianceBar" style="width: 0%; height: 100%; background: #ff0; transition: 0.5s;"></div>
        </div>
        <form id="checklistForm" style="text-align: left;"></form>
    `;

    summaryBox.appendChild(p2Container);

    const form = document.getElementById('checklistForm');

    phase2ChecklistItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.style.marginBottom = "10px";
        div.innerHTML = `
            <input type="checkbox" id="item-${index}" class="phase2-check">
            <label for="item-${index}">${item}</label>
        `;
        form.appendChild(div);
    });

    // Add listener for progress tracking
    form.addEventListener('change', updateComplianceProgress);
}

function updateComplianceProgress() {
    const checks = document.querySelectorAll('.phase2-check');
    const checked = Array.from(checks).filter(c => c.checked).length;
    const percentage = Math.round((checked / checks.length) * 100);

    const bar = document.getElementById('complianceBar');
    const statusText = document.getElementById('complianceStatus');

    bar.style.width = percentage + "%";
    statusText.textContent = percentage + "% Complete";

    if (percentage === 100) {
        statusText.style.color = "#0f0";
        logActivity("Phase 2 Compliance: All documents verified.");
    }
}

// Global listener to trigger Phase 2 details
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 2")) {
        renderPhase2Details();
        // Scroll into view
        document.getElementById('phase2Section').scrollIntoView({ behavior: 'smooth' });
    }
});
