const express = require("express");
const morgan = require("morgan");
const dataStorage = require("./dataStorage");

const app = express();

const PORT = process.env.Port || 3000;
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const companies = dataStorage.list();
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>FAANG Companies</title>
  </head>
  <body>
    <h1>Tech Giants</h1>
    <ul>
      ${companies
        .map(
          (company) =>
            `<h2><a href='/companies/${company.Name}'>${company.Name}</a></h2>`
        )
        .join("\n")}
  </body>
  </html>`;
  res.send(html);
});

app.use("/companies/:name", (req, res) => {
  const name = req.params.name;
  const company = dataStorage.find(name);
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>FAANG Companies</title>
  </head>
  <body>
    <h1><a href ='/'>${company.Name}</a></h1>
    <p class='CEO'>CEO: ${company.CEO} </p>
    <p>Revenue: ${company.Revenue}</p>
    <p>Number of Employees: ${company.NumberOfEmployees} </p>
  </body>
  </html>`;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
