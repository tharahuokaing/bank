/**
 * Phase 5: Launch & Scaling
 * Simulates user growth and real-time transaction processing.
 */

function renderPhase5Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase5Section')) return;

    const p5Container = document.createElement('section');
    p5Container.id = "phase5Section";
    p5Container.className = "phase-detail-box";
    p5Container.style.borderLeft = "4px solid #b533ff"; // Growth Purple
    p5Container.style.padding = "20px";
    p5Container.style.marginTop = "20px";
    p5Container.style.background = "rgba(181, 51, 255, 0.05)";

    p5Container.innerHTML = `
        <h2 style="color: #b533ff;">Phase 5: Launch & Scaling</h2>
        <div style="display: flex; justify-content: space-around; margin-bottom: 20px;">
            <div class="stat-card">
                <span style="font-size: 0.8rem; display: block;">Active Customers</span>
                <strong id="customerCount" style="font-size: 1.5rem; color: #fff;">0</strong>
            </div>
            <div class="stat-card">
                <span style="font-size: 0.8rem; display: block;">Transactions/Sec</span>
                <strong id="tpsCount" style="font-size: 1.5rem; color: #fff;">0</strong>
            </div>
        </div>
        <div id="launchProgress" style="height: 5px; background: #333; width: 100%; margin-bottom: 15px;">
            <div id="launchBar" style="width: 0%; height: 100%; background: #b533ff; transition: 0.3s;"></div>
        </div>
        <button id="launchBtn">Initiate Public Launch</button>
    `;

    summaryBox.appendChild(p5Container);

    document.getElementById('launchBtn').addEventListener('click', simulateScaling);
}

function simulateScaling() {
    const btn = document.getElementById('launchBtn');
    const customerDisplay = document.getElementById('customerCount');
    const tpsDisplay = document.getElementById('tpsCount');
    const bar = document.getElementById('launchBar');
    
    btn.disabled = true;
    btn.textContent = "Scaling in Progress...";
    logActivity("Phase 5: Public launch sequence initiated.");

    let customers = 0;
    let tps = 0;
    let progress = 0;

    const scaleInterval = setInterval(() => {
        if (progress < 100) {
            // Simulate exponential growth logic
            customers += Math.floor(Math.random() * 500) + 100;
            tps = (Math.random() * 50).toFixed(2);
            progress += 2;

            customerDisplay.textContent = customers.toLocaleString();
            tpsDisplay.textContent = tps;
            bar.style.width = progress + "%";
        } else {
            clearInterval(scaleInterval);
            btn.textContent = "Platform Stable";
            btn.style.borderColor = "#0f0";
            logActivity(`Phase 5: Scaling successful. Reached ${customers} active users.`);
            alert("Launch Success! The Digital Core is handling peak transaction loads.");
        }
    }, 100);
}

// Global listener for Phase 5
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 5")) {
        renderPhase5Details();
        document.getElementById('phase5Section').scrollIntoView({ behavior: 'smooth' });
    }
});