(function () {
    getContributers();
})();
var words = [
        'Machine-learning',
        'AI',
        'Computer Vision',
        'Distributed',
        'Load Balanced',
        'SEO',
        'Big Data',
        'Blockchain',
        'Scalability',
        'Concurrency',
        'Algorithm',
        'Virtualization',
        'Engine',
        'Cloud Computing',
        'VR',
        'Crowdfunding',
        'Startup',
        'Growth Hacking',
        'DevOps',
        'Backend',
        'Full-Stack',
        'Caching',
        'Cryptocurrency',
        'Mobile',
        'Architecture',
        'Stream',
        'CGI',
        'Riley',
        'Agile',
        'GUI',
        'Centralized',
        'Principle',
        'Technique',
        'Refactoring',
        'Singleton',
        'Decision Tree',
        'Legacy',
        'Computational',
        'Complexity',
        'Analysis',
        'Amortized',
        'Intersection',
        'Proof',
        'IDE',
        'Software',
        'Pushdown Automata',
        'Context-free grammar',
        'Regular Expression',
        'Deterministic Finite Automata',
        'Pumping Lemma',
        'Decidability',
        'Turing Machine'
];
var decline_job_intros = [
        'Thank you for the offer ',
        'I regret to inform ',
        'I dont really want to work for '
];
var decline_job_finisher = [
    ' , but I took another position.',
    ' , but you guys suck!',
    ' , I will own you one day.',
    ' NOW GET OUT OF MY SIGHT!'
];
var company_names = [
    'Downfeet',
    'Lava-.-ly'
];
var finisher = [
    'Industries',
    'Limited',
    'Incorporated',
    'Family',
    'Team',
    'Software',
    'Architecture',
    'Blockchain',
    'Cryptocurrency',
    'Quest',
    'Networking',
    'Source',
    'Squared',
    'Things',
    'Stuff',
    'Redacted',
    'Solutions'
];
function buzzword() {
    var index = document.getElementById("list");
    var picked = index.options[index.selectedIndex].value;
    var target = document.getElementById('target');
    target.innerText = "";
    var x;
    for(x = 0; x < picked; x++) {
        var random = words[Math.floor(Math.random() * words.length)];
        target.innerText += " " + random;
    }
    }
function decline_job(){
    var index = document.getElementById('decline_job_list');
    var picked = index.options[index.selectedIndex].value;
    var target = document.getElementById('decline_job_target');
    target.innerText = "";
    
    var random = decline_job_intros[Math.floor(Math.random() * decline_job_intros.length)];
    target.innerText += " " + random;
    random = company_names[Math.floor(Math.random() * company_names.length)];
    target.innerText += " " + random;
    random = decline_job_finisher[Math.floor(Math.random() * decline_job_finisher.length)];
    target.innerText += " " + random;
    
}
function company_name(){
    var index = document.getElementById("company_name_list");
    var picked = index.options[index.selectedIndex].value;
    var target = document.getElementById("company_name_target");
    target.innerText = "";
    var x;
    /* if company name has more than 1 word add a finisher */
    for(x = 0; x < picked-1; x++) {
        var random = words[Math.floor(Math.random() * words.length)];
        target.innerText += " " + random;
    }
    if(picked>1){
        var random = finisher[Math.floor(Math.random() * finisher.length)];
        target.innerText += " " + random;
    }
}