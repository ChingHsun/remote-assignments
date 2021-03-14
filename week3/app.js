const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.redirect("/getData");
});

app.get("/getData", (req, res) => {
  const { number } = req.query;
  if (number === undefined) {
    return res.send("Lack of Parameter");
  } else if (isNaN(Number(number))) {
    return res.send("error: need to be number");
  } else {
    let text = "";
    let result = 0;
    for (let i = 1; i <= +number; i++) {
      if (i === +number) {
        text += `${i}`;
      } else {
        text += `${i} + `;
      }
      result += i;
    }
    return res.send(`${text} = ${result}`);
  }
});

app.use(express.static("public"));

app.listen(3000);
