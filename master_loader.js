/**
 * Master Index Loader
 * Dynamically injects all 21 phases into the DOM.
 */

const projectPhases = [
    "script.js", "script2.js", "script3.js", "script4.js", 
    "script5.js", "script6.js", "script7.js", "script8.js",
    "script9.js", "script10.js", "script11.js", "script12.js",
    "script13.js", "script14.js", "script15.js", "script16.js",
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
