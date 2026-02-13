/**
 * HuokaingThara - Core Logic
 * Handles Authentication, RBAC, and System Simulations
 */

// --- 1. Data Structures ---
const users = [
    { username: "admin", password: "dutyfree", role: "Administrator" },
    { username: "auditor", password: "dutyfree", role: "Auditor" },
    { username: "staff", password: "dutyfree", role: "Bank Staff" }
    { username: "huokaingthara", password: "dutyfree", role: "Cybersecurity" },
];

const phases = [
    "Phase 1: Vision & Concept Development",
    "Phase 2: Regulatory & Legal Approval",
    "Phase 3: Infrastructure & Technology Build",
    "Phase 4: Operations & Risk Setup",
    "Phase 5: Launch & Scaling",
    "Phase 6: Aligning with World Bank Standards",
    "Phase 7: Web Server Development (The Digital Core)",
    "Phase 8: First Deployment Strategy",
    "Phase 9: Global Connectivity & ISO 20022 Integration",
    "Phase 10: Digital Public Infrastructure (DPI) & Open Finance",
    "Phase 11: Real-Time Regulatory Reporting (RegTech)",
    "Phase 12: Operational Resilience (DORA & Beyond)",
    "Phase 13: Capital Adequacy & Basel IV Compliance",
    "Phase 14: Governance & The Four-Eye Principle",
    "Phase 15: Environmental, Social, and Governance (ESG) Maturity",
    "Phase 16: The Full Structure Completion (Final Org Chart)"
];

const phase2ChecklistItems = [
    "Corporate Governance & Legal Identity",
    "Biographical & Fit and Proper Documentation",
    "Business Plan & Financial Projections",
    "Risk & Compliance Frameworks",
    "Operational Agreements"
];

