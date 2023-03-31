const express = require("express");
const { redirect } = require("express/lib/response");
const app = express();
const PORT = 8050;
app.set("view-enginer", "ejs");
// CONTROLLERS
app.use("/prehistoric_creatures", require("./controllers/prehistoric_creatures"))

// ROUTES

app.get("/", (req, res) => {
    // res.send("You've landed on the homepage!")
    res.render("home.ejs")
});

app.listen(PORT, console.log(`We're live from port ${PORT} 🥲`));