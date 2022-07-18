


module.exports = {
getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req,res) =>{
        const fortunes = [
            "Dont let your limitations overshadow your talents.","Dont just spend time. Invest it.","Do not underestimate yourself. Human beings have unlimited potentials.","Determination is what you need now.","Congratulations! You are on your way."
        ];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
},
getInspire: (req,res) =>{
    const inspirations = [
        "You can do this!","Keep Going.","Find your why.","I have not failed. I've just found 10,000 ways that won't work.","You got this!"
    ];
    let randomIndex = Math.floor(Math.random() * inspirations.length);
    let randomInspiration = inspirations[randomIndex];
    res.status(200).send(randomInspiration);
},
getTime: (req,res) =>{
    const timeTips = [
        "Plan ahead","Keep track of appointments with a planner.","Get a wristwatch.","Plan to be early to give yourself enough time.","Set timers."
    ];
    let randomIndex = Math.floor(Math.random() * timeTips.length);
    let randomTimetips = timeTips[randomIndex];
    res.status(200).send(randomTimetips);
},
getResume: (req,res) =>{
    const resumeTips = [
        "Spell check!","Use a professional email.","Keep it simple","Use information relevant to the job you are applying for.","Use keywords that match the job posting in your resume."
    ];
    let randomIndex = Math.floor(Math.random() * resumeTips.length);
    let randomResumetips = resumeTips[randomIndex];
    res.status(200).send(randomResumetips);
}
};