const worldBanks = [
    { name: "HSBC Bank", country: "UK", swift: "MIDLGB22" },
    { name: "JPMorgan Chase", country: "USA", swift: "CHASUS33" },
    { name: "KB Bank", country: "Cambodia", swift: "KBCBKHPP" },
    { name: "Da Afghanistan Bank", country: "Afghanistan", swift: "DABFAFKA" },
    { name: "Bank Republic of Albania", country: "Albania", swift: "BANKALTR" },
    { name: "Banque d'Algerie", country: "Algeria", swift: "DZBKDZAL" },
    { name: "Andorra Banc Agricol Reig", country: "Andorra", swift: "ABRAADAD" },
    { name: "Banco Nacional de Angola", swift: "BANGAOLU", country: "Angola" },
    { name: "Antigua Commercial Bank", country: "Antigua and Barbuda", swift: "ACBBAGAG" },
    { name: "Banco de la Nación Argentina", country: "Argentina", swift: "NACNARBA" },
    { name: "Central Bank of Armenia", country: "Armenia", swift: "CBAMAM22" },
    { name: "Commonwealth Bank", country: "Australia", swift: "CTBAAU2S" },
    { name: "Erste Group Bank", country: "Austria", swift: "GIBAATWW" },
    { name: "International Bank of Azerbaijan", country: "Azerbaijan", swift: "IBAZAZ22" },
    { name: "Central Bank of The Bahamas", country: "Bahamas", swift: "CBBHBSNS" },
    { name: "National Bank of Bahrain", country: "Bahrain", swift: "NBBHBHBM" },
    { name: "Sonali Bank", country: "Bangladesh", swift: "SBNKBDDH" },
    { name: "Barbados National Bank", country: "Barbados", swift: "BNBABBBR" },
    { name: "Belarusbank", country: "Belarus", swift: "AKBBBY2X" },
    { name: "KBC Bank", country: "Belgium", swift: "KREDBEBB" },
    { name: "Belize Bank", country: "Belize", swift: "BBLZBZBE" },
    { name: "Ecobank Benin", country: "Benin", swift: "ECOCBJBJ" },
    { name: "Bank of Bhutan", country: "Bhutan", swift: "BHTNBTBT" },
    { name: "Banco Central de Bolivia", country: "Bolivia", swift: "BCBOLPBX" },
    { name: "Central Bank of Bosnia and Herzegovina", country: "Bosnia and Herzegovina", swift: "CBBHBA22" },
    { name: "First National Bank of Botswana", country: "Botswana", swift: "FIRNBWGX" },
    { name: "Banco do Brasil", country: "Brazil", swift: "BRASBRRJ" },
    { name: "Baiduri Bank", country: "Brunei", swift: "BAIDBNBS" },
    { name: "UniCredit Bulbank", country: "Bulgaria", swift: "UNCRBGSF" },
    { name: "Ecobank Burkina", country: "Burkina Faso", swift: "ECOCBFBF" },
    { name: "Banque de la République du Burundi", country: "Burundi", swift: "BDIUBIBI" },
    { name: "Banco de Cabo Verde", country: "Cabo Verde", swift: "BCVECVPC" },
    { name: "Afriland First Bank", country: "Cameroon", swift: "AFRIKMCX" },
    { name: "Royal Bank of Canada", country: "Canada", swift: "ROYCCATT" },
    { name: "Banque des Etats de l'Afrique Centrale", country: "Central African Republic", swift: "BEACCFAC" },
    { name: "Commercial Bank of Chad", country: "Chad", swift: "CBCHTDND" },
    { name: "Banco de Chile", country: "Chile", swift: "BCHICLBC" },
    { name: "Industrial and Commercial Bank of China", country: "China", swift: "ICBKCNBJ" },
    { name: "Bancolombia", country: "Colombia", swift: "COLOCOBM" },
    { name: "Banque Centrale des Comores", country: "Comoros", swift: "BCOCKMKM" },
    { name: "Rawbank", country: "Congo (DRC)", swift: "RAWBKIZS" },
    { name: "Banco Nacional de Costa Rica", country: "Costa Rica", swift: "BNCRCRSJ" },
    { name: "Société Générale Côte d'Ivoire", country: "Côte d'Ivoire", swift: "SGCICIAB" },
    { name: "Zagrebačka banka", country: "Croatia", swift: "ZABAHR2X" },
    { name: "Banco Central de Cuba", country: "Cuba", swift: "BCCUCUHH" },
    { name: "Bank of Cyprus", country: "Cyprus", swift: "BCYPCY2N" },
    { name: "Česká spořitelna", country: "Czechia", swift: "CSASPPPR" },
    { name: "Danske Bank", country: "Denmark", swift: "DABADK22" },
    { name: "Banque de Djibouti et du Moyen Orient", country: "Djibouti", swift: "BDMODJJB" },
    { name: "National Bank of Dominica", country: "Dominica", swift: "NBODDMCC" },
    { name: "Banco de Reservas", country: "Dominican Republic", swift: "BRSADODO" },
    { name: "Banco Pichincha", country: "Ecuador", swift: "PICHECQU" },
    { name: "National Bank of Egypt", country: "Egypt", swift: "NBEGEGCX" },
    { name: "Banco Agrícola", country: "El Salvador", swift: "BCOASVSS" },
    { name: "Banco Nacional de Guinea Ecuatorial", country: "Equatorial Guinea", swift: "BNGEGQSS" },
    { name: "Commercial Bank of Eritrea", country: "Eritrea", swift: "CBERERAS" },
    { name: "Swedbank AS", country: "Estonia", swift: "HABAEE2X" },
    { name: "Commercial Bank of Ethiopia", country: "Ethiopia", swift: "CBETETAA" },
    { name: "Westpac Fiji", country: "Fiji", swift: "WPACFJFX" },
    { name: "Nordea Bank", country: "Finland", swift: "NDEAFHHX" },
    { name: "BNP Paribas", country: "France", swift: "BNPAFRPP" },
    { name: "BGFIBank Gabon", country: "Gabon", swift: "BGFIGAGA" },
    { name: "Standard Chartered Gambia", country: "Gambia", swift: "SCBLGMBJ" },
    { name: "Bank of Georgia", country: "Georgia", swift: "BAGAGE22" },
    { name: "Deutsche Bank", country: "Germany", swift: "DEUTDEFF" },
    { name: "GCB Bank", country: "Ghana", swift: "GCBLGHAC" },
    { name: "National Bank of Greece", country: "Greece", swift: "ETHNGRAT" },
    { name: "Republic Bank", country: "Grenada", swift: "NCBKGDGD" },
    { name: "Banco Industrial", country: "Guatemala", swift: "BAINGTGT" },
    { name: "Ecobank Guinea", country: "Guinea", swift: "ECOCGNCON" },
    { name: "Banco de Africa Ocidental", country: "Guinea-Bissau", swift: "BAOGGWBS" },
    { name: "Guyana Bank for Trade and Industry", country: "Guyana", swift: "GBTIGYGE" },
    { name: "Banque de la République d'Haïti", country: "Haiti", swift: "BRHHTHPA" },
    { name: "Banco Atlántida", country: "Honduras", swift: "BANTHTTE" },
    { name: "OTP Bank", country: "Hungary", swift: "OTPVHUHB" },
    { name: "Landsbankinn", country: "Iceland", swift: "LAISISRE" },
    { name: "State Bank of India", country: "India", swift: "SBININBB" },
    { name: "Bank Mandiri", country: "Indonesia", swift: "BMRIIDJA" },
    { name: "Bank Melli Iran", country: "Iran", swift: "MELIIRTH" },
    { name: "Trade Bank of Iraq", country: "Iraq", swift: "TBIQIQBA" },
    { name: "Bank of Ireland", country: "Ireland", swift: "BOFIIE2D" },
    { name: "Bank Leumi", country: "Israel", swift: "LUMIILIT" },
    { name: "Intesa Sanpaolo", country: "Italy", swift: "BCITITMM" },
    { name: "National Commercial Bank Jamaica", country: "Jamaica", swift: "NCBJJMKN" },
    { name: "Mitsubishi UFJ Financial Group", country: "Japan", swift: "BOTKJPJT" },
    { name: "Arab Bank", country: "Jordan", swift: "ARABJOAM" },
    { name: "Halyk Bank", country: "Kazakhstan", swift: "ABKZKZAXXX" },
    { name: "KCB Bank Kenya", country: "Kenya", swift: "KCBLKENX" },
    { name: "Bank of Kiribati", country: "Kiribati", swift: "BOKIKIKI" },
    { name: "Kuwait Finance House", country: "Kuwait", swift: "KFHOKWKW" },
    { name: "DemirBank", country: "Kyrgyzstan", swift: "DEMBKG22" },
    { name: "Banque Pour Le Commerce Exterieur Lao", country: "Laos", swift: "BCELVTEV" },
    { name: "Citadele Banka", country: "Latvia", swift: "PARALV22" },
    { name: "Bank Audi", country: "Lebanon", swift: "AUDBLBBE" },
    { name: "Standard Lesotho Bank", country: "Lesotho", swift: "SBICLSMX" },
    { name: "Liberia Bank for Development and Investment", country: "Liberia", swift: "LBDILRRL" },
    { name: "Jumhouria Bank", country: "Libya", swift: "JUHBLLYX" },
    { name: "LGT Bank", country: "Liechtenstein", swift: "LGTBLI22" },
    { name: "SEB Bankas", country: "Lithuania", swift: "CBVILT2X" },
    { name: "Banque Internationale à Luxembourg", country: "Luxembourg", swift: "BILLLULL" },
    { name: "National Bank of Malawi", country: "Malawi", swift: "NBMAMWMW" },
    { name: "Maybank", country: "Malaysia", swift: "MBBEMYKL" },
    { name: "Bank of Maldives", country: "Maldives", swift: "MALBMVMV" },
    { name: "BDM-SA", country: "Mali", swift: "BDMAMLBK" },
    { name: "Bank of Valletta", country: "Malta", swift: "BOVAMTMT" },
    { name: "Bank of the Marshall Islands", country: "Marshall Islands", swift: "BOMIMHMA" },
    { name: "Banque Centrale de Mauritanie", country: "Mauritania", swift: "BCMAMRNU" },
    { name: "MCB Bank", country: "Mauritius", swift: "MCBLMUMU" },
    { name: "BBVA México", country: "Mexico", swift: "BCMRMXMM" },
    { name: "Bank of Micronesia", country: "Micronesia", swift: "BOMIFMKA" },
    { name: "Moldova Agroindbank", country: "Moldova", swift: "AGRBMD2X" },
    { name: "Compagnie Monégasque de Banque", country: "Monaco", swift: "CMBAMCMC" },
    { name: "Khan Bank", country: "Mongolia", swift: "AGMOMNUB" },
    { name: "Crnogorska komercijalna banka", country: "Montenegro", swift: "CKBAMEPG" },
    { name: "Attijariwafa Bank", country: "Morocco", swift: "BCMA MA MC" },
    { name: "Millennium bim", swift: "BIMOMZMA", country: "Mozambique" },
    { name: "KBZ Bank", country: "Myanmar", swift: "KBZBMYMM" },
    { name: "Bank Windhoek", country: "Namibia", swift: "BWKHHX" },
    { name: "Bank of Nauru", country: "Nauru", swift: "BONANRNR" },
    { name: "Nepal Bank", country: "Nepal", swift: "NEPBNPKA" },
    { name: "ING Bank", country: "Netherlands", swift: "INGBNL2A" },
    { name: "ANZ Bank New Zealand", country: "New Zealand", swift: "ANZBNZ22" },
    { name: "Banco de la Producción", country: "Nicaragua", swift: "BPROUSNI" },
    { name: "Ecobank Niger", swift: "ECOCNENI", country: "Niger" },
    { name: "First Bank of Nigeria", country: "Nigeria", swift: "FBNINGLA" },
    { name: "Koryo Bank", country: "North Korea", swift: "KOROPYPY" },
    { name: "Komercijalna banka Skopje", country: "North Macedonia", swift: "KBSKMK2X" },
    { name: "DNB Bank", country: "Norway", swift: "DNBANO22" },
    { name: "Bank Muscat", country: "Oman", swift: "BMUSOMMU" },
    { name: "Habib Bank", country: "Pakistan", swift: "HABBPKKA" },
    { name: "Bank of Palau", country: "Palau", swift: "BOPLPWKB" },
    { name: "Banco General", country: "Panama", swift: "GNBAPA PA" },
    { name: "Bank South Pacific", country: "Papua New Guinea", swift: "BOSPPGPM" },
    { name: "Banco Continental", country: "Paraguay", swift: "CONTPYPA" },
    { name: "Banco de Crédito del Perú", country: "Peru", swift: "BCPLPEPL" },
    { name: "BDO Unibank", country: "Philippines", swift: "BNORPHMM" },
    { name: "PKO Bank Polski", country: "Poland", swift: "BPKOPLPW" },
    { name: "Banco Santander Totta", country: "Portugal", swift: "TOTAPTPL" },
    { name: "Qatar National Bank", country: "Qatar", swift: "QNBAQAQA" },
    { name: "Banca Comercială Română", country: "Romania", swift: "RNCBROBU" },
    { name: "Sberbank", country: "Russia", swift: "SABRRUMM" },
    { name: "Bank of Kigali", country: "Rwanda", swift: "BKIGRWKK" },
    { name: "St Kitts-Nevis-Anguilla National Bank", country: "Saint Kitts and Nevis", swift: "SKNANBKB" },
    { name: "Bank of Saint Lucia", country: "Saint Lucia", swift: "BOSLLC" },
    { name: "Bank of St. Vincent and the Grenadines", country: "Saint Vincent and the Grenadines", swift: "BOSVVCVC" },
    { name: "Samoa Commercial Bank", country: "Samoa", swift: "SAMCBSSM" },
    { name: "Banca di San Marino", country: "San Marino", swift: "BSMASMSM" },
    { name: "Banco Internacional de São Tomé e Príncipe", country: "Sao Tome and Principe", swift: "BISTSTST" },
    { name: "Saudi National Bank", country: "Saudi Arabia", swift: "NCBBSARI" },
    { name: "Société Générale Sénégal", country: "Senegal", swift: "SGBS SN DA" },
    { name: "Banca Intesa Beograd", country: "Serbia", swift: "BINTRSBG" },
    { name: "Seychelles Commercial Bank", country: "Seychelles", swift: "SAVYSCMA" },
    { name: "Sierra Leone Commercial Bank", country: "Sierra Leone", swift: "SLCOSLFR" },
    { name: "DBS Bank", country: "Singapore", swift: "DBSSSGGS" },
    { name: "Slovenská sporiteľňa", country: "Slovakia", swift: "GIBA SK BX" },
    { name: "NLB Banka", country: "Slovenia", swift: "LJBA SI 2X" },
    { name: "Central Bank of Solomon Islands", country: "Solomon Islands", swift: "CBSIBSHI" },
    { name: "Central Bank of Somalia", country: "Somalia", swift: "CBSOSOMM" },
    { name: "Standard Bank", country: "South Africa", swift: "SBZAJJ" },
    { name: "Shinhan Bank", country: "South Korea", swift: "SHBK KR SE" },
    { name: "Bank of South Sudan", country: "South Sudan", swift: "BSSDJUBA" },
    { name: "Banco Santander", country: "Spain", swift: "BSCHESMM" },
    { name: "Bank of Ceylon", country: "Sri Lanka", swift: "BCEYCECO" },
    { name: "Bank of Khartoum", country: "Sudan", swift: "BOKHSDKH" },
    { name: "Hakrinbank", country: "Suriname", swift: "HKRBSRPB" },
    { name: "SEB", country: "Sweden", swift: "ESSE SESV" },
    { name: "UBS", country: "Switzerland", swift: "UBSWCHZH" },
    { name: "Commercial Bank of Syria", country: "Syria", swift: "CBSY SY DA" },
    { name: "Orienbank", country: "Tajikistan", swift: "OJBKTJD2" },
    { name: "CRDB Bank", country: "Tanzania", swift: "CRDBTZTZ" },
    { name: "Bangkok Bank", country: "Thailand", swift: "BKKBTHBK" },
    { name: "Banco Nacional de Comercio de Timor-Leste", country: "Timor-Leste", swift: "BNCTLTLD" },
    { name: "Ecobank Togo", country: "Togo", swift: "ECOCTG TG" },
    { name: "Bank of Tonga", country: "Tonga", swift: "BOTTTONU" },
    { name: "Republic Bank Trinidad and Tobago", country: "Trinidad and Tobago", swift: "REPUTT POS" },
    { name: "Banque de Tunisie", country: "Tunisia", swift: "BTBKTNTN" },
    { name: "Ziraat Bankası", country: "Turkey", swift: "TCZBTRAA" },
    { name: "State Bank for Foreign Economic Affairs", country: "Turkmenistan", swift: "TFEATM22" },
    { name: "National Bank of Tuvalu", country: "Tuvalu", swift: "NBTVTVTV" },
    { name: "Stanbic Bank Uganda", country: "Uganda", swift: "SBICUGKX" },
    { name: "PrivatBank", country: "Ukraine", swift: "PBKSUA2X" },
    { name: "First Abu Dhabi Bank", country: "UAE", swift: "NBADAEAD" },
    { name: "Banco de la República", country: "Uruguay", swift: "BUREUYMO" },
    { name: "National Bank of Uzbekistan", country: "Uzbekistan", swift: "NBFAUZ2X" },
    { name: "National Bank of Vanuatu", country: "Vanuatu", swift: "NBVVVUVU" },
    { name: "Banco de Venezuela", country: "Venezuela", swift: "BAVECACC" },
    { name: "Vietcombank", country: "Vietnam", swift: "BFTV VNVN" },
    { name: "Central Bank of Yemen", country: "Yemen", swift: "CBYEYESA" },
    { name: "Zambia National Commercial Bank", country: "Zambia", swift: "ZNCOZMLU" },
    { name: "CBZ Bank", country: "Zimbabwe", swift: "COBZZWHX" }
];

