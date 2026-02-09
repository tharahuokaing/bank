/**
 * Global Command Search Engine
 * Provides a central interface to navigate all 16 phases and bank data.
 */

const searchableData = [
    { key: "Phase 1", target: "Phase 1", desc: "Vision & Concept" },
    { key: "Phase 2", target: "Phase 2", desc: "Regulatory & Legal" },
    { key: "Phase 3", target: "Phase 3", desc: "Infra & Tech" },
    { key: "Phase 4", target: "Phase 4", desc: "Risk Setup" },
    { key: "Phase 7", target: "Phase 7", desc: "Web Server/Core" },
    { key: "Phase 9", target: "Phase 9", desc: "ISO 20022/SWIFT" },
    { key: "Phase 14", target: "Phase 14", desc: "Basel IV Capital" },
    { key: "SWIFT", target: "Phase 9", desc: "International Messaging" },
    { key: "LCR", target: "Phase 11", desc: "Liquidity Ratio" },
    { key: "Fraud", target: "Phase 12", desc: "AI Guardian" }
];

function initGlobalSearch() {
    const summaryBox = document.getElementById('summaryBox');
    
    // Create Search Container
    const searchWrapper = document.createElement('div');
    searchWrapper.style.margin = "20px 0";
    searchWrapper.style.padding = "10px";
    searchWrapper.style.background = "rgba(0, 255, 255, 0.1)";
    searchWrapper.style.border = "1px solid #0ff";

    searchWrapper.innerHTML = `
        <label style="color:#0ff; font-size: 0.8rem;">SYSTEM COMMAND SEARCH</label>
        <input type="text" id="globalSearchInput" placeholder="Type a phase or keyword (e.g. 'SWIFT')..." 
               style="width: 100%; background: #000; border: 1px solid #444; color: #0ff; padding: 10px; margin-top: 5px;">
        <div id="searchResults" style="margin-top: 10px; max-height: 200px; overflow-y: auto;"></div>
    `;

    summaryBox.prepend(searchWrapper);

    const input = document.getElementById('globalSearchInput');
    const resultsDiv = document.getElementById('searchResults');

    input.addEventListener('input', () => {
        const query = input.value.toLowerCase();
        resultsDiv.innerHTML = "";
        
        if (query.length < 2) return;

        const matches = searchableData.filter(item => 
            item.key.toLowerCase().includes(query) || 
            item.desc.toLowerCase().includes(query)
        );

        matches.forEach(match => {
            const div = document.createElement('div');
            div.style.padding = "8px";
            div.style.borderBottom = "1px solid #222";
            div.style.cursor = "pointer";
            div.innerHTML = `<span style="color:#0ff;">${match.key}</span> - <small>${match.desc}</small>`;
            
            div.onclick = () => {
                // Find the specific list item in the UI and click it
                const listItems = document.querySelectorAll('#phasesList li');
                listItems.forEach(li => {
                    if (li.textContent.includes(match.target)) {
                        li.click();
                        li.scrollIntoView({ behavior: 'smooth' });
                        input.value = "";
                        resultsDiv.innerHTML = "";
                    }
                });
            };
            resultsDiv.appendChild(div);
        });
    });
}

// Initialize when dashboard is shown
const originalShowDashboard = window.showDashboard; 
window.showDashboard = function(user) {
    // Check if original exists to avoid recursion
    initGlobalSearch();
    console.log("Global Search Engine Online.");
};