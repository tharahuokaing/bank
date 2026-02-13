/**
 * Phase 19: Bakong CBDC & Blockchain Integration
 * Simulates DLT-based settlement and KHQR payment rails.
 */

function renderPhase19Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase19Section')) return;

    const p19Container = document.createElement('section');
    p19Container.id = "phase19Section";
    p19Container.className = "phase-detail-box";
    p19Container.style.borderLeft = "4px solid #e91e63"; // Bakong Pink
    p19Container.style.padding = "20px";
    p19Container.style.background = "rgba(233, 30, 99, 0.05)";

    p19Container.innerHTML = `
        <h2 style="color: #e91e63;">Phase 19: Bakong Gateway (DLT)</h2>
        <p>Connecting to Hyperledger Iroha for real-time blockchain settlement.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div style="background: #111; padding: 15px; border: 1px solid #444;">
                <label>Tokenize Assets (USD):</label>
                <input type="number" id="tokenAmount" value="100" style="width: 100%; margin-top:5px;">
                <button id="mintTokenBtn" style="margin-top: 10px; width:100%; font-size: 0.8rem;">Mint Digital KHR/USD</button>
            </div>
            <div style="background: #111; padding: 15px; border: 1px solid #444; text-align: center;">
                <label>Merchant KHQR</label>
                <div id="qrPlaceholder" style="width: 100px; height: 100px; background: #222; margin: 10px auto; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; color: #666; border: 1px dashed #e91e63;">
                    WAITING...
                </div>
                <button id="genKHQRBtn" style="font-size: 0.8rem; width:100%;">Generate KHQR</button>
            </div>
        </div>

        <div id="blockchainLog" style="background: #000; color: #e91e63; padding: 10px; font-family: monospace; height: 80px; overflow-y: auto; border: 1px solid #444; font-size: 0.75rem;">
            > Initializing peer-to-peer node...
        </div>
    `;

    summaryBox.appendChild(p19Container);

    document.getElementById('mintTokenBtn').addEventListener('click', simulateMinting);
    document.getElementById('genKHQRBtn').addEventListener('click', generateMockKHQR);
}

function simulateMinting() {
    const amt = document.getElementById('tokenAmount').value;
    const log = document.getElementById('blockchainLog');
    
    log.innerHTML += `<br>> Requesting asset backing from NBC Vault...`;
    setTimeout(() => {
        log.innerHTML += `<br>> [BLOCK 0x${Math.random().toString(16).slice(2, 10)}] Minted ${amt} Bakong-USD.`;
        logActivity(`Phase 19: Tokenized $${amt} into the Bakong ecosystem.`);
    }, 1000);
}

function generateMockKHQR() {
    const qr = document.getElementById('qrPlaceholder');
    qr.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=BAKONG_KHQR_KHMER_BANK_ID_12345" style="width:100%; height:100%;">`;
    logActivity("Phase 19: Generated interoperable KHQR for merchant payment.");
}

// Global listener for Phase 19
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 19")) {
        renderPhase19Details();
        document.getElementById('phase19Section').scrollIntoView({ behavior: 'smooth' });
    }
});