// --- 2. Security & Session Logic ---
let inactivityTimer;

function resetTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        alert("សម័យរយៈពេលប្រើប្រាស់បានផុតកំណត់។ សូមចូលឡើងវិញ!");
        logout(true); // Forced logout
    }, 120000); // 2 minutes
}

document.addEventListener("mousemove", resetTimer);
document.addEventListener("keypress", resetTimer);

// --- 3. UI Rendering Functions ---

function aiSentientGreeting(user) {
    const greetings = [
        `Hello ${user.username}, your digital guardian is online.`,
        `Greetings ${user.username}, ready to safeguard operations.`,
        `Welcome ${user.username}, your AI assistant is awake.`
    ];
    const greetMsg = greetings[Math.floor(Math.random() * greetings.length)];
    const aiMsg = document.createElement("p");
    aiMsg.style.color = "#0ff";
    aiMsg.style.fontStyle = "italic";
    aiMsg.textContent = greetMsg;
    document.getElementById("summaryBox").prepend(aiMsg);
}

function showPhasesList() {
    const list = document.getElementById("phasesList");
    list.innerHTML = "";
    phases.forEach(phase => {
        const li = document.createElement("li");
        li.textContent = phase;
        list.appendChild(li);
    });
}

function applyRoleTheme(role) {
    const body = document.body;
    const themes = {
        "Administrator": { bg: "#111", color: "#0ff" },
        "Auditor": { bg: "#222", color: "#ff0" },
        "Bank Staff": { bg: "#333", color: "#0f0" }
    };
    const theme = themes[role] || { bg: "#000", color: "#fff" };
    body.style.backgroundColor = theme.bg;
    body.style.color = theme.color;
}

