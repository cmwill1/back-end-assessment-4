const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneBtn")
const inspireBtn = document.getElementById("inspireBtn")
const timeBtn = document.getElementById("timeBtn")
const resumeBtn = document.getElementById("resumeBtn")
// const accomplishForm = document.getElementById("accomplish")



// const BaseUrl = 'http://localhost:4000'

const getCompliment = () => {
    axios
    .get("http://localhost:4000/api/compliment/")
    .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios
    .get("http://localhost:4000/api/fortune/")
    .then(res => {
        alert(res.data)
    })
    .catch(err => console.log(err));
};
const getInspire = () => {
    axios
    .get("http://localhost:4000/api/inspire/") 
    .then(res => {
        alert(res.data)
    })
    .catch(err => console.log(err));
};
const getTime = () => {
    axios
    .get("http://localhost:4000/api/time/") 
    .then(res => {
        alert(res.data)
    })
    .catch(err => console.log(err));
};
const getResume = () => {
    axios
    .get("http://localhost:4000/api/resume/") 
    .then(res => {
        alert(res.data)
    })
    .catch(err => console.log(err));
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
inspireBtn.addEventListener('click', getInspire)
timeBtn.addEventListener('click', getTime)
resumeBtn.addEventListener('click', getResume)