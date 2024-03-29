const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune,getInspire,getTime,getResume} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/inspire", getInspire);
app.get("/api/time", getTime);
app.get("/api/resume", getResume);

app.listen(4000, () => console.log("Server running on 4000"));