// --- 4. Core Actions ---

function loginSuccess(user) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("summaryBox").style.display = "block";
    
    // Clear and Redraw
    const summary = document.getElementById("summaryBox");
    applyRoleTheme(user.role);
    aiSentientGreeting(user);
    showPhasesList();
    logActivity(`User ${user.username} logged in as ${user.role}`);
}

function logActivity(action) {
    console.log(`[LOG]: ${new Date().toLocaleTimeString()} - ${action}`);
    // You can also append this to a <ul> in the UI if desired
}

function logout(forced = false) {
    if (forced || confirm("តើអ្នកចង់ចាកចេញពីប្រព័ន្ធ?")) {
        localStorage.removeItem("loggedUser");
        location.reload(); // Refresh to clear all states
    }
}

// --- 5. Event Listeners ---

document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const userIn = document.getElementById("username").value;
    const passIn = document.getElementById("password").value;
    
    const user = users.find(u => u.username === userIn && u.password === passIn);
    
    if (user) {
        localStorage.setItem("loggedUser", JSON.stringify(user));
        loginSuccess(user);
    } else {
        document.getElementById("loginMessage").textContent = "Invalid Credentials";
    }
});

document.getElementById("logoutBtn").addEventListener("click", () => logout());

// Initialize
window.onload = () => {
    const savedUser = localStorage.getItem("loggedUser");
    if (savedUser) {
        loginSuccess(JSON.parse(savedUser));
    }
    resetTimer();
};
