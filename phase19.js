/**
 * Phase 18: Investor Relations & Financial Reporting
 * Generates an executive summary for shareholders and analysts.
 */

function renderPhase18Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase18Section')) return;

    const p18Container = document.createElement('section');
    p18Container.id = "phase18Section";
    p18Container.className = "phase-detail-box";
    p18Container.style.borderLeft = "4px solid #34495e"; // Corporate Navy
    p18Container.style.padding = "20px";
    p18Container.style.marginTop = "20px";
    p18Container.style.background = "rgba(52, 73, 94, 0.05)";

    p18Container.innerHTML = `
        <h2 style="color: #34495e;">Phase 18: Investor Relations Portal</h2>
        <p>Transparency is the currency of trust. Generate your annual disclosure report.</p>
        
        <div id="reportGenerator" style="background: #111; padding: 20px; border: 1px solid #444;">
            <h3 style="margin-top:0;">Annual Report Compiler</h3>
            <button id="compileReportBtn" style="width: 100%; background: #34495e; color: #fff;">Compile Fiscal Report 2026</button>
            
            <div id="compiledReport" style="display:none; margin-top: 20px; background: #fff; color: #333; padding: 30px; font-family: 'Times New Roman', serif;">
                <div style="text-align: center; border-bottom: 2px solid #333; margin-bottom: 20px;">
                    <h1 style="margin:0;">KHMER BANK PLC.</h1>
                    <p>Annual Disclosure & Solvency Report</p>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <strong>Capital Stability (Basel IV)</strong>
                        <p id="repCAR">CAR: --</p>
                    </div>
                    <div>
                        <strong>ESG Performance</strong>
                        <p id="repESG">Rating: --</p>
                    </div>
                </div>
                <hr>
                <div style="font-size: 0.9rem; font-style: italic;">
                    "Our digital core, established in 2024, now serves over 500,000 active users with a focus on sustainable growth and regional stability."
                </div>
                <button onclick="window.print()" style="margin-top: 20px; background: #eee; color: #000; font-size: 0.7rem;">Download as PDF</button>
            </div>
        </div>
    `;

    summaryBox.appendChild(p18Container);

    document.getElementById('compileReportBtn').addEventListener('click', compileFinancialData);
}

function compileFinancialData() {
    const report = document.getElementById('compiledReport');
    const btn = document.getElementById('compileReportBtn');
    
    // Fetch data from other phases (using IDs we defined earlier)
    const carVal = document.getElementById('carResult')?.textContent || "18.5%";
    const esgVal = document.getElementById('esgRating')?.textContent || "A";

    btn.textContent = "Processing Ledger...";
    
    setTimeout(() => {
        document.getElementById('repCAR').textContent = `Capital Adequacy: ${carVal}`;
        document.getElementById('repESG').textContent = `ESG Rating: ${esgVal}`;
        
        report.style.display = "block";
        btn.textContent = "Report Compiled Successfully";
        btn.style.background = "#27ae60";
        
        logActivity("Phase 18: Investor Disclosure Report generated.");
    }, 1200);
}

// Global listener for Phase 18
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 18")) {
        renderPhase18Details();
        document.getElementById('phase18Section').scrollIntoView({ behavior: 'smooth' });
    }
});
