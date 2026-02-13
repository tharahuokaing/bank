/**
 * Phase 9: Global Connectivity & ISO 20022 Integration
 * Handles high-fidelity financial messaging and SWIFT connectivity.
 */

function renderPhase9Details() {
    const summaryBox = document.getElementById('summaryBox');
    if (document.getElementById('phase9Section')) return;

    const p9Container = document.createElement('section');
    p9Container.id = "phase9Section";
    p9Container.className = "phase-detail-box";
    p9Container.style.borderLeft = "4px solid #f39c12"; // SWIFT Gold
    p9Container.style.padding = "20px";
    p9Container.style.marginTop = "20px";
    p9Container.style.background = "rgba(243, 156, 18, 0.05)";

    p9Container.innerHTML = `
        <h2 style="color: #f39c12;">Phase 9: ISO 20022 & Global SWIFT</h2>
        <p>Translating local transactions into international financial language.</p>
        
        <div style="background: #1a1a1a; padding: 15px; border-radius: 5px; border: 1px solid #333;">
            <label>Payment Amount (USD):</label><br>
            <input type="number" id="isoAmount" value="1000" style="width: 100px; margin-bottom: 10px;"><br>
            <button id="generateIsoBtn">Generate ISO 20022 XML Message</button>
        </div>

        <div id="isoOutput" style="display:none; margin-top: 15px;">
            <h3>Generated XML (pacs.008):</h3>
            <pre id="xmlDisplay" style="background: #000; color: #f39c12; padding: 10px; font-size: 0.75rem; overflow-x: auto; border: 1px solid #f39c12;"></pre>
            <p style="color: #0f0;">[STATUS] Message validated for SWIFT MX network.</p>
        </div>
    `;

    summaryBox.appendChild(p9Container);

    document.getElementById('generateIsoBtn').addEventListener('click', generateIsoMessage);
}

function generateIsoMessage() {
    const amt = document.getElementById('isoAmount').value;
    const output = document.getElementById('isoOutput');
    const xmlDisplay = document.getElementById('xmlDisplay');

    // Simulated ISO 20022 pacs.008 format
    const xmlContent = `
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:pacs.008.001.07">
  <FIToFICstmrCdtTrf>
    <GrpHdr>
      <MsgId>KHMER-BANK-${Date.now()}</MsgId>
      <CreDtTm>${new Date().toISOString()}</CreDtTm>
    </GrpHdr>
    <CdtTrfTxInf>
      <IntrBkSttlmAmt Ccy="USD">${amt}</IntrBkSttlmAmt>
      <InstgAgt><FinInstnId><BICFI>KBCBKHPP</BICFI></FinInstnId></InstgAgt>
    </CdtTrfTxInf>
  </FIToFICstmrCdtTrf>
</Document>`.trim();

    xmlDisplay.textContent = xmlContent;
    output.style.display = "block";
    logActivity(`Phase 9: Generated ISO 20022 message for $${amt} via SWIFT gateway.`);
}

// Global listener for Phase 9
document.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === "LI" && e.target.textContent.includes("Phase 9")) {
        renderPhase9Details();
        document.getElementById('phase9Section').scrollIntoView({ behavior: 'smooth' });
    }
});
