/**
 * Master Index Loader
 * Dynamically injects all 21 phases into the DOM.
 */

const projectPhases = [
    "phase.js", "phase1.js", "phase2.js", "phase3.js", "phase4.js", 
    "phase5.js", "phase6.js", "phase7.js", "phase8.js",
    "phase9.js", "phase10.js", "phase11.js", "phase12.js",
    "phase13.js", "phase14.js", "phase15.js", "phase16.js",
    "stress_test.js", "investor_relations.js", "bakong_integration.js", 
    "soc_defense.js", "charter_logic.js", "search.js", "ai_core.js", "security_2fa.js"
];

function loadProject() {
    console.log("Initializing Khmer Bank Master Loader...");
    
    projectPhases.forEach((file, index) => {
        const script = document.createElement('script');
        script.src = `js/${file}`; // Assumes your scripts are in a 'js' folder
        script.async = false; // Maintain execution order
        document.head.appendChild(script);
        
        script.onload = () => {
            if (index === projectPhases.length - 1) {
                console.log("All 21 Phases and Support Modules Loaded.");
            }
        };
    });
}

loadProject();
