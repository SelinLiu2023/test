import express from "express";
import { stringify } from "querystring";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const spielAuswahl = [`rock`, `paper` ,`scissors`];
const serverAuswahl = spielAuswahl[Math.floor(Math.random()*spielAuswahl.length)];
console.log("serverAuswahl", serverAuswahl);

app.get("/hello", (req,res)=>{
    res.send("hello back\n");
});
// (z. B. „Du hast gewonnen!“, „Du hast verloren!“ oder „Unentschieden!“).
// - `playerChoice`: Die Wahl des Spielers.
// - `serverChoice`: Die zufällige Wahl des Servers.
// - `result`: Das Spielergebnis (z. B. „Du hast gewonnen!“, „Du hast verloren!“ oder „Unentschieden!“).

app.post("/guess",(req,res)=>{
    const playAuswahl = req.body.playAuswahl;
    const jsonAntwort ={
        playerChoice : playAuswahl,
        serverChoice : serverAuswahl,
        result :""
    };
    let result = "";
    switch (playAuswahl) {
        case "rock":
            if(serverAuswahl === "paper"){
                result = "Du hast verloren!";
            }else if(serverAuswahl === "rock"){
                result = "Unentschieden!";
            }else{
                result = "Du hast gewonnen!";
            }
            break;
        case "paper":
            if(serverAuswahl === "paper"){
                result = "Unentschieden!";
            }else if(serverAuswahl === "rock"){
                result = "Du hast gewonnen!";
            }else{
                result = "Du hast verloren!";
            }            break;

        case "scissors":
            if(serverAuswahl === "paper"){
                result = "Du hast gewonnen!";
            }else if(serverAuswahl === "rock"){
                result = "Du hast verloren!";
            }else{
                result = "Unentschieden!";
            }            break;
                
            default:
            break;
    }
    jsonAntwort.result = result;
    console.log("jsonAntwort", jsonAntwort);
    res.send(JSON.stringify(jsonAntwort));
});

app.listen(3000, ()=>{
    console.log("Server test started.");
});