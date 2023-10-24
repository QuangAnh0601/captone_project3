import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));



app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/work", (req, res) => {
    res.render('work.ejs');
});

app.post("/submit", (req, res) => {
    const task = req.body.task;
    const redirectTo = req.body.redirectTo;
    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);
    
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    
    // current year
    let year = date_ob.getFullYear();
    
    // current hours
    let hours = date_ob.getHours();
    
    // current minutes
    let minutes = date_ob.getMinutes();
    
    // current seconds
    let seconds = date_ob.getSeconds();
    const timeStart = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    res.render(redirectTo +'.ejs', {task: task, timeStart: timeStart});
});

app.listen(port, () => {
    console.log(`Server running on  port ${port}`);
});